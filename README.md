# WodiPortfolio

Professional portfolio website for Caleb Wodi, systems engineer building open source developer tools and infrastructure.

**Live:**
[calebwodi.com](https://calebwodi.com)

Other links:
[calebwodi.vercel.app](https://calebwodi.vercel.app),
[calchiwo.vercel.app](https://calchiwo.vercel.app),
[calebwodi.web.app](https://calebwodi.web.app), 
[calebwodi.netlify.app](https://calebwodi.netlify.app),
[calchiwo.netlify.app](https://calchiwo.netlify.app)

## Features

- Smooth scroll navigation between sections (Header and Footer)
- Dark/light theme toggle with localStorage persistence
- Fully responsive design
- Semantic HTML with proper accessibility
- OpenGraph and Twitter meta tags
- Smooth scroll navigation between About, Projects, and Contact sections
- Avatar and proper SEO optimization (OpenGraph, Twitter cards, keywords)
- Responsive design

## Stack

- **Next.js 16**: App Router, SSR, image optimization and proper caching
- **React 19**: UI components and state management
- **Tailwind CSS 4**: Utility-first styling
- **TypeScript**: Type safety
- **Lucide React**: Icon library (Sun, Moon)
- **Vercel Analytics**: Production Monitoring

## Project Structure

```
app/
  page.tsx         Main page with section routing and data attributes
  layout.tsx       Root layout with SEO, theme initialization, icons
  globals.css      Design tokens (colors, spacing, typography)

components/
  Header.tsx       Sticky nav with smooth scroll, theme toggle
  Hero.tsx         Avatar and introduction section
  About.tsx        Skills, languages, learning focus
  Projects.tsx     Project showcase with external links
  Contact.tsx      Email and social contact methods
  Footer.tsx       Footer nav with smooth scroll, links

public/
  calebwodi.jpg       Profile avatar (160x160)
```

## Development

```bash
npm install
npm run build
npm dev
```

Visit http://localhost:3000

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
Caleb Wodi
