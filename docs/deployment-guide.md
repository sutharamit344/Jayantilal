# Production Deployment & Hosting Guide: Jayantilal Suthar

This guide provides instructions for deploying this Next.js application to **Vercel** or any standard Node.js hosting platform.

---

## 1. Environment Variables Configuration

Create a `.env.production` or configure Environment Variables in your hosting dashboard:

```env
# Production domain (without trailing slash)
NEXT_PUBLIC_SITE_URL=https://jayantilalsuthar.com

# Optional CRM or Form forwarding webhook
# NOTIFICATION_WEBHOOK_URL=https://api.telegram.org/... or Zapier/Make webhook
```

---

## 2. Deployment on Vercel (Recommended)

1. **Connect Git Repository**: Push your code to GitHub, GitLab, or Bitbucket.
2. **Import into Vercel**:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build` (Default)
   - Output Directory: `.next` (Default)
   - Install Command: `npm install`
3. **Configure Custom Domain**:
   - In Vercel Project Settings > **Domains**, add `jayantilalsuthar.com` and `www.jayantilalsuthar.com`.
   - Add DNS Records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
     - **A Record**: `@` -> `76.76.21.21`
     - **CNAME Record**: `www` -> `cname.vercel-dns.com`
4. **SSL / HTTPS**: Vercel automatically issues an SSL certificate via Let's Encrypt once DNS propagates.

---

## 3. Alternative: Self-Hosted Node.js / VPS (PM2)

If hosting on an Ubuntu/Linux VPS:
```bash
# 1. Install Node.js 20+ and PM2
npm install -g pm2

# 2. Build the application
npm run build

# 3. Start with PM2
pm2 start npm --name "jayantilal-portal" -- start -- -p 3000

# 4. Configure Nginx reverse proxy with SSL (Certbot)
```
