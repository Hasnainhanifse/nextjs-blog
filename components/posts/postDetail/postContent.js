import style from "./postContent.module.css";
import PostHeader from "./postHeader";

export default function PostContent() {
  const dummyData = {
    title: "first post ",
    image: "nature.jpg",
    date: "2022,02,10",
    slug: "first-post",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  };

  const imagePath = `/images/posts/${dummyData.slug}/${dummyData.image}`;

  return (
    <article className={style.content}>
      <PostHeader title={dummyData.title} image={imagePath} />
      {dummyData.content}
    </article>
  );
}
