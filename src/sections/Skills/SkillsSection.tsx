import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const skillsTexts = {
  es: {
    title: "Habilidades técnicas",
    subtitle: "Tecnologías y herramientas que utilizo con frecuencia",
    groups: [
      {
        label: "Lenguajes",
        items: ["C#", "JavaScript", "TypeScript"],
      },
      {
        label: "Frameworks",
        items: ["React Native", ".NET Framework", "Windows Forms", "ASP.NET MVC"],
      },
      {
        label: "Bases de datos",
        items: ["Microsoft SQL Server"],
      },
      {
        label: "Herramientas",
        items: ["Git", "Postman", "JIRA"],
      },
      {
        label: "Arquitectura",
        items: ["APIs REST", "Capas de negocio / datos", "Clean architecture (adaptada)"],
      },
    ],
  },
  en: {
    title: "Technical skills",
    subtitle: "Technologies and tools I frequently use",
    groups: [
      {
        label: "Languages",
        items: ["C#", "JavaScript", "TypeScript"],
      },
      {
        label: "Frameworks",
        items: ["React Native", ".NET Framework", "Windows Forms", "ASP.NET MVC"],
      },
      {
        label: "Databases",
        items: ["Microsoft SQL Server"],
      },
      {
        label: "Tools",
        items: ["Git", "Postman", "JIRA"],
      },
      {
        label: "Architecture",
        items: ["REST APIs", "Business/Data layers", "Clean architecture (adapted)"],
      },
    ],
  },
} as const;

export const SkillsSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = skillsTexts[lang];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
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
            marginBottom: "2rem",
          }}
        >
          <h2
            id="skills-title"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {t.groups.map((g) => (
            <article
              key={g.label}
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(148,163,184,0.35)",
                padding: "1.3rem 1.2rem",
                backgroundColor: "var(--card-bg)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "0.4rem",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                }}
              >
                {g.label}
              </h3>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  margin: 0,
                  marginTop: "0.4rem",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {g.items.map((item) => (
                  <li key={item} style={{ marginBottom: "0.25rem" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
