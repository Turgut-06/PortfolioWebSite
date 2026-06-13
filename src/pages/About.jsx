const About = () => {
  return (
    <section className="stack">
      <div className="card">
        <p className="eyebrow">Hakkimda</p>
        <h2>Kullanicinin ihtiyacini anlayan, sade tasarima odakli bir gelistiriciyim.</h2>
        <p>
          Son yillarda React tabanli uygulamalarda performans iyilestirmeleri,
          komponent mimarisi ve yeniden kullanilabilir UI sistemleri uzerine
          calisiyorum.
        </p>
      </div>

      <div className="grid three-col">
        <article className="card">
          <h3>1+ Yil</h3>
          <p>Frontend odakli proje deneyimi</p>
        </article>
        <article className="card">
          <h3>10+ Proje</h3>
          <p>Kisisel ve ekip icinde tamamlanan isler</p>
        </article>
        <article className="card">
          <h3>UI/UX</h3>
          <p>Kullanim kolayligini onceliklendiren tasarim yaklasimi</p>
        </article>
      </div>
    </section>
  );
};

export default About;