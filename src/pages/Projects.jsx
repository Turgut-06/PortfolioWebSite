const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce Dashboard",
      description: "Satis, siparis ve urun yonetimi icin admin panel arayuzu.",
      stack: "React, Chart.js, TailwindCSS",
    },
    {
      title: "Task Management App",
      description: "Ekip ici gorev atama, takip ve ilerleme paneli.",
      stack: "React, Context API, Firebase",
    },
    {
      title: "Portfolio Website",
      description: "Kisisel marka odakli performansli tanitim sitesi.",
      stack: "React, Vite, Responsive Design",
    },
  ];

  return (
    <section className="stack">
      <div className="card">
        <p className="eyebrow">Projeler</p>
        <h2>One cikan calismalarim</h2>
      </div>

      <div className="grid three-col">
        {projectList.map((project) => (
          <article key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.stack}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;