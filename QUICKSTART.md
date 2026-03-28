# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 📦 Installation (Already Done!)

✅ Project is already fully set up with:

- React 19 + TypeScript
- Vite build system
- Tailwind CSS v4
- Framer Motion + GSAP animations
- All components built

## 🎯 Next Steps

### 1. Update Your Content (5 min)

Edit `src/data/data.json`:

```json
{
  "introduction": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "description": "Your bio/description"
  },
  "socials": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "medium": "https://medium.com/@yourprofile"
    // ... fill in all social links
  },
  "experience": [
    {
      "id": "job1",
      "company": "Company Name",
      "position": "Your Position",
      "duration": "2024 - Present",
      "description": "What you did",
      "technologies": ["React", "Node.js"],
      "highlights": ["Achievement 1", "Achievement 2"]
    }
    // Add more jobs
  ]
  // ... fill in expertise, projects, testimonials, contact
}
```

### 2. Test Locally (1 min)

```bash
cd portfolio-app
npm run dev
```

Open http://localhost:3000 and see your portfolio!

### 3. Set Up Contact Form (Optional, 5 min)

**Option A: With EmailJS**

1. Sign up at https://www.emailjs.com (free)
2. Create email service + template
3. Copy your Service ID, Template ID, Public Key
4. Update `src/data/data.json`:

```json
"contact": {
  "email": "your@email.com",
  "emailjs": {
    "serviceId": "service_xxxxx",
    "templateId": "template_xxxxx",
    "publicKey": "your_public_key"
  }
}
```

**Option B: Without EmailJS**

Just add your email in `src/data/data.json`. Users will see a fallback button to email you directly.

### 4. Add Your Resume (2 min)

1. Upload PDF to Google Drive
2. Share with "Anyone with link can view"
3. Get link: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. Update `src/data/data.json`:

```json
"resume": {
  "driveLink": "https://drive.google.com/file/d/...",
  "fileName": "YourName_Resume.pdf"
}
```

### 5. Deploy (2 min)

```bash
npm run build
git add .
git commit -m "Add my portfolio"
git push
```

Then enable GitHub Pages in repo Settings → Pages.

**Your portfolio is live!** 🎉

## 🎨 Customize Colors

Edit `src/index.css`, look for:

```css
[data-theme="dark"] {
  --bg0: #0c1519; /* Background */
  --accent1: #cf9d7b; /* Main accent (change this!) */
  --accent2: #724b39;
  --accent3: #3a5560;
  /* ... other variables */
}
```

Change `--accent1` for a quick color scheme change!

## 📱 Check Responsiveness

The portfolio automatically works on:

- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

Test by resizing your browser or opening on your phone!

## 🚀 Production Build

```bash
npm run build
```

Creates optimized build in `dist/` folder:

- **Size**: 137 KB gzipped
- **Load time**: ~1-2 seconds
- **Fully optimized**: Code split, minified, CSS purged

## 📝 Available Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Create production build
npm run preview    # Preview production build locally
npm run deploy     # Reminder command for deployment
```

## 🆘 Common Questions

**Q: How do I change the theme?**
A: Click the moon/sun icon in the header. Preference is saved in browser.

**Q: Can I add more sections?**
A: Yes! Create component in `src/components/sections/`, add data to `data.json`, import in `App.tsx`.

**Q: How do I deploy?**
A: See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide (GitHub Pages, Vercel, Netlify).

**Q: How do I modify animations?**
A: - Framer Motion: Edit component JSX

- GSAP: Edit `src/components/sections/HeroAnimations.tsx`

**Q: Can I use a custom domain?**
A: Yes! See deployment guide for steps.

## 📚 Full Documentation

- **Components**: Check `src/components/sections/` for individual component docs
- **Styling**: Edit `src/index.css` for global styles
- **Data**: Edit `src/data/data.json` for content
- **Theme**: Update CSS variables in `src/index.css`
- **Deployment**: Read [DEPLOYMENT.md](DEPLOYMENT.md)

## ✨ Portfolio Highlights

Your portfolio includes:

✅ **Hero Section**

- Terminal simulation animation
- Trade visualization with GSAP
- Framer Motion transitions

✅ **About Section**

- Professional introduction
- Social links with hover effects
- Smooth fade-in animations

✅ **Experience Timeline**

- Work history display
- Technology badges
- Highlight bullets

✅ **Skills Section**

- Skill categories with progress bars
- Animated bar fills
- Responsive grid layout

✅ **Projects Showcase**

- Project cards with glass morphism
- Technology badges
- Links to GitHub/Live demos
- Hover animations

✅ **Testimonials**

- Star ratings
- Client quotes
- Professional endorsements

✅ **Contact Form**

- EmailJS integration
- Fallback email display
- Smooth form validation

✅ **Dark/Light Theme**

- Toggleable theme
- Persistent preference
- Full color customization

## 🎯 Your Checklist

- [ ] Updated `data.json` with your content
- [ ] Tested locally with `npm run dev`
- [ ] Set up EmailJS (optional)
- [ ] Added Google Drive resume link
- [ ] Customized colors if desired
- [ ] Ran `npm run build` successfully
- [ ] Deployed to GitHub Pages/Vercel/Netlify
- [ ] Shared portfolio with friends! 🎉

## 🎊 Ready?

Your portfolio is now production-ready!

**Next**: Deploy it and share the link!

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options →
