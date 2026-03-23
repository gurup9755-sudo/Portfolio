import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-display font-800 text-lg tracking-tight">
          <span className="accent">GP</span><span style={{opacity:0.5}}> /</span> guru
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
               className="text-sm font-medium text-muted hover:text-current transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all"
            style={{background: darkMode ? '#1E2D45' : '#E2E8F0'}}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-lg"
            style={{background: darkMode ? '#1E2D45' : '#E2E8F0'}}
            onClick={() => setOpen(o => !o)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden ${open ? 'open' : ''}`}
           style={{borderTop: `1px solid ${darkMode ? '#1E2D45' : '#E2E8F0'}`}}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
             onClick={() => setOpen(false)}
             className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-current"
             style={{background: darkMode ? '#131929' : '#EEF2F7'}}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;