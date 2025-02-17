import styles from "./card.module.css";

export default function Card({ title, desc, children }) {
  return (
    <article className={styles.wrapper}>
      {children}
      <div className={styles.descWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{desc}</p>
      </div>
    </article>
  );
}
