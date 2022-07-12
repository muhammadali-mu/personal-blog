import Link from "next/link";

export default function MainNavigation() {
  <header>
    <Link href="/">
      <Logo />
    </Link>

    <nav>
      <ul>
        <li>
          <Link href="/post">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>;
}
