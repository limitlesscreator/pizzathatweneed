import React from 'react';
import s from './Hero.module.sass'
import Image from "next/image";
import pizza from '../../../public/pizza.png'
import arrowRight from '../../components/icons/arrow.svg'
export const Hero = () => {
    return (
        <>
            <div className={s.flexContainer}>
                <div>
                    <div className={s.title}>Everything  is better with a <span>Pizza</span></div>
                    <div className={s.subTitle}>
                        Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                    </div>
                    <div className={s.buttns}>
                        <button className={s.orderNow}>ORDER NOW
                            <Image class={s.arrowRight} src={arrowRight} alt={'arrow'}/>
                        </button>
                        <button className={s.learnMore}>Learn more
                            <Image  src={arrowRight} alt={'arrow'}/>
                        </button>
                    </div>
                </div>
                    <Image class={s.pizza} src={pizza} alt={'pizza'}/>
            </div>
        </>
    );
};
