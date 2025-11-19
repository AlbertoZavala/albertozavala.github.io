import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import profile from "../../data/profile.json";

type Lang = "es" | "en";

interface HighlightText {
  es: string;
  en: string;
}

interface Highlight {
  label: HighlightText;
  value: HighlightText;
  showInWeb: boolean;
  showInCV: boolean;
}

export const AboutSection: React.FC = () => {
  const { lang } = useLanguage();

  const summary = profile.about.summary[lang as Lang];

  const highlights: Highlight[] = (profile.about.highlights as Highlight[]).filter(
    (h) => h.showInWeb
  );

  const t = {
    title: lang === "es" ? "Sobre mí" : "About Me",
  };

  return (
    <section
      id="about"
      aria-labelledby="about-title"
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
          id="about-title"
          style={{
            margin: 0,
            textAlign: "left",
          }}
        >
          {t.title}
        </h2>

        <p
          style={{
            lineHeight: 1.8,
            marginTop: "1rem",
            marginBottom: 0,
            fontSize: "0.98rem",
          }}
        >
          {summary}
        </p>

        {highlights.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--card-bg)",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(148,163,184,0.35)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.label[lang as Lang]}
                </p>

                <p
                  style={{
                    margin: "0.35rem 0 0",
                    opacity: 0.9,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.value[lang as Lang]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
