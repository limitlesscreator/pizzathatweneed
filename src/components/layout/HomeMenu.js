import React from 'react';
import s from './HomeMenu.module.sass'
import {MenuItem} from "@/components/menu/MenuItem";

export const HomeMenu = () => {
    return (
        <>
            <div className={s.checkOut}>check out</div>
            <div className={s.menu}>Menu</div>
            <MenuItem/>
        </>
    );
};
