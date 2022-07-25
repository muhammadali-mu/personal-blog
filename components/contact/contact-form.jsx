import { useState } from "react";
import styles from "./contact-form.module.scss";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendMessageHandler(event) {
    event.prevemtDefault();

    //optional: add client -site validation

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={styles.contact}>
      <h2>Feel free to join me </h2>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              className={styles.input}
              placeholder="Enter Name"
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              className={styles.input}
              placeholder="Enter Email"
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.control_text}>
            <label htmlFor="message">Your Message</label>
            <textarea
              className={styles.input}
              placeholder="Enter your message "
              id="message"
              rows="7"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
