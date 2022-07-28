import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import HandPickLink from "../components/home-page/hand-pick-link";
import Hero from "../components/home-page/hero";
import { getFeaturedItems } from "../lib/items-util";
import { getFeaturedPosts } from "../lib/posts-util";

const DUMMY_DATA = [
  {
    id: "1",
    slug: "image",
    name: "Unsplash",
    image: "/images/items/image/unsplash.png",
    content:
      "Unsplash photos are made to be used freely. You can find free photos from your designe ",
    path: "https://unsplash.com/",
  },
];

export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      <HandPickLink items={props.items} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  const featuredItems = getFeaturedItems();

  return {
    props: {
      posts: featuredPosts,
      items: featuredItems,
    },
    revalidate: 1800,
  };
}
