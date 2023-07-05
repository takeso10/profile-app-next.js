import Header from "../../../components/Header";
import Image from "next/image";
import styles from "../../../styles/private.module.scss";



export default function Private() {
  return (
    <div>
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
             src='/nozawa.jpg'
            alt="nozawa img"
            width={300}
            height={400}
            style={{
              width:'100%',
              height:'auto'
            }}>
          </Image>
        </div>
        <div className={styles.right}>
          <p>茨城県土浦市在住</p>
          <h2>趣味</h2>
          <h3>スノーボード</h3>
          <p>長野、新潟、群馬あたりで滑ってます。</p>
          <h3>サッカー</h3>
          <p>サークルや社会人リーグでやってます。</p>
          <h3>バラエティ番組視聴</h3>
          <p>かまいたちが好きです。</p>
        </div>
      </div>
    </div>
  );
}
