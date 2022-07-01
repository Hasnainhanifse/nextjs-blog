import Image from "next/image";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image src={"/images/site/profile.png"} alt="Hasnain" width={300} height={300} />
      </div>
      <h1>Hi, I am Hasnain</h1>
      <p>I blog about web development - especially frontend frameworks like Angular and Next</p>
    </section>
  );
}
