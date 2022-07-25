import Link from "next/link";

import Logo from "./logo";

import styles from "./main-navigation.module.scss";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/posts">
              <a className={styles.roadmap}>ROAD MAP</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.contact}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.htm}>HTML</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.css}>CSS & SASS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.img}>IMAGE</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.text}>FONT</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.youtube}>BEST YOUTUBER</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/">
        <a className={styles.github}></a>
      </Link>
    </header>
  );
}

export default MainNavigation;
