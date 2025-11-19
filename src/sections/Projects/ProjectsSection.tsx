import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile.json";

type Lang = "es" | "en";

interface ProjectText {
  es: string;
  en: string;
}

interface ProjectEntry {
  name: ProjectText;
  description: ProjectText;
  showInWeb: boolean;
  showInCV: boolean;
}

export const ProjectsSection: React.FC = () => {
  const { lang } = useLanguage();

  const projects = (profile.projects as ProjectEntry[]).filter(
    (p) => p.showInWeb
  );

  const title =
    lang === "es" ? "Proyectos destacados" : "Selected Projects";

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
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
          id="projects-title"
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, idx) => (
            <article
              key={idx}
              style={{
                borderRadius: "12px",
                padding: "1.4rem 1.3rem",
                backgroundColor: "var(--card-bg)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                border: "1px solid rgba(148,163,184,0.35)",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  fontWeight: 600,
                }}
              >
                {p.name[lang as Lang]}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                {p.description[lang as Lang]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
