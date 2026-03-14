import styles from "./ColumnLayout.module.css";

interface ColumnLayoutProps {
  columns?: 2 | 3;
  children: React.ReactNode;
}

export default function ColumnLayout({ columns = 2, children }: ColumnLayoutProps) {
  const colClass = columns === 3 ? styles.col3 : styles.col2;
  return (
    <div className={`${styles.columns} ${colClass}`}>{children}</div>
  );
}
