import PostItem from "./postItem";
import style from "./postGrid.module.css";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={style.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
