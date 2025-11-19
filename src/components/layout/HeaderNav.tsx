// src/components/layout/HeaderNav.tsx
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { DownloadCV } from "../ui/DownloadCV";
import { LanguageSwitch } from "../ui/LanguageSwitch";
//import profileJson from "../../data/profile.json";



const navTexts = {
  es: {
    name: "Jose Alberto",
    items: [
      { id: "home", label: "Inicio" },
      { id: "skills", label: "Habilidades" },
      { id: "techstack", label: "Tecnologías" },
      { id: "about", label: "Sobre mí" },
      { id: "resume", label: "Experiencia" },
      { id: "value", label: "Aportación" },
      { id: "projects", label: "Proyectos" },
      { id: "contact", label: "Contacto" },
    ],
  },
  en: {
    name: "Jose Alberto",
    items: [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "techstack", label: "Tech Stack" },
      { id: "about", label: "About" },
      { id: "resume", label: "Experience" },
      { id: "value", label: "Value" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
  },
} as const;

export const HeaderNav: React.FC = () => {
  const { lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = navTexts[lang];

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: "var(--bg-color)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid #eee",
        }}
      >
        <nav
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0.6rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Nombre */}
          <div style={{ fontWeight: 700, fontSize: "1rem" }}>{t.name}</div>

          {/* Menú desktop */}
          <ul
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
            className="nav-desktop"
          >
            {t.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    padding: "0.2rem 0.4rem",
                    color: "var(--text-color)",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Acciones derecha */}
          <div
           className="nav-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginLeft: "auto", 
            }}
          >
            <DownloadCV />
            <LanguageSwitch />
            <button
              onClick={toggleTheme}
              style={{
                padding: "0.4rem 0.6rem",
                borderRadius: "999px",
                border: "1px solid #ccc",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* BOTÓN HAMBURGUESA MOBILE */}
            <button
              className="nav-mobile-button"
              onClick={() => setIsOpen(true)}
              style={{
                padding: "0.4rem 0.6rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background: "transparent",
                cursor: "pointer",
                display: "none",
                color: "var(--text-color)",
              }}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* MENU MOBILE */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "250px",
            height: "100vh",
            backgroundColor: "var(--bg-color)",
            boxShadow: "-2px 0 12px rgba(0,0,0,0.2)",
            zIndex: 50,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            animation: "slideIn 0.2s ease-out",
          }}
        >
          {/* Cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              alignSelf: "flex-end",
              background: "transparent",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "var(--text-color)",
            }}
          >
            ✕
          </button>

          {/* Items */}
          {t.items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                textAlign: "left",
                padding: "0.6rem 0",
                background: "none",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
                color: "var(--text-color)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Animación simple */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }

          /* Ocultar menú desktop en mobile */
          @media (max-width: 768px) {
            .nav-desktop {
              display: none !important;
            }
            .nav-mobile-button {
              display: inline-block !important;
            }
          }
        `}
      </style>
    </>
  );
};
