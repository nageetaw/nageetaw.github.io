# Nageeta Kumari - Personal Portfolio Website

Welcome to my personal portfolio website! This is where I showcase my professional journey, projects, publications, and achievements in the field of technology and research.

## 🌐 Live Website

Visit: [https://nageetaw.github.io](https://nageetaw.github.io)

## 🚀 About This Project

This portfolio is built using modern web technologies to create a fast, responsive, and interactive experience. It features:

- **Professional Overview**: Detailed information about my experience, education, and skills
- **Projects Showcase**: Highlighting my key technical projects and contributions
- **Publications**: Academic papers and research work
- **Awards & Recognition**: Professional achievements and honors
- **Interactive CV**: Downloadable and viewable resume
- **Travel Gallery**: Interactive world map with travel memories (coming soon!)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite for lightning-fast development
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS for modern, responsive design
- **Maps**: React Simple Maps with D3-geo for geographic visualizations
- **Deployment**: GitHub Pages with automated CI/CD

## 💻 Local Development

### Prerequisites

- Node.js (v20.x or higher recommended)
- npm or yarn package manager

### Installation & Setup

.1. Clone the repository:
```bash
git clone https://github.com/nageetaw/nageetaw.github.io.git
cd nageetaw.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build & Preview

Build for production:
```bash
npm run build
```

Preview production build locally:
```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

Or simply push to the `main` branch - GitHub Actions will automatically build and deploy!

## 📁 Project Structure

```
nageetaw.github.io/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx       # Navigation header
│   │   ├── Intro.jsx        # Introduction section
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Education.jsx    # Educational background
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Publications.jsx # Research publications
│   │   ├── Awards.jsx       # Awards and achievements
│   │   ├── Contact.jsx      # Contact information
│   │   └── MemoryCard.jsx   # Travel memory cards
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Main landing page
│   │   ├── CV.jsx           # Resume page
│   │   └── Gallery.jsx      # Travel gallery (in progress)
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .github/workflows/       # CI/CD automation
├── public/                  # Static assets
└── dist/                    # Production build (generated)
```

## 🎨 Key Features

### Interactive Map (Gallery)
- Built with react-simple-maps and d3-geo
- Dynamic country coloring based on flag colors
- City markers with memory cards
- Zoom and pan functionality
- Auto-calculated centroids for countries

### Responsive Design
- Mobile-first approach
- Tailwind CSS utilities
- Smooth animations and transitions

### Performance
- Optimized Vite build
- Code splitting with React Router
- Lazy loading for better performance

## 🔧 Technologies & Libraries

- `react` & `react-dom` - UI library
- `react-router-dom` - Client-side routing
- `vite` - Build tool and dev server
- `tailwindcss` - Utility-first CSS framework
- `react-simple-maps` - SVG map components
- `d3-geo` - Geographic projections and calculations
- `gh-pages` - GitHub Pages deployment tool

## 📝 License

© 2026 Nageeta Kumari. All rights reserved.

This is my personal portfolio website. Feel free to take inspiration from the code structure, but please don't copy the content or design directly.

## 📬 Contact

Feel free to reach out through the contact section on my website or connect with me on professional networks!

---

Built with ❤️ using React and deployed on GitHub Pages
