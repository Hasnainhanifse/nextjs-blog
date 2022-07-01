import style from "./postItem.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
  const { title, image, date, excerpt, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={style.post}>
      <Link href={linkPath}>
        <a>
          <div className={style.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout={"responsive"} />
          </div>
          <div className={style.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
