// src/components/ui/LanguageSwitch.tsx
import { useLanguage } from "../../context/LanguageContext";

export const LanguageSwitch = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      type="button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.4rem 0.9rem",
        borderRadius: "999px",
        border: "1px solid #1976d2",
        background: "#fff",
        color: "#1976d2",
        cursor: "pointer",
        fontSize: "0.8rem",
        lineHeight: 1,
      }}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
};
