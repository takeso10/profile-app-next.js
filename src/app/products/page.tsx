import Link from "next/link";
import Header from "../../../components/Header";
import Image from "next/image";
import styles from "../../../styles/products.module.scss";


export default function Products() {
  return (
    <div>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.github_account}>
        <Link
          href={"https://github.com/takeso10"}
          className={styles.github_link}
        >
          <Image
            src="/github.svg.png"
            alt="github logo"
            width={50}
            height={50}
            className={styles.logo}
          ></Image>
        </Link>
        <a href={"https://github.com/takeso10"}>私のGitHubアカウント</a>
        </div>
        <div className={styles.products}>
          <div className={styles.product}>
          <h2>ゆめみフロントエンドテスト</h2>
          <div className={styles.link}>
            <Link href={"https://yumemi-frontend-coding-test-wheat.vercel.app/"}>https://yumemi-frontend-coding-test-wheat.vercel.app/</Link>
          </div>
          <Image
            src="/yumemi_test.png" alt={"yumemi test"} width={800} height={500}
          />
          </div>
          <div className={styles.product}>
            <h2>スノーボードギアレビューサイト</h2>
            <div className={styles.link}>
              <Link href={"https://snowboard-gear-review-app.vercel.app/"}>https://snowboard-gear-review-app.vercel.app/</Link>              
            </div>
          <Image
            src="/snowgear.png" alt={"snowgear test"} width={800} height={500}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
