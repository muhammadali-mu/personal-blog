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
        <h1>
          <span>Hi,</span>
          <span> im &nbsp;</span>
          <span> mohamed &nbsp;</span>
          <span> ali</span>
        </h1>
      </span>
      <p>
        <span>This is &nbsp;</span>
        <span>my &nbsp;</span>
        <span>portfolio &nbsp;</span>
        <span>also you can &nbsp;</span>
        <span>find more about &nbsp;</span>
        <span>hand-pick link to &nbsp;</span>
        <span>proven your &nbsp;</span>
        <span>designe &nbsp;</span>
        <span>according to &nbsp;</span>
        <span>experience.</span>
      </p>
      <div className={styles.form_container}>
        <ContactForm />
      </div>
    </section>
  );
}
