import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const contactTexts = {
  es: {
    title: "Contacto",
    subtitle:
      "Si tu empresa necesita APIs, aplicaciones de escritorio o apps móviles, podemos platicarlo.",
    locationLabel: "Ubicación",
    locationValue: "Hermosillo, Sonora, México",
    emailLabel: "Correo",
    emailValue: "jose.alberto.zavala.flores@gmail.com",
    linksTitle: "Enlaces",
    githubLabel: "GitHub",
    githubUrl: "https://github.com/albertozavala",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/jose-alberto-zavala-flores/",
    note: "Prefiero comunicación clara y directa. Cuéntame qué problema quieres resolver y con gusto lo revisamos.",
  },
  en: {
    title: "Contact",
    subtitle:
      "If your company needs APIs, desktop applications or mobile apps, we can talk about it.",
    locationLabel: "Location",
    locationValue: "Hermosillo, Sonora, Mexico",
    emailLabel: "Email",
    emailValue: "jose.alberto.zavala.flores@gmail.com",
    linksTitle: "Links",
    githubLabel: "GitHub",
    githubUrl: "https://github.com/albertozavala",
    linkedinLabel: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/jose-alberto-zavala-flores/",
    note: "I appreciate clear and direct communication. Tell me what problem you want to solve and I’ll gladly review it.",
  },
} as const;

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = contactTexts[lang];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{
        padding: "4rem 1rem 4rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "left",
            marginBottom: "2rem",
          }}
        >
          <h2
            id="contact-title"
            style={{
              marginBottom: "0.5rem",
              marginTop: 0,
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "600px",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {t.subtitle}
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Bloque datos de contacto */}
          <article
            style={{
              borderRadius: "1rem",
              border: "1px solid rgba(148,163,184,0.35)",
              padding: "1.3rem 1.2rem",
              backgroundColor: "var(--card-bg)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>
              📬 {t.title}
            </h3>

            <div style={{ marginBottom: "0.8rem" }}>
              <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                {t.locationLabel}
              </div>
              <div style={{ fontSize: "0.95rem" }}>{t.locationValue}</div>
            </div>

            <div style={{ marginBottom: "0.8rem" }}>
              <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                {t.emailLabel}
              </div>
              <a
                href={`mailto:${t.emailValue}`}
                style={{
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                {t.emailValue}
              </a>
            </div>

            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              {t.note}
            </p>
          </article>

          {/* Bloque enlaces */}
          <article
            style={{
              borderRadius: "1rem",
              border: "1px solid rgba(148,163,184,0.35)",
              padding: "1.3rem 1.2rem",
              backgroundColor: "var(--card-bg)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>
              🔗 {t.linksTitle}
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.9rem",
              }}
            >
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ marginRight: "0.4rem" }}>🐱</span>
                <strong>{t.githubLabel}:</strong>{" "}
                <a
                  href={t.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  {t.githubUrl}
                </a>
              </li>
              <li>
                <span style={{ marginRight: "0.4rem" }}>💼</span>
                <strong>{t.linkedinLabel}:</strong>{" "}
                <a
                  href={t.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  {t.linkedinUrl}
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
