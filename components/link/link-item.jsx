import Link from "next/link";
import Image from "next/image";

import styles from "./link-item.module.scss";

function LinkItem(props) {
  const { type, image, excerpt, name, path } = props.items;

  const imagePath = `/images/items/${type}/${image}`;

  return (
    <li className={styles.item}>
      <Link href={path}>
        <a target="_blank">
          <div className={styles.container}>
            <Image
              src={imagePath}
              alt={name}
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.content}>{excerpt}</p>
        </a>
      </Link>
    </li>
  );
}

export default LinkItem;
