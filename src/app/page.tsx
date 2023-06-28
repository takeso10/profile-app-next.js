import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.bgimg}>
          <h1>Tekeuchi Sota</h1>
        </div>
        <div className={styles.category}>
          <Link href={"./profile"} className={styles.box}>
            <div>
              <h3>PROFILE</h3>
            </div>
          </Link>
          <Link href={"./job"} className={styles.box}>
            <div>
              <h3>WORKS</h3>
            </div>
          </Link>
          <Link href={"./private"} className={styles.box}>
            <div>
              <h3>PRIVATE</h3>
            </div>
          </Link>
          <Link href={"./products"} className={styles.box}>
            <div>
              <h3>PRODUCTS</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
