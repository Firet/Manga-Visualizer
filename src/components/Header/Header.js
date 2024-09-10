import React from 'react';
import { useTheme } from 'next-themes';
import './Header.css'

export default function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <header>
            <h1 className="header-title">Manga Display</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    );
}