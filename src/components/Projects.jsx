import DATA from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag">— Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-700 mt-2 mb-12">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {DATA.projects.map((p, i) => (
            <div key={p.title} className="card p-7 flex flex-col gap-5">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-700 text-xl">{p.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <a href={p.github} className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-muted"
                       style={{border:'1px solid'}} title="GitHub">⌥</a>
                    <a href={p.demo} className="w-8 h-8 rounded-lg flex items-center justify-center text-sm accent"
                       style={{border:'1px solid var(--accent)'}} title="Demo">↗</a>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-2">
                {p.points.map(pt => (
                  <li key={pt} className="flex gap-3 text-sm text-muted">
                    <span className="accent flex-shrink-0 mt-0.5">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{borderTop:'1px solid',borderColor:'inherit'}}>
                {p.stack.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;