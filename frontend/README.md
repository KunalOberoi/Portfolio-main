# Portfolio Website

A modern, responsive portfolio website built with React 18.3.1 and Vite 5.4.0.

## 🚀 Features

- **React 18.3.1** - Latest stable version of React
- **Vite 5.4.0** - Lightning fast build tool and dev server
- **Tailwind CSS 3.4.7** - Modern utility-first CSS framework
- **Framer Motion 11.3.19** - Smooth animations and transitions
- **React Router 6.26.1** - Client-side routing
- **Responsive Design** - Mobile-first approach
- **Modern Development** - ES modules, Hot Module Replacement (HMR)

## 🛠️ Technologies Used

- React 18.3.1
- Vite 5.4.0
- Tailwind CSS 3.4.7
- Framer Motion 11.3.19
- React Router DOM 6.26.1
- React Icons 5.2.1
- Axios 1.7.3

## 📁 Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx     # Main App component
│   ├── main.jsx    # Entry point
│   ├── index.css   # Global styles
│   └── setupTests.js
├── index.html      # HTML template
├── vite.config.js  # Vite configuration
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-main/frontend
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- **Development server:**
```bash
npm run dev
# or directly with Vite
npx vite
```
Starts the development server at `http://localhost:5173`

- **Build for production:**
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

- **Preview production build:**
```bash
npm run preview
```
Serves the production build locally for testing

- **Run tests:**
```bash
npm run test
```
Runs tests using Vitest

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and building. Key configurations:
- React plugin for JSX support
- Development server on port 3000
- Hot Module Replacement (HMR)
- ES modules support

### Tailwind CSS
Custom configuration includes:
- Custom color palette
- Extended animations
- Responsive design utilities

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configurations:
- Dark theme color palette
- Custom animations (fade-in, slide-up, float)
- Responsive design patterns

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🧪 Testing

The project includes:
- Vitest for unit testing
- React Testing Library for component testing
- jsdom for DOM simulation

## 🚀 Deployment

To deploy the application:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform of choice:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting

## 🔄 Migration from Create React App

This project has been migrated from Create React App to Vite for:
- ⚡ Faster development server startup
- 🔥 Hot Module Replacement (HMR)
- 📦 Smaller bundle sizes
- 🛠️ Better developer experience
- 🆕 Latest React features support

### Key Changes Made:
- Replaced react-scripts with Vite
- Updated to React 18.3.1
- Converted to ES modules
- Updated file extensions to .jsx
- Moved index.html to root
- Updated configuration files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Kunal Oberoi - [Your contact information]
