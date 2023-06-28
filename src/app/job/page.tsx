import Header from "../../../components/Header";
import styles from "../../../styles/job.module.scss";
import Image from "next/image";

export default function Job() {
  return (
    <div>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            src="/1200px-Teamlab_logo_RGB_color.png"
            alt="profile Image"
            width={400}
            height={300}
          />
        </div>
        <div className={styles.right}>
          <h2>株式会社チームラボ</h2>
          <p>2024年新卒入社</p>
          <p>packageチーム所属　フロントエンドエンジニア</p>
        </div>
      </div>
    </div>
  );
}
