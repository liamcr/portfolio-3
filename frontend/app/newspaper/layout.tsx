import type { Metadata } from "next";
import styles from "./newspaper.layout.module.css";

export const metadata: Metadata = {
  title: "The Daily Chronicle",
  description: "An editorial showcase",
};

export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
