/**
 * Web Vitals Real User Monitoring (RUM)
 * Tracks Core Web Vitals and reports to analytics
 * 
 * Metrics tracked:
 * - LCP (Largest Contentful Paint) - loading performance
 * - FID (First Input Delay) - interactivity
 * - CLS (Cumulative Layout Shift) - visual stability
 * - FCP (First Contentful Paint) - perceived load speed
 * - TTFB (Time to First Byte) - server response time
 * - INP (Interaction to Next Paint) - responsiveness
 */

type MetricName = 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';

interface WebVitalMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Thresholds based on Google's Core Web Vitals
const THRESHOLDS: Record<MetricName, [number, number]> = {
  LCP: [2500, 4000],      // Good < 2.5s, Poor > 4s
  FID: [100, 300],        // Good < 100ms, Poor > 300ms
  CLS: [0.1, 0.25],       // Good < 0.1, Poor > 0.25
  FCP: [1800, 3000],      // Good < 1.8s, Poor > 3s
  TTFB: [800, 1800],      // Good < 800ms, Poor > 1.8s
  INP: [200, 500],        // Good < 200ms, Poor > 500ms
};

function getRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const [good, poor] = THRESHOLDS[name];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

// Store metrics for debugging
const metricsLog: WebVitalMetric[] = [];

/**
 * Report metric to analytics endpoint
 */
function reportMetric(metric: WebVitalMetric) {
  metricsLog.push(metric);
  
  // Log to console in development
  if (import.meta.env.DEV) {
    const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
    console.log(`${color} ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  }

  // Send to analytics (Google Analytics, custom endpoint, etc.)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag may not be typed
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.rating,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint if configured
  const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  if (analyticsEndpoint) {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      page: window.location.pathname,
      timestamp: Date.now(),
    });

    // Use sendBeacon for reliability (won't be cancelled on page unload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, body);
    } else {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body,
        keepalive: true,
      }).catch(() => {});
    }
  }
}

/**
 * Initialize Web Vitals monitoring
 * Uses PerformanceObserver API for accurate measurements
 */
export function initWebVitals() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // Track LCP (Largest Contentful Paint)
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      
      reportMetric({
        name: 'LCP',
        value: lastEntry.startTime,
        rating: getRating('LCP', lastEntry.startTime),
        delta: lastEntry.startTime,
        id: `lcp-${Date.now()}`,
      });
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {}

  // Track FID (First Input Delay)
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0] as PerformanceEventTiming;
      const value = firstEntry.processingStart - firstEntry.startTime;
      
      reportMetric({
        name: 'FID',
        value,
        rating: getRating('FID', value),
        delta: value,
        id: `fid-${Date.now()}`,
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {}

  // Track CLS (Cumulative Layout Shift)
  try {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as (PerformanceEntry & { hadRecentInput: boolean; value: number })[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Report CLS on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && clsValue > 0) {
        reportMetric({
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          delta: clsValue,
          id: `cls-${Date.now()}`,
        });
      }
    });
  } catch (e) {}

  // Track FCP (First Contentful Paint)
  try {
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcpEntry = entries.find(e => e.name === 'first-contentful-paint');
      
      if (fcpEntry) {
        reportMetric({
          name: 'FCP',
          value: fcpEntry.startTime,
          rating: getRating('FCP', fcpEntry.startTime),
          delta: fcpEntry.startTime,
          id: `fcp-${Date.now()}`,
        });
      }
    });
    fcpObserver.observe({ type: 'paint', buffered: true });
  } catch (e) {}

  // Track TTFB (Time to First Byte)
  try {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      const ttfb = navEntry.responseStart - navEntry.requestStart;
      reportMetric({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb,
        id: `ttfb-${Date.now()}`,
      });
    }
  } catch (e) {}

  // Track INP (Interaction to Next Paint) - experimental
  try {
    let maxINP = 0;
    const inpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as PerformanceEventTiming[]) {
        const duration = entry.duration;
        if (duration > maxINP) {
          maxINP = duration;
        }
      }
    });
    inpObserver.observe({ type: 'event', buffered: true });

    // Report INP on page hide
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && maxINP > 0) {
        reportMetric({
          name: 'INP',
          value: maxINP,
          rating: getRating('INP', maxINP),
          delta: maxINP,
          id: `inp-${Date.now()}`,
        });
      }
    });
  } catch (e) {}
}

/**
 * Get all logged metrics (for debugging)
 */
export function getMetricsLog(): WebVitalMetric[] {
  return [...metricsLog];
}

/**
 * Get summary of current metrics
 */
export function getMetricsSummary(): Record<MetricName, WebVitalMetric | null> {
  const summary: Partial<Record<MetricName, WebVitalMetric>> = {};
  
  for (const metric of metricsLog) {
    summary[metric.name] = metric;
  }
  
  return {
    LCP: summary.LCP || null,
    FID: summary.FID || null,
    CLS: summary.CLS || null,
    FCP: summary.FCP || null,
    TTFB: summary.TTFB || null,
    INP: summary.INP || null,
  };
}
