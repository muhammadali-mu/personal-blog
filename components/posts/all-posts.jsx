import styles from "./all-posts.module.scss";
import PostGrid from "./posts-grid";

function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All posts </h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default AllPosts;
