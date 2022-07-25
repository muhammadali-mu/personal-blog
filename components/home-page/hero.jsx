import Image from "next/image";
import ContactForm from "../contact/contact-form";

import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/sechaharom.JPG"
          alt="mohamed ali picture"
          width={150}
          height={150}
        />
      </div>

      <span className={styles.squer}>
        <h1>Hi,im mohamed ali </h1>
      </span>
      <p>
        This is my portfolio also you can find more about hand-pick link to
        proven your designe according to my experience.{" "}
      </p>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </section>
  );
}
