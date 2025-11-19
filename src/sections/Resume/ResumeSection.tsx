// src/sections/Resume/ResumeSection.tsx
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile.json";

type Lang = "es" | "en";

interface ExperienceBullets {
  es: string[];
  en: string[];
}

interface ExperienceCity {
  es: string;
  en: string;
}

interface ExperienceRole {
  es: string;
  en: string;
}

interface ExperienceEntry {
  company: string;
  role: ExperienceRole;
  start: string;
  end: string;
  city: ExperienceCity;
  bullets: ExperienceBullets;
  showInWeb: boolean;
  showInCV: boolean;
}

export const ResumeSection: React.FC = () => {
  const { lang } = useLanguage();

  const experiences = (profile.experience as ExperienceEntry[]).filter(
    (e) => e.showInWeb
  );

  const title =
    lang === "es" ? "Experiencia profesional" : "Professional Experience";

  return (
    <section
      id="resume"
      aria-labelledby="resume-title"
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
          id="resume-title"
          style={{
            margin: 0,
            marginBottom: "1.5rem",
            textAlign: "left",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
          }}
        >
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "12px",
                padding: "1.2rem 1.4rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            >
              {/* Empresa + rol */}
              <header
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                  marginBottom: "0.6rem",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                  }}
                >
                  {exp.role[lang as Lang]} · {exp.company}
                </h3>
                <div
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.8,
                  }}
                >
                  {exp.city[lang as Lang]} ·{" "}
                  {exp.start} –{" "}
                  {exp.end === "Actual" && lang === "en"
                    ? "Present"
                    : exp.end}
                </div>
              </header>

              {/* Bullets */}
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.2rem",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {exp.bullets[lang as Lang].map((b, i) => (
                  <li key={i} style={{ marginBottom: "0.3rem" }}>
                    {b}
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
