import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiReact,
  SiNextdotjs,
  SiCss,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import styles from "./SkillsArtDeco.module.css";

type Skill = { name: string; icon: IconType };

const SKILL_GROUPS: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Golang", icon: SiGo },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Kafka", icon: SiApachekafka },
      { name: "gRPC", icon: TbApi },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "GraphQL", icon: SiGraphql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
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
              <div className={styles.skillGrid}>
                {group.skills.map(({ name, icon: Icon }) => (
                  <div key={name} className={styles.skillItem}>
                    <Icon className={styles.skillIcon} />
                    <span className={styles.skillName}>{name}</span>
                  </div>
                ))}
              </div>
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
