import Image from "next/image";

import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/sechaharom.JPG"
          alt="mohamed ali picture"
          width={300}
          height={300}
        />
      </div>
      <h1>hi , im mohamed ali </h1>
      <p>this is my portfolio im an next js developer </p>
    </section>
  );
}
