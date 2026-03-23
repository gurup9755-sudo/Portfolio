import DATA from '../data';

const Education = () => {
  return (
    <section id="education" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag">— Education & Certifications</p>
        <h2 className="font-display text-3xl md:text-4xl font-700 mt-2 mb-12">
          Academic Background
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {DATA.education.map((e, i) => (
            <div key={i} className="card p-7">
              <div className="text-3xl mb-4">{i === 0 ? "🎓" : "📚"}</div>
              <h3 className="font-display font-700 text-lg leading-snug">{e.degree}</h3>
              <div className="accent text-sm font-600 mt-2">{e.school}</div>
              <div className="flex items-center justify-between mt-4 text-sm text-muted">
                <span>{e.period}</span>
                <span className="font-600" style={{color:'var(--accent)'}}>{e.score}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Certs */}
        <h3 className="font-display font-700 text-lg mb-5 mt-10">Certifications</h3>
        <div className="flex flex-wrap gap-4">
          {DATA.certifications.map(c => (
            <div key={c.title} className="card p-5 flex gap-4 items-center">
              <div className="text-2xl">🏅</div>
              <div>
                <div className="font-600 text-sm">{c.title}</div>
                <div className="text-muted text-xs mt-1">{c.issuer} · {c.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;