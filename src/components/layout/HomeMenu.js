import React from 'react';
import s from './HomeMenu.module.sass'
import {MenuItem} from "@/components/menu/MenuItem";
import Image from "next/image";
import salad3 from '../../../public/salad3.png'
import salad4 from '../../../public/salad4.png'

export const HomeMenu = () => {
    return (
        <div className={s.homeMenu}>
            <Image className={s.salad3} alt={'salad'} src={salad3}/>
            <Image className={s.salad4} alt={'salad'} src={salad4}/>
            <div className={s.checkOut}>check out</div>
            <div className={s.menu}>Menu</div>
            <div className={s.elements}>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </div>
    );
};
