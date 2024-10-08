'use client';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header/Header';
import MangaCollection from '@/components/MangaCollection/MangaCollection';
import MyScene from '@/components/canvas/Scene';
import './page.module.css';

export default function Home() {
	return (
		<ThemeProvider>
			<Header />
			<MangaCollection />
			{/* <MyScene /> */}
		</ThemeProvider>
	);
}
