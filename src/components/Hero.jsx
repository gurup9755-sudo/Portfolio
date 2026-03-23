import { useState, useEffect, useRef } from 'react';
import DATA from '../data';

// Typing animation hook
function useTyping(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wIdx];
    let timer;
    if (!deleting && cIdx < current.length) {
      timer = setTimeout(() => setCIdx(c => c + 1), speed);
    } else if (!deleting && cIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && cIdx > 0) {
      timer = setTimeout(() => setCIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWIdx(w => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, cIdx));
    return () => clearTimeout(timer);
  }, [cIdx, deleting, wIdx]);
  return display;
}

const Hero = () => {
  const typed = useTyping(DATA.taglines);
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="max-w-6xl mx-auto px-6 py-32 w-full relative z-10">
        <div className="max-w-3xl">
          <p className="section-tag fade-up delay-1">👋 Hello, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl font-800 leading-tight fade-up delay-2 mt-2">
            {DATA.name.split(" ").slice(0, 2).join(" ")}<br/>
            <span className="accent">{DATA.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <div className="mt-5 text-xl md:text-2xl font-display font-600 fade-up delay-3 text-muted">
            <span>{typed}</span><span className="cursor"></span>
          </div>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl fade-up delay-4">
            {DATA.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up delay-5">
            <a href="#projects" className="cta-btn">View My Work →</a>
            <a href="#contact" className="cta-btn-outline">Get In Touch</a>
          </div>
          {/* Quick stats */}
          <div className="mt-14 flex flex-wrap gap-8 fade-up delay-5">
            {[
              { val: "3+", label: "Years Experience" },
              { val: "2", label: "Key Projects" },
              { val: "10+", label: "Technologies" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl font-800 accent">{s.val}</div>
                <div className="text-sm text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs">
        <span style={{fontSize:11, letterSpacing:2}}>SCROLL</span>
        <div style={{width:1, height:40, background:'var(--accent)', opacity:0.5}}></div>
      </div>
    </section>
  );
};

export default Hero;