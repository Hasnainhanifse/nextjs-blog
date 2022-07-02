import { Fragment } from "react";
import FeaturedPosts from "../components/homePage/featuredPosts";
import Hero from "../components/homePage/hero";
import { getFeaturedPosts } from "../lib/postsUtil";

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
