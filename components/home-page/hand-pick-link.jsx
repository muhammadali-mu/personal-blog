import LinkGrid from "../link/link-grid";
import styles from "./hand-pick-link.module.scss";

export default function HandPickLink(props) {
  return (
    <section className={styles.links_table} id="image">
      <div className={styles.heading}>
        <span></span>
        <h2>Great websites for downloading image and video </h2>
      </div>

      <div className={styles.latest}>
        <LinkGrid items={props.items} />
      </div>
    </section>
  );
}
