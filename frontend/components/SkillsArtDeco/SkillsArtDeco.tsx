import styles from "./SkillsArtDeco.module.css";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Golang"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Kafka", "gRPC"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "REST", "GraphQL", "PostgreSQL"],
  },
];

export default function SkillsArtDeco() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>The Craft</h2>
        <hr className={styles.titleRule} />

        <p className={styles.intro}>
          Every great structure begins with mastery of its materials.
          Presented here: the tools, languages, and disciplines acquired
          over years of deliberate practice.
        </p>

        <div className={styles.doubleRule} />

        {SKILL_GROUPS.map((group, index) => (
          <div key={group.category}>
            <div className={styles.group}>
              <p className={styles.categoryLabel}>{group.category}</p>
              <p className={styles.skills}>
                {group.skills.map((skill, i) => (
                  <span key={skill}>
                    {skill}
                    {i < group.skills.length - 1 && (
                      <span className={styles.dot}>·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
            {index < SKILL_GROUPS.length - 1 && (
              <hr className={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
