import styles from "./DropCapParagraph.module.css";

interface DropCapParagraphProps {
  children: React.ReactNode;
}

export default function DropCapParagraph({ children }: DropCapParagraphProps) {
  return <p className={styles.paragraph}>{children}</p>;
}
