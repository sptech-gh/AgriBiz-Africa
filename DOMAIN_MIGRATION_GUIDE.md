# Domain Migration Guide
## agribiz.africa → Netlify Deployment

**Prepared by:** Cascade (Senior DevOps Engineer)
**Date:** April 12, 2026
**Domain Registrar:** GoDaddy
**Old Site:** https://agribiz.africa (previous developer's GitHub repo)
**New Site:** https://agribiz-africa.netlify.app

---

## Overview

This guide provides step-by-step instructions to migrate the custom domain `agribiz.africa` from its previous hosting to the new Netlify deployment, with zero downtime, HTTPS enabled, and correct www redirect configuration.

---

## Phase 1 — Add Custom Domain in Netlify

1. Go to **https://app.netlify.com** and select your `agribiz-africa` site
2. Navigate to **Site configuration → Domain management → Add a domain**
3. Enter `agribiz.africa` → click **Verify** → click **Add domain**
4. Repeat the same steps for `www.agribiz.africa`
5. Set the **primary domain** to `agribiz.africa`
   - Netlify will automatically redirect `www.agribiz.africa → agribiz.africa`

---

## Phase 2 — Clean Up Old DNS Records in GoDaddy

Log into GoDaddy → **My Products → DNS → agribiz.africa**

> **Before deleting:** Take a screenshot of the current DNS table for rollback reference.

Delete the following record types (old GitHub Pages / previous host):

| Type | Name | Action |
|------|------|--------|
| `A` | `@` | Delete any IP that is **not** `75.2.60.5` or `99.83.190.102` |
| `CNAME` | `www` | Delete any value pointing to GitHub (`*.github.io`) or old host |
| `ALIAS` / `ANAME` | `@` | Delete any old alias records |

---

## Phase 3 — Set New DNS Records in GoDaddy

Add or update these **exact** records in GoDaddy DNS:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `75.2.60.5` | 600 |
| `A` | `@` | `99.83.190.102` | 600 |
| `CNAME` | `www` | `agribiz-africa.netlify.app` | 600 |

> **Note:** In GoDaddy, `@` refers to the root domain (`agribiz.africa`).
> Set TTL to **600** (10 minutes) during migration for faster propagation.
> After confirming everything works, update TTL to `3600`.

---

## Phase 4 — Enable HTTPS in Netlify

1. In Netlify → **Domain management → HTTPS**
2. Click **"Verify DNS configuration"** — wait until both A records are detected
3. Click **"Provision certificate"** — Netlify uses Let's Encrypt (fully automatic, free)
4. Once the certificate is issued, enable the **"Force HTTPS"** toggle
   - This automatically redirects all `http://` traffic to `https://`

> Certificate provisioning takes **1–10 minutes** after DNS propagates.

---

## Phase 5 — Redirect Configuration

No additional configuration files are required. Netlify handles all redirects automatically:

| From | To | Type |
|------|----|------|
| `http://agribiz.africa` | `https://agribiz.africa` | 301 (Force HTTPS) |
| `http://www.agribiz.africa` | `https://agribiz.africa` | 301 (Primary domain) |
| `https://www.agribiz.africa` | `https://agribiz.africa` | 301 (Primary domain) |

---

## DNS Propagation Timeline

| Stage | Estimated Time |
|-------|---------------|
| GoDaddy DNS update visible | 5 – 15 minutes |
| Global DNS propagation | 30 minutes – 2 hours (with TTL = 600) |
| SSL certificate issued | 1 – 10 minutes after DNS detects |
| Full worldwide propagation | Up to 24 hours (rare edge cases) |

---

## Validation Steps

Run the following checks approximately **30 minutes** after making the DNS changes:

### 1. Check DNS Resolution (A Record)
```
nslookup agribiz.africa
```
**Expected result:** Returns `75.2.60.5` and/or `99.83.190.102`

### 2. Check WWW CNAME
```
nslookup www.agribiz.africa
```
**Expected result:** Resolves through `agribiz-africa.netlify.app`

### 3. Check HTTPS
```
curl -I https://agribiz.africa
```
**Expected result:** `HTTP/2 200` with `server: Netlify`

### 4. Check HTTP Redirect
```
curl -I http://agribiz.africa
```
**Expected result:** `301` redirect to `https://agribiz.africa`

### 5. Online Validation Tools (no installation required)

| Tool | URL | Purpose |
|------|-----|---------|
| DNS Checker | https://dnschecker.org | Check global DNS propagation |
| SSL Labs | https://www.ssllabs.com/ssltest | Verify SSL certificate grade |
| MX Toolbox | https://mxtoolbox.com/SuperTool.aspx | DNS record lookup |

---

## Zero-Downtime Note

Because DNS records are being replaced (not the domain deleted), there is a brief transition window equal to the current TTL duration. With TTL = 600:

- **Window:** ≤ 10 minutes for most resolvers
- **Effect:** Some users still reach old host; new resolvers see new site
- **Result:** The site will not go fully dark at any point during migration

---

## Final Checklist

Use this checklist to confirm migration is complete:

```
NETLIFY CONFIGURATION
  [ ] agribiz.africa added as custom domain
  [ ] www.agribiz.africa added as custom domain
  [ ] agribiz.africa set as primary domain
  [ ] DNS configuration verified in Netlify
  [ ] SSL certificate provisioned
  [ ] Force HTTPS enabled

GODADDY DNS
  [ ] Old A records (non-Netlify IPs) deleted
  [ ] Old CNAME www record deleted
  [ ] A record: @ → 75.2.60.5 added
  [ ] A record: @ → 99.83.190.102 added
  [ ] CNAME record: www → agribiz-africa.netlify.app added
  [ ] TTL set to 600 during migration

VALIDATION
  [ ] https://agribiz.africa loads new website
  [ ] https://www.agribiz.africa redirects correctly
  [ ] HTTPS padlock visible in browser
  [ ] HTTP redirects to HTTPS (301)
  [ ] No DNS conflicts or errors in Netlify dashboard
  [ ] SSL Labs test returns Grade A
```

---

## Support & Reference

- **Netlify Custom Domains Docs:** https://docs.netlify.com/domains-https/custom-domains/
- **Netlify DNS IP Addresses:** `75.2.60.5` and `99.83.190.102`
- **GoDaddy DNS Help:** https://uk.godaddy.com/help/manage-dns-records-680
- **Let's Encrypt (SSL):** Automatically provisioned by Netlify — no manual action needed

---

*Document prepared for Agribiz Africa domain migration — April 2026*
