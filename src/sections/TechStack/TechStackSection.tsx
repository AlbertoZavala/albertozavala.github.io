import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile.json";

type Lang = "es" | "en";

interface SkillsAreas {
  es: string[];
  en: string[];
}

interface SkillsBlock {
  languages: string[];
  databases: string[];
  frameworks: string[];
  tools: string[];
  areas: SkillsAreas;
}

const skills = profile.skills as SkillsBlock;

export const TechStackSection: React.FC = () => {
  const { lang } = useLanguage();

  const title = lang === "es" ? "Stack tecnológico" : "Tech Stack";

  const categories: {
    key: keyof SkillsBlock;
    label: { es: string; en: string };
    items: string[];
  }[] = [
    {
      key: "languages",
      label: {
        es: "Lenguajes de programación",
        en: "Programming languages",
      },
      items: skills.languages,
    },
    {
      key: "databases",
      label: {
        es: "Bases de datos",
        en: "Databases",
      },
      items: skills.databases,
    },
    {
      key: "frameworks",
      label: {
        es: "Frameworks y librerías",
        en: "Frameworks & libraries",
      },
      items: skills.frameworks,
    },
    {
      key: "tools",
      label: {
        es: "Herramientas",
        en: "Tools",
      },
      items: skills.tools,
    },
  ];

  const areasLabel =
    lang === "es" ? "Enfoques y áreas de experiencia" : "Focus areas";

  const areas = skills.areas[lang as Lang];

  return (
    <section
      id="tech"
      aria-labelledby="tech-title"
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
        <h2
          id="tech-title"
          style={{
            margin: 0,
            marginBottom: "1.5rem",
            textAlign: "left",
          }}
        >
          {title}
        </h2>

        {/* Grid de categorías técnicas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.4rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "12px",
                padding: "1.1rem 1.2rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {cat.label[lang as Lang]}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  opacity: 0.9,
                }}
              >
                {cat.items.join(", ")}
              </p>
            </article>
          ))}
        </div>

        {/* Áreas / enfoque */}
        <div
          style={{
            backgroundColor: "var(--card-bg)",
            borderRadius: "12px",
            padding: "1.2rem 1.3rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            border: "1px solid rgba(148,163,184,0.35)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "0.98rem",
              fontWeight: 600,
              marginBottom: "0.4rem",
            }}
          >
            {areasLabel}
          </h3>
          <ul
            style={{
              margin: 0,
              marginTop: "0.2rem",
              paddingLeft: "1.1rem",
              fontSize: "0.9rem",
              lineHeight: 1.5,
            }}
          >
            {areas.map((area, idx) => (
              <li key={idx} style={{ marginBottom: "0.15rem" }}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
