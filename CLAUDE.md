# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a complete, production-ready portfolio website for Sriram Varma Vatsavayi built with React and Tailwind CSS. The website showcases his technical skills, education, experience, projects, and volunteer work in a modern, professional design.

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **PostCSS**: ES Module configuration (postcss.config.mjs)
- **Fonts**: Inter (body text), Poppins (headings)
- **Features**: Dark/light mode toggle, responsive design, smooth animations, contact form, interactive elements

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Header with navigation and theme toggle
│   ├── Hero.jsx        # Landing section with intro
│   ├── About.jsx       # About section with photo placeholder
│   ├── Education.jsx   # Education timeline
│   ├── Experience.jsx  # Work experience cards
│   ├── Skills.jsx      # Skills with progress bars
│   ├── Projects.jsx    # Project showcase cards
│   ├── Volunteer.jsx   # Volunteer experience
│   └── Contact.jsx     # Contact form and information
├── hooks/
│   └── useTheme.js     # Dark/light mode management
├── data/
│   └── portfolioData.js # All portfolio content and data
└── assets/
    └── images/         # Image assets (placeholder structure)
```

## Key Features Implemented

1. **Responsive Design**: Mobile-first approach, works on all screen sizes
2. **Dark/Light Mode**: System preference detection with manual toggle
3. **Smooth Navigation**: Scroll-to-section navigation with active states
4. **Interactive Elements**: Hover effects, animations, form validation
5. **SEO Optimized**: Meta tags, semantic HTML, accessibility features
6. **Performance**: Optimized images, lazy loading, efficient CSS

## Component Architecture

- **Navigation**: Fixed header with smooth scroll, responsive mobile menu
- **Hero**: Gradient background with floating animations and social links
- **About**: Two-column layout with photo placeholder and contact info
- **Education**: Interactive timeline with alternating card layout
- **Experience**: Detailed experience cards with skills tags
- **Skills**: Visual progress bars and technology stack cloud
- **Projects**: Hover cards with technology badges and external links
- **Volunteer**: Clean layout showcasing community involvement
- **Contact**: Functional form with validation and multiple contact options

## Styling System

- **Colors**: Professional blue/gray palette with gradient accents
- **Typography**: Inter for body text, Poppins for headings
- **Animations**: Fade-in, slide-up, hover effects, loading states
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Dark Mode**: Complete dark theme with proper contrast ratios

## Data Management

All portfolio content is centralized in `src/data/portfolioData.js`:
- Personal information and contact details
- Education timeline with institutions and grades
- Work experience with responsibilities and achievements
- Skills categorized by type with proficiency levels
- Projects with features, technologies, and links
- Volunteer experience and social links

## Customization Guide

To update portfolio content:
1. Edit `src/data/portfolioData.js` for all text content
2. Replace photo placeholders in components
3. Update social links and contact information
4. Modify color scheme in `tailwind.config.js`
5. Add new sections by creating components and importing in App.jsx

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Important Notes

- **PostCSS Configuration**: Uses `postcss.config.mjs` (ES Module format) for compatibility with Vite's ES module setup
- **Tailwind Version**: Uses v3.4.17 for stable compatibility with PostCSS configuration
- **Build Output**: Production build generates ~31KB CSS and ~254KB JS (gzipped: 5.69KB CSS, 71.13KB JS)