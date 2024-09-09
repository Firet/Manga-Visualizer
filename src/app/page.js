import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Lista de Mangas</h1>
      <p>Bleach</p>
      <Image
        src="./bleach-74.png"
        alt="Tapa de Bleach"
        className="manga-cover"
        unoptimized
        width={176}
        height={224}
      />
    </div>
  );
}
