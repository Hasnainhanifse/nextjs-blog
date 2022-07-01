import { Fragment } from "react";
import FeaturedPosts from "../components/homePage/featuredPosts";
import Hero from "../components/homePage/hero";

export default function HomePage() {
  const dummyData = [
    {
      title: "first post ",
      image: "nature.jpg",
      date: "2022,02,10",
      excerpt: "lorem asndbabsndbasn aksbdnasb",
      slug: "first-post",
    },
    {
      title: "second post ",
      image: "nature.jpg",
      date: "2022,02,10",
      excerpt: "lorem asndbabsndbasn aksbdnasb",
      slug: "first-post",
    },
    {
      title: "third post ",
      image: "nature.jpg",
      date: "2022,02,10",
      excerpt: "lorem asndbabsndbasn aksbdnasb",
      slug: "first-post",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummyData} />
    </Fragment>
  );
}
