'use client'
import React, {useState} from 'react';
import s from './page.module.sass'
import Image from "next/image";

import google from '../../../public/google.png'



export default function Register () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleFormSubmit(ev){
        ev.preventDefault()
        fetch('/api/register',{
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })
    }

    return (
        <div>
            <div className={s.title}>Register</div>
            <form onSubmit={handleFormSubmit} >
                <input value={email} onChange={e => setEmail(e.currentTarget.value)} className={s.input} type="email" placeholder={'test@example.com'}/>
                <input value={password} onChange={e => setPassword(e.currentTarget.value)} className={s.input} type="password" placeholder={'test@example.com'}/>
                <button className={s.register}>Register</button>
                <div className={s.subTitle}>or login with provider</div>
                <button className={s.google}>
                    <Image src={google} alt={'google'}/>
                    Login with google </button>
            </form>
        </div>
    );
};
