// src/components/layout/Footer.tsx
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  const text =
    lang === "es"
      ? "Desarrollador de software — C#, React Native, SQL Server."
      : "Software developer — C#, React Native, SQL Server.";

  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
        marginTop: "2rem",
        padding: "1rem 1.5rem",
        fontSize: "0.85rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div>
          © {new Date().getFullYear()} Jose Alberto Zavala Flores. {text}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="mailto:jose.alberto.zavala.flores@gmail.com"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            Email
          </a>
          <a
            href="https://github.com/albertozavala"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jose-alberto-zavala-flores/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#1976d2" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
