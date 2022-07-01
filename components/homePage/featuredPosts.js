import PostGrid from "../posts/postGrid";
import style from "./featuredPosts.module.css";

export default function FeaturedPosts(props) {
  return (
    <section className={style.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
