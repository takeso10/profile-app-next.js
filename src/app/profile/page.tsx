import Header from "../../../components/Header";
import Image from "next/image";
import styles from "../../../styles/profile.module.scss";

export default function Profile() {
  return (
    <div>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2>初めまして竹内颯汰です。</h2>
          <Image
            src="/kinggnulive.jpg"
            alt="profile Image"
            width={400}
            height={300}
          />
        </div>
        <div className={styles.right}>
          <h2>竹内颯汰</h2>
          <p>2001/10/08</p>
          <p>茨城県土浦市出身</p>
          <p>2020 土浦第一高校卒業</p>
          <p>2024 筑波大学理工学群社会工学類卒業予定</p>
          <p>2024 チームラボ入社予定</p>
        </div>
      </div>
    </div>
  );
}
