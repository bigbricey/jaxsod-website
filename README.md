# Jax Sod - Next.js Website

Professional, production-ready website for Jax Sod - Jacksonville's premier sod installation specialists with 37+ years of experience.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**:
  - Metadata on all pages
  - Schema.org LocalBusiness markup
  - Automatic sitemap generation
  - Robots.txt configuration
- **Performance Optimized**: Fast loading with Next.js Image optimization
- **Production Ready**: Complete with all pages, components, and functionality

## Pages

- **Homepage** (`/`) - Hero section, services overview, testimonials, calculator
- **Services** (`/services`) - Detailed residential and commercial services
- **About** (`/about`) - Company history, values, and service area
- **Contact** (`/contact`) - Contact form, business info, and FAQs
- **Articles** (`/articles`) - Blog listing with SEO-focused articles

## Components

- `Header.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Footer with links and contact info
- `Hero.tsx` - Reusable hero sections
- `ServiceCard.tsx` - Service display cards
- `ContactForm.tsx` - Working contact form
- `Calculator.tsx` - Sod cost calculator
- `TestimonialCard.tsx` - Customer testimonials
- `LocalBusinessSchema.tsx` - SEO schema markup

## Installation

1. **Clone or navigate to the project directory**

```bash
cd "C:\Users\bigbr\OneDrive\Desktop\combined for nov 2025\october jaxsod website redo\old website instances\newest jaxsod website\test to restore site\jaxsod-nextjs-site"
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Contact Form Setup

The contact form uses FormSubmit.co. To configure:

1. Open `components/ContactForm.tsx`
2. Replace `your-email@example.com` with your actual email:

```typescript
const response = await fetch('https://formsubmit.co/ajax/YOUR-EMAIL@example.com', {
```

3. For first submission, FormSubmit will send a confirmation email

### Update Business Information

**Phone Number**: Update in multiple locations:
- `components/Header.tsx`
- `components/Footer.tsx`
- All page files with phone CTAs

**Service Area**: Update in:
- `app/about/page.tsx` - Service area list
- `components/LocalBusinessSchema.tsx` - Schema.org markup

**Business Hours**: Update in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `components/LocalBusinessSchema.tsx`

### SEO Configuration

**Update Domain**: Replace `https://jaxsod.com` throughout:
- `app/sitemap.ts`
- `app/robots.ts`
- `components/LocalBusinessSchema.tsx`
- `app/layout.tsx` (metadata)

**Google Verification**: Add your code in `app/layout.tsx`:

```typescript
verification: {
  google: 'your-actual-verification-code',
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Create GitHub repository** (if not done already)

```bash
git init
git add .
git commit -m "Initial commit: Jax Sod Next.js website"
git branch -M main
git remote add origin YOUR-GITHUB-REPO-URL
git push -u origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js settings
- Click "Deploy"

3. **Configure Custom Domain** (Optional)

- In Vercel dashboard, go to Project Settings > Domains
- Add your custom domain (e.g., jaxsod.com)
- Follow DNS configuration instructions

### Deploy to Netlify

1. **Build the project**

```bash
npm run build
```

2. **Deploy**

- Go to [netlify.com](https://netlify.com)
- Click "Add new site" > "Import an existing project"
- Connect to your GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`
- Click "Deploy site"

### Environment Variables

No environment variables are required for basic functionality. The contact form uses FormSubmit.co which doesn't require API keys.

## Project Structure

```
jaxsod-nextjs-site/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── articles/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Calculator.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LocalBusinessSchema.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* Green shades */ },
  secondary: { /* Gray shades */ },
}
```

### Images

Replace placeholder images from Unsplash with your own:

1. Add images to `public/images/`
2. Update image paths in components and pages
3. Images are automatically optimized by Next.js

### Content

All content is in the page files. Update:

- Service descriptions in `app/services/page.tsx`
- Company story in `app/about/page.tsx`
- Testimonials in `app/page.tsx`
- Article listings in `app/articles/page.tsx`

## SEO Best Practices

- All pages have unique titles and meta descriptions
- Semantic HTML structure throughout
- LocalBusiness schema.org markup included
- Automatic sitemap generation
- Proper image alt tags (add to your images)
- Fast loading with optimized images
- Mobile-responsive design

## Support

For questions about the code or deployment:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel deployment guide: [vercel.com/docs](https://vercel.com/docs)

## License

This website is proprietary and owned by Jax Sod.

## Version

Version 1.0.0 - October 2024

---

Built with Next.js 14, TypeScript, and Tailwind CSS
