import { education } from "../data/education";
import { heroTechStack, homeTechStack } from "../data/techIcons";
import TechLogo from "../components/TechLogo";

const Home = () => {
  return (
    <section className="stack">
      <div className="hero card">
        <p className="eyebrow">Full Stack Developer</p>
        <div className="tech-logo-row" aria-label="Kullandığım teknolojiler">
          {heroTechStack.map((tech) => (
            <TechLogo key={tech.name} src={tech.icon} alt={tech.name} size="lg" />
          ))}
        </div>
        <h1>
        Merhaba, ben bir Full Stack Developer'ım. Frontend tarafında React'in esnekliğini, backend tarafında ise .NET'in gücünü kullanarak uçtan uca, performanslı web uygulamaları geliştiriyorum.

Clean Architecture, RESTful API ve Clean Code prensiplerini işimin merkezine koyuyor; sürdürülebilir, ölçeklenebilir ve her teknoloji stack'ine hızla adapte olabilen çözümler üretiyorum.
        </h1>   
        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary">
            Projelerim
          </a>                                                                                                                                                                                 
          <a href="/contact" className="btn btn-secondary">
            İletişime Geç
          </a>
        </div>
      </div>

      

      <div className="card education-section">
        <h1 className="eyebrow">EĞİTİM</h1>
        <h2>{education.university}</h2>
        <p className="education-subtitle">
          {education.department} · {education.degree} · Mezuniyet:{" "}
          {education.graduationYear}
        </p>

        <dl className="education-meta">
          <div className="education-meta-item">
            <dt>MEZUNİYET NOTU</dt>
            <dd>{education.gpa}</dd>
          </div>
        </dl>

        <div className="education-projects">
          <article className="education-project">
            <h3>DÖNEM PROJESİ</h3>
            <p className="education-project-title">{education.semesterProject.title}</p>
            <p>{education.semesterProject.description}</p>
            <small>{education.semesterProject.stack}</small>
          </article>

          <article className="education-project">
            <h3>BİTİRME PROJESİ</h3>
            <p className="education-project-title">
              {education.graduationProject.title}
            </p>
            <p>{education.graduationProject.description}</p>
            <small>{education.graduationProject.stack}</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;
