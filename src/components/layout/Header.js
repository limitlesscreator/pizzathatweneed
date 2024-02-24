import React from 'react';
import s from "../../../styles/page.module.sass";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <Link href={'#'} class={s.logo}>ST PIZZA</Link>
                <nav className={s.nav}>
                    <Link href={'#'}>Home</Link>
                    <Link href={'#'}>Menu</Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Contact</Link>
                    <Link href={'#'}>Login</Link>
                </nav>
            </header>
        </>
    );
};
