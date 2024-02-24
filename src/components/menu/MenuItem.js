import React from 'react';
import s from './MenuItem.module.sass'
import Image from "next/image";
import pizza from "../../../public/pizza.png";
export const MenuItem = () => {
    return (
        <div className={s.card}>
            <Image class={s.pizza} src={pizza} alt={'pizza'}/>
            <div className={s.title}>Pepperoni Pizza</div>
            <div className={s.subtitle}>Some description about pepperoni pizza, ome description about pepperoni pizza</div>
            <button>Add to card 12$</button>
        </div>
    );
};
