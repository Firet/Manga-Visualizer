import React from 'react';
import MangaCard from '../MangaCard/MangaCard';
import mangas from '@/app/constants/manga';

export default function MangaCollection() {

	return (
		<div className="">
            <h1>Manga Collection</h1>
            {mangas.map((manga) => (
                    <MangaCard key={manga.id} name={manga.name} src={manga.cover} alt={manga.alt}/>
                ))}
		</div>
	);
}