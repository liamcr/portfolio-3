import styles from "./Masthead.module.css";

interface MastheadProps {
  title: string;
  tagline?: string;
}

export default function Masthead({ title, tagline }: MastheadProps) {
  return (
    <header className={styles.masthead}>
      <h1 className={styles.title}>{title}</h1>
      {tagline && <p className={styles.tagline}>{tagline}</p>}
    </header>
  );
}
