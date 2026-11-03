import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile, projects } from './data';
import './style.css';
function useReveal() { useEffect(() => { const elements = document.querySelectorAll('.reveal'); if (!('IntersectionObserver' in window)) { elements.forEach(e => e.classList.add('visible')); return; } const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: .08 }); elements.forEach(e => obs.observe(e)); return () => obs.disconnect() }, []) }
function External({ href, children, className = '' }) { return href ? <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a> : null }
function SectionTitle({ index, label }) { return <div className="section-heading"><span className="mono">{index} / {label}</span><div className="rule" /></div> }
function App() {
  useReveal(); return <><header className="topbar"><a href="#home" className="brand">CWL</a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav></header><main><section id="home" className="hero shell" aria-labelledby="hero-title">
    <div className="hero-content">
      <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
      <h1 id="hero-title" className="hero-title">{profile.name}</h1>
      <p className="hero-role">{profile.title}</p>
      <p className="intro">I build intelligent applications and reliable software systems, with interests spanning AI/ML and backend engineering.</p>
      <div className="hero-actions">
        <a href="#projects" className="primary">Explore my work <ArrowUpRight size={17} /></a>
        <a href={`${import.meta.env.BASE_URL}Che-Wei, Lin Resume AI.pdf`} download="Che-Wei-Lin-Resume.pdf" className="secondary">Download resume <Download size={16} /></a>
      </div>
    </div>
    <div className="hero-photo">
      <img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt={`${profile.name} in graduation cap and gown`} width="2406" height="3600" fetchPriority="high" decoding="async" />
    </div>
    <a className="scroll" href="#about">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
  </section><section id="about" className="shell section reveal"><SectionTitle index="01" label="ABOUT" /><div className="split"><h2>Curiosity meets<br /><span className="muted">engineering</span></h2><div className="body-copy"><p>I'm a Computer Science master's graduate from Arizona State University with a passion for building software that connects thoughtful engineering with practical machine learning.</p><p>My work spans deep learning, distributed data systems, and interactive web experiences. I enjoy taking ideas from early prototypes to clear, maintainable implementations.</p><p className="small-muted">Based in {profile.location} · MS Computer Science, ASU</p></div></div></section><section id="experience" className="shell section reveal"><SectionTitle index="02" label="EXPERIENCE" /><div className="split"><h2>Research &<br /><span className="muted">experience</span></h2><div className="experience-list"><article className="experience"><div className="experience-head"><div><h3>Volunteer AI Researcher</h3><p>Arizona State University · Legal AI Research</p></div><span>2026</span></div><p>Contributing to research on extracting, organizing, and connecting legal facts, rules, and evidence. Exploring canonicalization, semantic clustering, and LLM-assisted evaluation workflows.</p><div className="tags"><span>LLMs</span><span>Information Retrieval</span><span>Python</span></div></article>
<article className="experience">
  <div className="experience-head">
    <div>
      <h3>Teaching Assistant</h3>
      <p>Feng Chia University · Discrete Mathematics</p>
    </div>
    <span>Sep 2022 – Feb 2023</span>
  </div>
  <p>Assisted the professor in preparing course materials and discussing exam questions. Provided after-class tutoring for 100+ students, guiding them through the problem-solving process in discrete mathematics.</p>
  <div className="tags"><span>Discrete Mathematics</span><span>Tutoring</span><span>Course Support</span></div>
</article>
</div></div></section><section id="projects" className="shell section reveal"><SectionTitle index="03" label="SELECTED PROJECTS" /><div className="projects-head"><h2>Selected <span className="muted">work</span></h2><p>A selection of systems and experiences I've built and explored.</p></div><div className="project-list">{projects.map(p => <article className="project" key={p.number}><span className="project-number mono">{p.number}</span><div className="project-content"><p className="project-type mono">{p.type}</p><h3>{p.title}</h3><p className="project-desc">{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="project-links">{p.github && <External href={p.github} className="project-link"><Github size={17} /> Code <ArrowUpRight size={14} /></External>}{p.demo && <External href={p.demo} className="project-link">Live demo <ArrowUpRight size={16} /></External>}</div></article>)}</div></section><section className="shell section reveal"><SectionTitle index="04" label="TOOLKIT" /><div className="split"><h2>Tools of<br /><span className="muted">the trade</span></h2><div className="skill-groups"><div><h3>Languages</h3><p>Python · Java · JavaScript · SQL · C · C++</p></div><div><h3>AI / Machine Learning</h3><p>PyTorch · Transformers · scikit-learn · OpenCV</p></div><div><h3>Systems & Development</h3><p>Docker · Kubernetes · Kafka · Neo4j · Git · React</p></div></div></div></section><section id="contact" className="contact section"><div className="shell reveal"><SectionTitle index="05" label="CONTACT" /><p className="mono contact-kicker">HAVE SOMETHING IN MIND?</p><h2>Let's build<br /><span className="muted">what's next</span></h2><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}>Email me <Mail size={18} /></a>}{profile.github && <External href={profile.github}>GitHub <Github size={18} /></External>}{profile.linkedin && <External href={profile.linkedin}>LinkedIn <Linkedin size={18} /></External>}{!profile.email && !profile.github && !profile.linkedin && <p className="small-muted">Contact links will appear here after you add them in src/data.js.</p>}</div></div></section></main><footer className="shell footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with React · Hosted on GitHub Pages</span><a href="#home">Back to top ↑</a></footer></>
}
createRoot(document.getElementById('root')).render(<App />);
