import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvDocument } from "../../sections/pdf/CvDocument";
import { useLanguage } from "../../context/LanguageContext";

export const DownloadCV: React.FC = () => {
  const { lang } = useLanguage();

  const fileName =
    lang === "es"
      ? "CV-Jose-Alberto-Zavala-ES.pdf"
      : "CV-Jose-Alberto-Zavala-EN.pdf";

  const label = lang === "es" ? "Descargar CV" : "Download CV";

  const generatingLabel =
    lang === "es" ? "Generando..." : "Generating...";

  return (
    <PDFDownloadLink
      document={<CvDocument lang={lang} />}
      fileName={fileName}
      style={{ textDecoration: "none" }}
    >
      {({ loading }) => (
        <button
          type="button"
          aria-label={label}
          style={{
            padding: "0.45rem 0.9rem",
            borderRadius: "999px",
            border: "1px solid rgba(148, 163, 184, 0.6)",
            background: loading ? "rgba(148,163,184,0.12)" : "transparent",
            color: "var(--text-color)",
            fontSize: "0.85rem",
            cursor: loading ? "default" : "pointer",
            opacity: loading ? 0.7 : 1,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            transition: "background 0.15s ease, border-color 0.15s ease",
          }}
          disabled={loading}
        >
          <span>📄</span>
          <span>{loading ? generatingLabel : label}</span>
        </button>
      )}
    </PDFDownloadLink>
  );
};
