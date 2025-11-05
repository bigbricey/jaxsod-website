# Deployment Guide - Jax Sod Website

Complete step-by-step guide to deploy your Next.js website to production.

## Pre-Deployment Checklist

Before deploying, complete these essential steps:

### 1. Update Contact Form Email

**File**: `components/ContactForm.tsx`

Replace the placeholder email with your actual email:

```typescript
// Line ~30
const response = await fetch('https://formsubmit.co/ajax/YOUR-ACTUAL-EMAIL@example.com', {
```

### 2. Update Domain References

Replace `https://jaxsod.com` with your actual domain in:

- `app/sitemap.ts`
- `app/robots.ts`
- `components/LocalBusinessSchema.tsx`
- `app/layout.tsx` (OpenGraph metadata)

### 3. Add Google Verification Code

**File**: `app/layout.tsx`

```typescript
verification: {
  google: 'your-actual-google-verification-code', // Get from Google Search Console
}
```

### 4. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 and test:
- All navigation links work
- Forms submit correctly
- Mobile menu functions
- Calculator works
- All pages load properly

### 5. Build Test

```bash
npm run build
```

Ensure build completes without errors.

## Deployment Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js deployment with automatic optimizations.

### Step 1: Create GitHub Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Jax Sod Next.js website"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/jaxsod-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (connect with GitHub)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
6. Click **"Deploy"**

Vercel will:
- Install dependencies
- Build your site
- Deploy to a temporary URL
- Provide a production URL (e.g., jaxsod-website.vercel.app)

### Step 3: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** > **Domains**
3. Add your domain (e.g., `jaxsod.com`)
4. Follow Vercel's DNS instructions:
   - **Option A**: Change nameservers (recommended)
   - **Option B**: Add A/CNAME records

**Typical DNS Configuration**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Wait for DNS propagation (can take up to 48 hours)

### Step 4: Enable HTTPS

Vercel automatically provisions SSL certificates. HTTPS will be active once DNS propagates.

## Deployment Option 2: Netlify

### Step 1: Create GitHub Repository

Same as Vercel Step 1 above.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click **"Add new site"** > **"Import an existing project"**
4. Choose **GitHub** and authorize
5. Select your repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)
7. Click **"Deploy site"**

### Step 3: Add Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `jaxsod.com`)
4. Follow DNS instructions

**Typical DNS Configuration**:
```
Type: A
Name: @
Value: [Netlify's IP - provided in dashboard]

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

## Deployment Option 3: Traditional Hosting (cPanel)

For traditional shared hosting with Node.js support:

### Prerequisites

- Node.js hosting (minimum Node 18+)
- SSH access
- PM2 or similar process manager

### Steps

1. **Build locally**:
```bash
npm run build
```

2. **Upload files via FTP/SFTP**:
   - Upload entire project folder
   - Include `node_modules` OR run `npm install` on server

3. **SSH into server**:
```bash
ssh username@your-server.com
cd /path/to/your/site
```

4. **Install dependencies**:
```bash
npm install --production
```

5. **Start with PM2**:
```bash
pm2 start npm --name "jaxsod" -- start
pm2 save
pm2 startup
```

6. **Configure reverse proxy** (Apache or Nginx)

**Nginx Example**:
```nginx
server {
    listen 80;
    server_name jaxsod.com www.jaxsod.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment Tasks

### 1. Test Production Site

Visit your live site and verify:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits (test with real email)
- [ ] Calculator functions
- [ ] Mobile menu works
- [ ] Images load properly
- [ ] Phone links work on mobile

### 2. Submit Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership (using verification code from earlier)
4. Submit sitemap: `https://jaxsod.com/sitemap.xml`

### 3. Set Up Analytics (Optional)

**Google Analytics**:
1. Create GA4 property
2. Get measurement ID
3. Add to `app/layout.tsx`:

```typescript
<head>
  <LocalBusinessSchema />
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </Script>
</head>
```

### 4. Test Contact Form

1. Submit test form with your email
2. Check if you receive the email
3. If using FormSubmit.co, confirm your email on first submission
4. Test again to ensure it works

### 5. Set Up Email Forwarding (Optional)

If using Vercel/Netlify without email hosting:
- Use FormSubmit.co (already configured)
- Or set up Mailgun/SendGrid for transactional emails

## Monitoring and Maintenance

### Vercel Dashboard

Monitor:
- Deployment status
- Build logs
- Analytics (built-in)
- Errors and warnings

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Test locally
npm run dev

# Build and test
npm run build

# Commit and push (triggers auto-deploy)
git add .
git commit -m "Update dependencies"
git push
```

### Backup Strategy

- Code is backed up on GitHub automatically
- Vercel/Netlify maintain deployment history
- Download builds periodically for extra safety

## Troubleshooting

### Build Fails

**Check**:
- Node version compatibility (use Node 18+)
- All dependencies installed
- No TypeScript errors
- Build command is correct

**View logs**:
- Vercel: Deployments > Latest > View Logs
- Netlify: Deploys > Latest > Deploy Log

### Images Not Loading

**Verify**:
- Image domains configured in `next.config.js`
- Images exist at specified URLs
- Next.js Image component used correctly

### Form Not Submitting

**Check**:
- Email configured in `ContactForm.tsx`
- FormSubmit.co email confirmed
- Browser console for errors
- Network tab shows successful POST

### Domain Not Connecting

**Verify**:
- DNS records configured correctly
- Wait 24-48 hours for propagation
- Check DNS propagation: [dnschecker.org](https://dnschecker.org)

## Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **FormSubmit**: [formsubmit.co](https://formsubmit.co)

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Deployment
git push             # Deploy (if connected to Vercel/Netlify)

# Maintenance
npm update           # Update dependencies
npm run lint         # Check for errors
```

### Important Files

- `next.config.js` - Next.js configuration
- `package.json` - Dependencies
- `tailwind.config.ts` - Tailwind CSS settings
- `components/ContactForm.tsx` - Contact form (update email)
- `components/LocalBusinessSchema.tsx` - SEO schema

---

**Estimated Deployment Time**: 15-30 minutes

**Recommended**: Vercel deployment for easiest setup and best performance.
