import AllPosts from "../../components/posts/allPosts";
export default function AllPostsPage() {
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
  return <AllPosts posts={dummyData} />;
}
