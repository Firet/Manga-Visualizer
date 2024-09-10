import React from 'react';
import { useTheme } from 'next-themes';
import './Header.css'

export default function Header() {
    const { theme, setTheme } = useTheme();
        return (
        <header>
            <h1 className="header-title">Manga Display</h1>
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </header>
    );
}