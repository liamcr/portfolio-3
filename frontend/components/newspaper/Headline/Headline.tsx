import styles from "./Headline.module.css";

interface HeadlineProps {
  children: React.ReactNode;
  size?: "xl" | "lg" | "md";
  centered?: boolean;
}

export default function Headline({
  children,
  size = "xl",
  centered = true,
}: HeadlineProps) {
  return (
    <h2
      className={[
        styles.headline,
        styles[size],
        centered ? styles.centered : styles.left,
      ].join(" ")}
    >
      {children}
    </h2>
  );
}
