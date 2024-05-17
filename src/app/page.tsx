import Image from "next/image";
import styles from "./page.module.css";
import { Rating } from "./components/Rating";

export default function Home() {
  return (
    <main className={styles.main}>
      <Rating stars={7}/>
    </main>
  );
}
