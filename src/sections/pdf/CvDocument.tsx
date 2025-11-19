// src/pdf/CvDocument.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import profileJson from "../../data/profile.json";

type Lang = "es" | "en";

interface MultiText {
  es: string;
  en: string;
}

// --- EXPERIENCE ---
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

// --- PROJECTS ---
interface ProjectText {
  es: string;
  en: string;
}

interface ProjectEntry {
  name: ProjectText;
  description: ProjectText;
  url?: string;
  showInWeb: boolean;
  showInCV: boolean;
}

// --- EDUCATION ---
interface EducationEntry {
  degree: MultiText;
  institution: MultiText;
  status?: MultiText;
  start: string;
  end: string;
  showInCV: boolean;
  showInWeb: boolean;
}

// --- CERTIFICATIONS ---
interface CertificationName {
  es: string;
  en: string;
}

interface CertificationEntry {
  name: CertificationName;
  url?: string;
  date?: string;
  showInCV: boolean;
  showInWeb: boolean;
}

// --- SKILLS (solo lo que usamos aquí) ---
interface SoftSkillsBlock {
  es: string[];
  en: string[];
}

interface SkillsBlock {
  softSkills?: SoftSkillsBlock;
}

type Profile = typeof profileJson;

interface CvDocumentProps {
  lang: Lang;
  profile?: Profile;
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerHeadline: {
    fontSize: 11,
    marginTop: 4,
    marginBottom: 6,
  },
  headerContactLine: {
    fontSize: 9,
    marginTop: 2,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 9,
    lineHeight: 1.4,
  },
  bulletList: {
    marginTop: 4,
    paddingLeft: 8,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletPoint: {
    width: 8,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.35,
  },
  expBlock: {
    marginBottom: 8,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  expCompanyRole: {
    fontSize: 9.5,
    fontWeight: "bold",
  },
  expDates: {
    fontSize: 9,
  },
  expCity: {
    fontSize: 9,
    marginBottom: 2,
  },
  smallLabel: {
    fontSize: 9,
    fontWeight: "bold",
  },
  projectBlock: {
    marginBottom: 4,
  },
  projectUrl: {
    fontSize: 8,
    marginTop: 1,
  },
  softSkillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },
  softSkillChip: {
    fontSize: 9,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  certLine: {
    fontSize: 9,
    marginBottom: 2,
  },
});

export const CvDocument: React.FC<CvDocumentProps> = ({
  lang,
  profile = profileJson,
}) => {
  const general = profile.general;
  const headline = profile.headline[lang];
  const aboutSummary = profile.about.summary[lang];

  const experiences = (profile.experience as ExperienceEntry[]).filter(
    (e) => e.showInCV
  );
  const projects = (profile.projects as ProjectEntry[]).filter(
    (p) => p.showInCV
  );
  const education = (profile.education as EducationEntry[]).filter(
    (e) => e.showInCV
  );
  const certifications = (profile.certifications as CertificationEntry[]).filter(
    (c) => c.showInCV
  );

  const skills = profile.skills as SkillsBlock;
  const softSkills: string[] = skills.softSkills?.[lang] ?? [];

  const t = {
    about: lang === "es" ? "Perfil profesional" : "Professional Summary",
    softSkills: lang === "es" ? "Habilidades blandas" : "Soft skills",
    experience:
      lang === "es" ? "Experiencia profesional" : "Professional Experience",
    projects: lang === "es" ? "Proyectos destacados" : "Selected Projects",
    education: lang === "es" ? "Educación" : "Education",
    certifications:
      lang === "es"
        ? "Certificaciones y cursos"
        : "Certifications & Courses",
    locationLabel: lang === "es" ? "Ubicación" : "Location",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerName}>{general.name}</Text>
          <Text style={styles.headerHeadline}>{headline}</Text>

          <Text style={styles.headerContactLine}>
            {general.email}
            {general.phone ? `  ·  ${general.phone}` : ""}
          </Text>

          <Text style={styles.headerContactLine}>
            {general.linkedin}
            {general.github ? `  ·  ${general.github}` : ""}
          </Text>

          {general.location && (
            <Text style={styles.headerContactLine}>
              {t.locationLabel}: {general.location}
            </Text>
          )}
        </View>

        {/* PERFIL PROFESIONAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about}</Text>
          <Text style={styles.paragraph}>{aboutSummary}</Text>
        </View>

        {/* SOFT SKILLS */}
        {softSkills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.softSkills}</Text>
            <View style={styles.softSkillsContainer}>
              {softSkills.map((skill, idx) => (
                <Text key={idx} style={styles.softSkillChip}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* EXPERIENCIA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>

          {experiences.map((exp, idx) => (
            <View key={idx} style={styles.expBlock}>
              <View style={styles.expHeaderRow}>
                <Text style={styles.expCompanyRole}>
                  {exp.role[lang as Lang]} · {exp.company}
                </Text>
                <Text style={styles.expDates}>
                  {exp.start} –{" "}
                  {exp.end === "Actual" && lang === "en"
                    ? "Present"
                    : exp.end}
                </Text>
              </View>

              <Text style={styles.expCity}>{exp.city[lang as Lang]}</Text>

              <View style={styles.bulletList}>
                {exp.bullets[lang].map((b, i) => (
                  <View key={i} style={styles.bulletItem}>
                    <Text style={styles.bulletPoint}>• </Text>
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* PROYECTOS */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.projects}</Text>

            {projects.map((p, idx) => (
              <View key={idx} style={styles.projectBlock}>
                <Text style={styles.smallLabel}>
                  {p.name[lang as Lang]}
                </Text>
                <Text style={styles.paragraph}>
                  {p.description[lang as Lang]}
                </Text>
                {p.url && <Text style={styles.projectUrl}>{p.url}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* CERTIFICACIONES Y CURSOS */}
        {certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.certifications}</Text>

            {certifications.map((c, idx) => (
              <Text key={idx} style={styles.certLine}>
                • {c.name[lang as Lang]}
                {c.date ? ` (${c.date})` : ""}
              </Text>
            ))}
          </View>
        )}

        {/* EDUCACIÓN (AL FINAL) */}
        {/* {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.education}</Text>

            {education.map((e, idx) => (
              <View key={idx} style={{ marginBottom: 4 }}>
                <Text style={styles.smallLabel}>
                  {e.degree[lang as Lang]}
                </Text>
                <Text style={styles.paragraph}>
                  {e.institution[lang as Lang]}{" "}
                  {`(${e.start} – ${
                    e.end === "Actual" && lang === "en" ? "Present" : e.end
                  })`}
                  {e.status && ` · ${e.status[lang as Lang]}`}
                </Text>
              </View>
            ))}
          </View>
        )} */}
      </Page>
    </Document>
  );
};
