# 🚀 Deployment Guide - Liquid Glass Portfolio

Complete guide to deploy your portfolio to GitHub Pages, Vercel, or Netlify.

## 📋 Pre-Deployment Checklist

- [ ] Update `src/data/data.json` with your information
- [ ] Set up EmailJS credentials (if using contact form)
- [ ] Add your Google Drive resume link
- [ ] Update theme colors in `src/index.css` if desired
- [ ] Test locally with `npm run dev` (http://localhost:3000)
- [ ] Run production build: `npm run build`
- [ ] Test build preview: `npm run preview`

## 🌐 Option 1: GitHub Pages (Recommended for Portfolio)

GitHub Pages is ideal for hosting your portfolio directly on GitHub.

### Step-by-Step Guide

#### 1. Create GitHub Repository

```bash
cd portfolio-app

# Initialize git (if not already done)
git init

# Add all files
git add .
git commit -m "Initial portfolio commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 2. Update Vite Configuration

Edit `vite.config.ts`:

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/YOUR_REPO_NAME/", // ⚠️ Change this to your repo name
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
  },
})
```

**Important**: If your repo name is `portfolio`, set `base: '/portfolio/'`

#### 3. Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/(root)**
4. Click **Save**

#### 4. Create GitHub Actions Workflow (Optional but Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 5. Deploy

```bash
npm run build
git add -A
git commit -m "Deploy production build"
git push
```

Your portfolio will be live at:

- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

**Examples:**

- `https://john-doe.github.io/portfolio/`
- `https://jane-smith.github.io/dev-portfolio/`

---

## ☁️ Option 2: Vercel (Zero-Config Deployment)

Vercel is optimized for React/Vite apps with automatic updates on every push.

### Step-by-Step Guide

#### 1. Push Code to GitHub

```bash
git add .
git commit -m "Initial portfolio"
git push
```

#### 2. Sign Up on Vercel

Visit https://vercel.com and sign up with GitHub.

#### 3. Import Project

1. Click "Add New..." → "Project"
2. Select your portfolio repository
3. Vercel auto-detects Vite framework
4. Click "Deploy"

#### 4. Custom Domain (Optional)

1. Go to project settings
2. Click "Domains"
3. Add your domain (requires DNS configuration)

### Your portfolio is now live!

- Preview: https://your-project-name.vercel.app
- Production: Your custom domain (if configured)

**Auto-deployment**: Every push to main automatically deploys!

---

## 🎨 Option 3: Netlify (Git-Based Deployment)

Similar to Vercel with a different interface.

### Step-by-Step Guide

#### 1. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio"
git push
```

#### 2. Connect to Netlify

1. Visit https://app.netlify.com
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository

#### 3. Configure Build Settings

Netlify usually auto-detects:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

Click "Deploy"

#### 4. Your site is live!

- URL: `https://[your-site-name].netlify.app`

---

## 🔧 Environment Variables

If you need environment variables (not required for this portfolio):

### GitHub Pages

Add to `src/data/data.json` instead.

### Vercel/Netlify

1. Go to project settings
2. Click "Environment Variables"
3. Add variables (e.g., `VITE_API_URL`)
4. Redeploy

---

## 📊 Build Output

The production build generates:

```
dist/
├── index.html                 (0.46 KB)
├── assets/
│   ├── index-[hash].css      (22.91 KB → 5.17 KB gzipped)
│   └── index-[hash].js       (416 KB → 137 KB gzipped)
└── ...other assets
```

**Total size**: ~137 KB gzipped
**Load time**: ~1-2 seconds on typical connection

---

## 🔄 Continuous Integration

### Auto-Redeploy on Content Change

All platforms auto-redeploy when you push to the repository:

```bash
# Edit your data
nano src/data/data.json

# Push changes
git add src/data/data.json
git commit -m "Update portfolio content"
git push

# ✅ Automatic deployment happens!
```

---

## 🌍 Custom Domain

### GitHub Pages + Custom Domain

1. Create `CNAME` file in project root with your domain:

```
yourdomain.com
```

2. Update your domain DNS:
   - CNAME: `[username].github.io`
   - Or use GitHub's nameservers

3. Push file

```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### Vercel/Netlify Custom Domain

1. In project settings, add custom domain
2. Update DNS at your registrar
3. GitHub auto-point to your domain

---

## 🧪 Testing Before Deploy

### Local Preview

Test the production build locally:

```bash
npm run build
npm run preview
```

This runs the exact build that will be deployed.

### Check for Issues

- [ ] No console errors
- [ ] All images load
- [ ] Animations smooth
- [ ] Theme toggle works
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] Links all working

---

## 🔐 Security Best Practices

1. **Never commit secrets** to the repository
2. Use `data.json` for configuration, not `.env` files
3. EmailJS public key is meant to be public (limited actions)
4. Keep dependencies updated: `npm update`

---

## 📱 Performance After Deploy

Check your site performance:

- **Lighthouse**: https://pagespeed.web.dev
- **WebPageTest**: https://www.webpagetest.org
- **GTmetrix**: https://gtmetrix.com

**Target metrics**:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 🆘 Troubleshooting

### "404 on subpages" (GitHub Pages)

**Solution**: Ensure `base` in `vite.config.ts` matches your repo name:

```ts
base: '/my-portfolio/',  // ✓ Correct
base: '/',               // ✗ Wrong for GitHub Pages
```

### "Build fails" on Vercel/Netlify

**Solution**: Check build logs, usually:

- Node version mismatch
- Missing dependency
- TypeScript error

Re-run locally: `npm run build`

### "EmailJS not working after deploy"

**Solution**:

- Verify Service ID, Template ID, in `data.json`
- Add domain to EmailJS allowed domains
- Check browser console for errors

### "Styles not loading" (Vercel/Netlify)

**Solution**: Clear cache and redeploy:

```bash
git commit --allow-empty -m "Force rebuild"
git push
```

---

## 📈 Analytics (Optional)

Add Google Analytics or Vercel Analytics:

1. Create account at https://analytics.google.com
2. Add tracking code to `public/index.html`
3. Or use Vercel's built-in analytics

---

## 🎉 Deployment Summary

| Platform         | Setup Time | Cost | Auto-Deploy | Custom Domain |
| ---------------- | ---------- | ---- | ----------- | ------------- |
| **GitHub Pages** | 5 min      | Free | ✅ Yes      | ✅ Yes        |
| **Vercel**       | 2 min      | Free | ✅ Yes      | ✅ Yes        |
| **Netlify**      | 2 min      | Free | ✅ Yes      | ✅ Yes        |

**Recommendation**: GitHub Pages if your code is on GitHub, Vercel for easiest setup.

---

## 📞 Support

- GitHub Pages docs: https://docs.github.com/pages
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Vite deployment: https://vitejs.dev/guide/static-deploy.html

---

**Your portfolio is now ready to share with the world!** 🌟
