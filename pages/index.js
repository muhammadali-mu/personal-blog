import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

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

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
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
