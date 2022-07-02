import style from "./contactForm.module.css";

export default function ContactForm() {
  return (
    <section className={style.contact}>
      <h1>How can i help you ?</h1>
      <form className={style.form}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required></input>
          </div>
          <div className={style.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required></input>
          </div>
          <div className={style.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <div className={style.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
