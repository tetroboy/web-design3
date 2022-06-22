import React from 'react';
import s from './aboutApp.module.css'
import logo from '../../img/logo.png'
const AboutApp = () =>{
    return(
        <div className={s.aboutContainer}>
            <div className={ s.aboutImg }>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.aboutText}>
                Телефонний довідник у якому в будь який час ви можете знайти номер та інформацію про людину яка вам потрібна
                Веб-додаток дає вибір по якому полю шукати а потім знаходить (якщо має відповідний запис в базі даних);
            </div>
        </div>
    )
}

export default AboutApp
