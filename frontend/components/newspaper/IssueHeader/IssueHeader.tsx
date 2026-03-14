import styles from "./IssueHeader.module.css";

interface IssueHeaderProps {
  date: string;
  edition: string;
  price?: string;
}

export default function IssueHeader({ date, edition, price }: IssueHeaderProps) {
  return (
    <div className={styles.issueHeader}>
      <span className={`${styles.meta} ${styles.date}`}>{date}</span>
      <span className={`${styles.meta} ${styles.edition}`}>{edition}</span>
      {price && <span className={`${styles.meta} ${styles.price}`}>{price}</span>}
    </div>
  );
}
