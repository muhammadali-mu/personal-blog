import PostGrid from "../posts/posts-grid";
import styles from "./featured-posts.module.scss";

function FeaturedPosts(props) {
  return (
    <section className={styles.features}>
      <h2>Featured Posts</h2> //in ghesmato dynamic konam
      <div className={styles.latest}>
        <PostGrid posts={props.posts} />
      </div>
    </section>
  );
}

export default FeaturedPosts;
