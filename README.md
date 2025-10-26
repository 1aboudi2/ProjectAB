# Translation Portfolio Website

A modern, production-ready portfolio website for translation and localization services built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript + Tailwind CSS
- **Smooth Animations**: Framer Motion with scroll-based reveals
- **Dark/Light Mode**: Persistent theme switching with localStorage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, structured content
- **Performance**: Optimized builds, lazy loading, reduced motion support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation with theme toggle
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Section.tsx     # Animated section wrapper
│   ├── ServicesGrid.tsx # Services showcase
│   ├── LanguagesStrip.tsx # Language pairs display
│   ├── Footer.tsx      # Footer with contact info
│   ├── ProjectOverview.tsx # Project details card
│   ├── Timeline.tsx    # Process timeline
│   ├── Tabs.tsx        # Source/Translation comparison
│   ├── GlossaryAndStyleGuide.tsx # QA sections
│   └── KpiCounters.tsx # Animated counters
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   └── Project.tsx     # Project detail page
├── hooks/              # Custom React hooks
│   └── useInView.ts    # Intersection observer & count-up
├── content/            # Content management
│   └── site.ts         # All editable content
└── assets/             # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd translator-portfolio
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization

### Replace Profile Image

1. **Add your photo:**
   - Replace `/public/profile.jpg` with your professional headshot
   - Recommended size: 400x400px or larger
   - Supported formats: JPG, PNG, WebP

2. **Update image reference:**
   - The image is automatically referenced in `src/content/site.ts`
   - No code changes needed if you keep the filename `profile.jpg`

### Edit Content

All text content is centralized in `src/content/site.ts`:

```typescript
// TODO: Replace with your info
export const siteContent = {
  siteName: "SB Translations", // Your business name
  contactEmail: "contact@sbtranslations.com", // Your email
  // ... edit all content here
};
```

**Key sections to customize:**
- `siteName`: Your business/portfolio name
- `contactEmail`: Your contact email
- `about`: Your bio and highlights
- `services`: Your service offerings
- `languages`: Language pairs you work with
- `sampleProject`: Replace with real project data

### Styling & Branding

**Colors:** Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    // Your brand colors
    500: '#your-color',
    // ... other shades
  }
}
```

**Fonts:** Change in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## 📱 Pages & Features

### Home Page (`/`)
- **Hero Section**: Title, subtitle, CTA button
- **About Teaser**: Bio with key highlights
- **Services Grid**: 4 service cards with icons
- **Languages Strip**: Language pairs with flags
- **Footer**: Contact info and social links

### Project Page (`/project`)
- **Project Overview**: Client, domain, word count, tools
- **Process Timeline**: 5-step translation workflow
- **Sample Translation**: Before/after comparison with copy buttons
- **Glossary & Style Guide**: Quality assurance details
- **KPI Counters**: Animated performance metrics

## 🎭 Animations

**Framer Motion Features:**
- Scroll-triggered reveals for all sections
- Staggered animations for grid items
- Hover effects on interactive elements
- Count-up animations for statistics
- Reduced motion support (respects `prefers-reduced-motion`)

**Custom Hooks:**
- `useInView`: Intersection observer for scroll animations
- `useCountUp`: Animated number counting

## 🌙 Dark Mode

- **Toggle**: Located in navbar (sun/moon icon)
- **Persistence**: Saved in localStorage
- **System Preference**: Respects user's OS setting
- **Smooth Transitions**: All components support both themes

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Clear focus indicators

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy from GitHub or drag & drop

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/translator-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Performance

**Lighthouse Scores Target:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Optimizations:**
- Code splitting with React Router
- Optimized images and assets
- Minimal bundle size
- Efficient animations

## 🐛 Troubleshooting

**Common Issues:**

1. **Profile image not showing:**
   - Ensure `profile.jpg` exists in `/public/`
   - Check file permissions and format

2. **Animations not working:**
   - Check if `prefers-reduced-motion` is enabled
   - Verify Framer Motion is installed

3. **Dark mode not persisting:**
   - Clear localStorage and try again
   - Check browser console for errors

4. **Build errors:**
   - Run `npm run lint` to check for issues
   - Ensure all imports are correct

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Need help?** Check the issues section or create a new one with detailed information about your problem.
