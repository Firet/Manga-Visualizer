import React from 'react';
import Image from "next/image";
import './MangaCard.css'

export default function MangaCard({ name, src, alt }) {

    return (
        <div className="manga-card-container">
                <p className='manga-main-title'>{name}</p>
                <Image
                    src={src}
                    alt={alt}
                    className="manga-cover"
                    unoptimized
                    width={176}
                    height={224}
                />
        </div>
    );
}