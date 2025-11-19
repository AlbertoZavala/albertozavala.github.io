import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const valueTexts = {
  es: {
    title: "Qué puedo aportar a tu empresa",
    intro:
      "Más que solo escribir código, me interesa que el software resuelva problemas concretos del negocio y sea mantenible en el tiempo.",
    items: [
      {
        icon: "🏗️",
        title: "Soluciones estructuradas",
        text: "Diseño y desarrollo aplicaciones con capas claras (presentación, negocio y datos), facilitando correcciones y nuevas funcionalidades.",
      },
      {
        icon: "🔒",
        title: "APIs confiables",
        text: "Experiencia práctica construyendo APIs para productos financieros y de gestión, cuidando validaciones, seguridad básica y manejo de errores.",
      },
      {
        icon: "📱",
        title: "Apps móviles útiles",
        text: "He trabajado en aplicaciones móviles que usan notificaciones, autenticación y comunicación con backend para casos reales de negocio.",
      },
      {
        icon: "🤝",
        title: "Trabajo ordenado y comunicativo",
        text: "Me adapto a procesos existentes, utilizo control de versiones y mantengo una comunicación clara sobre avances y riesgos.",
      },
    ],
  },
  en: {
    title: "What I can bring to your company",
    intro:
      "More than just writing code, I care about software solving real business problems and being maintainable over time.",
    items: [
      {
        icon: "🏗️",
        title: "Structured solutions",
        text: "I design and develop applications with clear layers (presentation, business and data), making changes and new features easier.",
      },
      {
        icon: "🔒",
        title: "Reliable APIs",
        text: "Hands-on experience building APIs for financial and management products, taking care of validation, basic security and error handling.",
      },
      {
        icon: "📱",
        title: "Useful mobile apps",
        text: "I have worked on mobile apps that use notifications, authentication and backend communication for real business scenarios.",
      },
      {
        icon: "🤝",
        title: "Organized and communicative work",
        text: "I adapt to existing processes, use version control and keep clear communication about progress and risks.",
      },
    ],
  },
} as const;

export const ValueSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = valueTexts[lang];

  return (
    <section
      id="value"
      aria-labelledby="value-title"
      style={{
        padding: "4rem 1rem",
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
            marginBottom: "1.8rem",
          }}
        >
          <h2
            id="value-title"
            style={{
              margin: 0,
              marginBottom: "0.5rem",
            }}
          >
            {t.title}
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "650px",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {t.intro}
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {t.items.map((item) => (
            <article
              key={item.title}
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(148,163,184,0.35)",
                padding: "1.2rem 1.1rem",
                backgroundColor: "var(--card-bg)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div style={{ fontSize: "1.6rem" }}>{item.icon}</div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
