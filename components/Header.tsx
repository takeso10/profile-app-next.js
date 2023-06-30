import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.home}>
        HOME
      </Link>
      <div className={styles.category}>
        <Link href="./profile" className={styles.other}>
          PROFILE
        </Link>
        <Link href="./job" className={styles.other}>
          WORKS
        </Link>
        <Link href="./private" className={styles.other}>
          PRIVATE
        </Link>
        <Link href="./products" className={styles.other}>
          PRODUCTS
        </Link>
        <Link
          href={"https://twitter.com/QHXxUXYerj4pTcq"}
          className={styles.twitter_link}
        >
          <Image
            src="/twitter.png"
            alt="twitter logo"
            width={25}
            height={25}
            className={styles.logo}
          ></Image>
        </Link>
        <Link href={"https://www.instagram.com/sota_108/"}
          className={styles.insta_link}
        >
          <Image
            src="/Instagram_logo_2022.svg.webp"
            alt="insta logo"
            width={25}
            height={25}
            className={styles.logo}
          ></Image>
        </Link>
        <label className={styles.tag}>Menu</label>
        <ul className={styles.menus}>
            <li><Link href="./profile" >PROFILE</Link></li>
            <li><Link href="./job" >WORKS</Link></li>
            <li><Link href="./private" >PRIVATE</Link></li>
            <li><Link href="./products" >PRODUCTS</Link></li>
        </ul>
      </div>
    </div>
  );
}
