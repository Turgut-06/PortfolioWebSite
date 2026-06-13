const Contact = () => {
  return (
    <section className="stack">
      <div className="card">
        <p className="eyebrow">Iletisim</p>
        <h2>Yeni bir proje fikrin varsa birlikte gelistirebiliriz.</h2>
        <p>Email: turgut@example.com</p>
        <p>LinkedIn: linkedin.com/in/turgut</p>
        <p>GitHub: github.com/turgut</p>
      </div>

      <form className="card contact-form">
        <label htmlFor="name">Isim</label>
        <input id="name" type="text" placeholder="Adiniz" />

        <label htmlFor="email">E-posta</label>
        <input id="email" type="email" placeholder="ornek@mail.com" />

        <label htmlFor="message">Mesaj</label>
        <textarea id="message" rows="4" placeholder="Kisa bir mesaj birakin" />

        <button type="button" className="btn btn-primary">Mesaj Gonder</button>
      </form>
    </section>
  );
};

export default Contact;