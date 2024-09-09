import React from 'react';
import Image from "next/image";

export default function MangaCard() {

    return (
        <div className="">
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