import { useTheme } from '../context/ThemeContext';
import DATA from '../data';

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer className="py-8 text-center text-sm text-muted"
            style={{borderTop:`1px solid ${darkMode ? '#1E2D45' : '#E2E8F0'}`}}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-700">
          <span className="accent">GP</span> · Guru Prasad G S
        </div>
        <div>Built with React & Tailwind · © 2025</div>
        <div className="flex gap-4">
          <a href={DATA.linkedin} target="_blank" className="hover:text-current transition-colors">LinkedIn</a>
          <a href={`mailto:${DATA.email}`} className="hover:text-current transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;