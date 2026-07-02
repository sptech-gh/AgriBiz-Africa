import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  onLoad?: () => void;
}

// Image size configurations
const IMAGE_CONFIGS: Record<string, number[]> = {
  'hero-ghana-farmers': [480, 768, 1024, 1440, 1920],
  'about-bg': [480, 768, 1024, 1440],
  'product-seeds': [320, 480, 640],
  'product-fertilizer': [320, 480, 640],
  'product-pesticide': [320, 480, 640],
  'product-equipment': [320, 480, 640],
  'blog-maize': [320, 480, 640],
  'blog-fertilizer': [320, 480, 640],
  'blog-high-yield': [320, 480, 640],
  'blog-tomato': [320, 480, 640],
  'blog-vegetable-seeds': [320, 480, 640],
  'blog-pest-control': [320, 480, 640],
  'farm-visit-1': [320, 480, 640],
  'farm-visit-2': [320, 480, 640],
  'farm-visit-3': [320, 480, 640],
  'farm-visit-4': [320, 480, 640],
  'farmer-training-program': [320, 480, 640],
  'field-demonstrations': [320, 480, 640],
  'community-outreach': [320, 480, 640],
  'testimonial-video-poster': [480, 768]
};

/**
 * ResponsiveImage Component
 * Automatically serves AVIF > WebP > JPG based on browser support
 * Uses srcset for responsive loading based on viewport
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad
}: ResponsiveImageProps) => {
  const [hasError, setHasError] = useState(false);
  
  // Extract image name from path (e.g., '/images/hero-ghana-farmers.webp' -> 'hero-ghana-farmers')
  const imageName = src.split('/').pop()?.replace(/\.(webp|jpg|jpeg|png|avif)$/i, '') || '';
  const availableSizes = IMAGE_CONFIGS[imageName];
  
  // If no optimized versions exist, fall back to original image
  if (!availableSizes || hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={onLoad}
        onError={() => setHasError(true)}
      />
    );
  }

  // Generate srcset strings for each format
  const generateSrcSet = (format: 'avif' | 'webp') => {
    return availableSizes
      .map(size => `/images/optimized/${imageName}-${size}w.${format} ${size}w`)
      .join(', ');
  };

  const avifSrcSet = generateSrcSet('avif');
  const webpSrcSet = generateSrcSet('webp');
  const fallbackSrc = `/images/optimized/${imageName}.webp`;

  return (
    <picture>
      {/* AVIF - Best compression, modern browsers */}
      <source
        type="image/avif"
        srcSet={avifSrcSet}
        sizes={sizes}
      />
      {/* WebP - Good compression, wide support */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      {/* Fallback */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={onLoad}
        onError={() => setHasError(true)}
        decoding="async"
      />
    </picture>
  );
};

export default ResponsiveImage;
