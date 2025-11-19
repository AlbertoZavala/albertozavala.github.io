import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import avatar from "../../images/jose-zavala-avatar.png";

const homeTexts = {
  es: {
    title: "Desarrollador de software",
    subtitle:
      "Creo soluciones claras, funcionales y estables usando C#, React Native y SQL Server.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contáctame",
  },
  en: {
    title: "Software Developer",
    subtitle:
      "I build clear, functional and stable solutions using C#, React Native and SQL Server.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
  },
} as const;

export const HomeSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = homeTexts[lang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "85vh",
        padding: "3rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={avatar}
            alt="Jose Alberto Zavala Flores"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Nombre */}
        <h1
          style={{
            fontSize: "2.2rem",
            margin: 0,
            color: "var(--text-color)",
          }}
        >
          Jose Alberto Zavala Flores
        </h1>

        {/* Título profesional */}
        <h2
          style={{
            margin: 0,
            fontSize: "1.3rem",
            color: "#1976d2",
            fontWeight: 600,
          }}
        >
          {t.title}
        </h2>

        {/* Subtítulo / frase */}
        <p
          style={{
            margin: 0,
            fontSize: "1.05rem",
            lineHeight: 1.6,
            maxWidth: "650px",
            marginInline: "auto",
            color: "var(--text-color)",
            opacity: 0.85,
          }}
        >
          {t.subtitle}
        </p>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            {t.ctaProjects}
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "999px",
              border: "1px solid #1976d2",
              backgroundColor: "transparent",
              color: "#1976d2",
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
          >
            {t.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
};
