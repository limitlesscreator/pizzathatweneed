import s from '../../styles/page.module.sass'
import Link from "next/link";
import {Header} from "@/components/layout/Header";
import {Hero} from "@/components/layout/Hero";
import {HomeMenu} from "@/components/layout/HomeMenu";

export default function Home() {
    return (
        <div className={s.container}>
            <Header/>
            <Hero/>
            <HomeMenu/>
        </div>
    );
}
