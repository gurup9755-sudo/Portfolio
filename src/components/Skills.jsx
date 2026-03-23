import DATA from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag">— Technical Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-700 mt-2 mb-12">
          What I work with
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DATA.skills.map((cat, i) => (
            <div key={cat.category} className="card p-6"
                 style={{animationDelay:`${i*0.1}s`}}>
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-display font-700 text-base mb-4 accent">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(skill => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language bars */}
        <div className="mt-14 card p-8">
          <h3 className="font-display font-700 text-lg mb-7">Proficiency Overview</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { name: "JavaScript / HTML / CSS", pct: 88 },
              { name: "Java", pct: 78 },
              { name: "JSF PrimeFaces", pct: 85 },
              { name: "React JS", pct: 75 },
              { name: "MySQL", pct: 80 },
              { name: "Drools (Rules Engine)", pct: 72 },
            ].map(s => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-500">{s.name}</span>
                  <span className="text-muted">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{background:'rgba(0,200,150,0.12)'}}>
                  <div className="progress-bar" style={{width:`${s.pct}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;