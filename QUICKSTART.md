# Quick Start Guide

Get your Jax Sod website running in 5 minutes.

## Step 1: Install Dependencies (2 min)

```bash
cd "C:\Users\bigbr\OneDrive\Desktop\combined for nov 2025\october jaxsod website redo\old website instances\newest jaxsod website\test to restore site\jaxsod-nextjs-site"

npm install
```

## Step 2: Start Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Essential Updates (2 min)

### A. Contact Form Email

**File**: `components/ContactForm.tsx` (line ~30)

```typescript
// Change this:
const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {

// To your actual email:
const response = await fetch('https://formsubmit.co/ajax/info@jaxsod.com', {
```

### B. Domain Name

Find and replace `https://jaxsod.com` with your actual domain in these files:
- `app/sitemap.ts`
- `app/robots.ts`
- `components/LocalBusinessSchema.tsx`

## That's It!

Your website is now running locally.

### Next Steps:

1. **Test everything**: Click through all pages, test the contact form, try the calculator
2. **Deploy**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions
3. **Customize**: Update colors, content, and images as needed

## Need Help?

- **Full documentation**: See [README.md](./README.md)
- **Deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js docs**: [nextjs.org/docs](https://nextjs.org/docs)

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check for errors
```

---

**Ready to deploy?** Use Vercel for the easiest deployment:

1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on every push

See DEPLOYMENT.md for complete instructions.
