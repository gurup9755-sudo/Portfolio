import DATA from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag">— Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-700 mt-2 mb-14">
          Work History
        </h2>
        <div className="relative pl-12">
          <div className="timeline-line"></div>
          <div className="flex flex-col gap-12">
            {DATA.experience.map((e, i) => (
              <div key={i} className="relative">
                <div className="timeline-dot"></div>
                <div className="card p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-700 text-xl">{e.role}</h3>
                      <div className="accent font-600 text-sm mt-1">{e.company}</div>
                    </div>
                    <span className="text-muted text-sm px-3 py-1 rounded-full"
                          style={{border:'1px solid',borderColor:'inherit'}}>
                      {e.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-5">
                    {e.points.map(pt => (
                      <li key={pt} className="flex gap-3 text-sm text-muted">
                        <span className="accent flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {e.stack.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;