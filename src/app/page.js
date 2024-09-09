import styles from "./page.module.css";
import MangaCard from "@/components/MangaCard/MangaCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Lista de Mangas</h1>
      <MangaCard />
    </div>
  );
}
