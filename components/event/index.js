import styles from "./index.module.css";
import { CardInfo } from "@const";
import Card from "./card";

export default function Event() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h1 className={styles.headTitle}>Kodizim Sana Neler Katabilir?</h1>
        <p className={styles.headDesc}>
          Kodizim; yazılım, tasarım ve teknoloji ile ilgilenenlerin toplandığı
          bir topluluk olarak, katılan bireylere etkinlikleri vasıtasıyla,
          sektör de aktif rol alan bireylerden tecrübe edinme, yapılan
          workshoplar ile yeni yazılım dünyalarına açılma ve pair programming
          yapısıylada birlikte gelişmenin temellerini atar.
        </p>
      </article>
      <section className={styles.cardsWrapper}>
        {CardInfo &&
          CardInfo.map((card, i) => (
            <Card
              key={card.title + card.variant}
              title={card.title}
              desc={card.desc}
            >
              <img
                alt={card.variant}
                src={`/assets/images/${card.variant}.png`}
              />
            </Card>
          ))}
      </section>
    </section>
  );
}
