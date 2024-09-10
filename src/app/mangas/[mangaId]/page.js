'use client'

import { usePathname } from 'next/navigation'
import mangas from '@/app/constants/manga';


function MangaDetails() {

    const pathname = usePathname()
    const mangaId = pathname.split('/')[2];
    const manga = mangas.find((manga) => manga.id === parseInt(mangaId));

    if (!mangaId || isNaN(mangaId) || !manga) {
        return <div>We could not find this manga</div>;
    }

    return (
        <div>
            {/* <h1>MangaId {manga.mangaId}</h1> */}
            <h1>Titulo: {manga.name}</h1>
        </div>
    );
}


export default MangaDetails;