# Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean, professional design
- **Sections**: Hero, About, Skills, Projects, Experience, Education, Contact

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vite (build tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

## Customization

- Update personal information in the component files
- Replace placeholder images with your own
- Modify colors and styles in Tailwind classes
- Add your resume PDF to the public folder

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT License