import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with next js",
    image: "getting-started-nextjs.png ",
    excerpt:
      "nextjs is a the react framework for production  - it makes building fullstack react apps and sites a breez and ships with built-in SSR. ",
    date: "2022-02-10",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
