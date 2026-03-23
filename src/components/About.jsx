import DATA from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag">— About Me</p>
        <div className="grid md:grid-cols-2 gap-14 mt-8 items-center">
          {/* Avatar placeholder */}
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative"
                 style={{border:'2px solid var(--accent)', boxShadow:'0 0 60px rgba(0,200,150,0.15)'}}>
              <div className="w-full h-full flex items-center justify-center"
                   style={{background:'linear-gradient(135deg,#0E3A2F,#0B0F19)'}}>
                <span className="font-display text-8xl font-800 accent" style={{opacity:0.7}}>GP</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 card px-4 py-3 text-sm font-600"
                 style={{border:'1px solid var(--accent)'}}>
              <div className="flex items-center gap-2">
                <span style={{width:8,height:8,background:'var(--accent)',borderRadius:'50%',animation:'blink 1s infinite'}}></span>
                Open to Opportunities
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-700 mb-5">
              Building insurance-grade<br/><span className="accent">web experiences</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              I'm a Full-Stack Software Engineer at Solartis Technology Services, specializing in enterprise insurance platforms. My work spans JSF/PrimeFaces frontends, Java backends, Drools business rules, and MySQL databases.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              I enjoy tackling complex problems — from resolving MySQL lock timeouts under high concurrency to building real-time polling systems that keep users informed without hammering the server.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Insurance Domain", "Enterprise Dev", "Problem Solver", "Team Player"].map(tag => (
                <span key={tag} className="skill-chip">{tag}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a href={`mailto:${DATA.email}`} className="cta-btn-outline text-sm" style={{padding:'10px 22px'}}>✉ Email Me</a>
              <a href={DATA.linkedin} target="_blank" className="cta-btn text-sm" style={{padding:'10px 22px'}}>LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;