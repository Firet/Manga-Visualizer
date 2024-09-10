import Header from '@/components/Header/header'
import MangaCollection from "@/components/MangaCollection/MangaCollection";
import "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <MangaCollection />
    </>
  );
}
