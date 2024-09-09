import React from 'react';
import Image from "next/image";
import mangas from '@/app/constants/manga';

export default function MangaCard() {
    mangas;

    return (
        <div className="">
            <ul >
                {mangas.map(manga => (
                    <li key={manga.id}>
                        <p>{manga.name}</p>
                        <Image
                            src={manga.cover}
                            alt={manga.alt}
                            className="manga-cover"
                            unoptimized
                            width={176}
                            height={224}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}