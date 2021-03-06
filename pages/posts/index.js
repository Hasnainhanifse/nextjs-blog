import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postsUtil";
export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
