import s from '../../styles/page.module.sass'
import Link from "next/link";
import {Header} from "@/components/layout/Header";
import {Hero} from "@/components/layout/Hero";
import {HomeMenu} from "@/components/layout/HomeMenu";
import {Story} from "@/components/layout/Story";

export default function Home() {
    return (
        <div className={s.container}>
            <Hero/>
            <HomeMenu/>
            <Story/>
        </div>
    );
}
