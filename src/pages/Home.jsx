const Home = () => {
  return (
    <section className="stack">
      <div className="hero card">
        <p className="eyebrow">Frontend Developer</p>
        <h1>Merhaba, ben Turgut. Modern ve hizli web arayuzleri gelistiriyorum.</h1>
        <p>
          React odakli projeler ureterek performans, temiz kod ve iyi bir kullanici
          deneyimi bir araya getiriyorum.
        </p>
        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary">Projelerim</a>
          <a href="/contact" className="btn btn-secondary">Iletisime Gec</a>
        </div>
      </div>

      <div className="grid two-col">
        <article className="card">
          <h3>Neler Yapiyorum?</h3>
          <p>Tek sayfa uygulamalar, dashboard arayuzleri ve kurumsal web siteleri.</p>
        </article>
        <article className="card">
          <h3>Kullandigim Teknolojiler</h3>
          <p>React, JavaScript, TailwindCSS, Vite, REST API entegrasyonlari.</p>
        </article>
      </div>
    </section>
  );
};

export default Home;