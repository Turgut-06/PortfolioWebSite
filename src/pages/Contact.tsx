const contactChannels = [
  {
    text: "Email: turgut_koksal_988@hotmail.com",
    href: "mailto:turgut_koksal_988@hotmail.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 5.2 8-5.2V8H4zm16 2.5-7.4 4.8a1 1 0 0 1-1.2 0L4 10.5V16h16v-5.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    text: "LinkedIn: linkedin.com/in/turgut-koksal",
    href: "https://linkedin.com/in/turgut-koksal",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5 9h3v11H5V9zm6 0h2.9v1.5h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.2H17v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3V9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    text: "GitHub: github.com/Turgut-06",
    href: "https://github.com/Turgut-06",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.7 2.5 2.4 1.6.4 2.2-.3 2.3-.6.1-.4.4-.7.7-.9-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.2-2.5 5.1-4.9 5.4.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section className="stack contact-page">
      <div className="card contact-hero">
        <h1 className="eyebrow">İLETİŞİM</h1>
        <h2>Yeni bir proje fikrin varsa birlikte gelistirebiliriz.</h2>
      </div>

      <div className="contact-grid">
        {contactChannels.map((channel) => (
          <a
            key={channel.text}
            href={channel.href}
            className="contact-channel card"
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noreferrer" : undefined}
          >
            <div className="contact-channel-icon">{channel.icon}</div>
            <p>{channel.text}</p>
            <span className="contact-channel-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
