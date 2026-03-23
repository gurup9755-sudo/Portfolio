import DATA from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-tag">— Get In Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-800 mt-2 mb-5">
          Let's <span className="accent">connect</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-12">
          I'm always open to discussing new opportunities, exciting projects, or just a good conversation about tech.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: "✉️", label: "Email", value: DATA.email, href: `mailto:${DATA.email}` },
            { icon: "🔗", label: "LinkedIn", value: "guru-prasad-8b672615b", href: DATA.linkedin },
            { icon: "📍", label: "Location", value: DATA.location, href: "#" },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank"
               className="card p-6 flex flex-col items-center gap-3 no-underline text-inherit" style={{cursor:'pointer'}}>
              <span className="text-3xl">{c.icon}</span>
              <div className="text-muted text-xs font-700 uppercase tracking-widest">{c.label}</div>
              <div className="font-500 text-sm text-center break-all">{c.value}</div>
            </a>
          ))}
        </div>
        <a href={`mailto:${DATA.email}`} className="cta-btn text-base">
          Say Hello 👋
        </a>
      </div>
    </section>
  );
};

export default Contact;