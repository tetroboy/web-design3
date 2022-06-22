import React from 'react';
import {Link} from "react-router-dom";
import s from './header.module.css'

const Header = () =>{

    return(
        <div>
            <ul>
                <li><Link className={s.link} to = '/'>Телефонний довідник</Link></li>
                <li><Link className={s.link} to = 'aboutApp' >Про додаток</Link></li>
                <li><Link className={s.link} to = 'account'>Аккаунт</Link></li>
                <li><Link className={s.link} to = 'login'>Увійти</Link></li>
                <li><Link className={s.link} to = 'signup'>Регистрація</Link></li>

            </ul>
        </div>
)
}

export default Header
