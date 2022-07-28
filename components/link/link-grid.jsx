import LinkItem from "./link-item";
import styles from "./link-grid.module.scss";

function LinkGrid(props) {
  return (
    <ul className={styles.grid}>
      {props.items.map((item) => (
        <LinkItem key={item.id} items={item} />
      ))}
    </ul>
  );
}

export default LinkGrid;
