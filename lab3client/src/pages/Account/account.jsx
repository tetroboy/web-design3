import React from 'react';
import s from './account.module.css'

const Account = () =>{

    return(
        <table>
            <thead>
            <tr>
                <th className={s.dimas}>
                    Інформація про акаунт
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>
                    Ім'я
                </th>
                <td>
                    Dmytro Zimenkov
                </td>
            </tr>
            <tr>
                <th>
                    Стать
                </th>
                <td>
                    Male
                </td>
            </tr>
            <tr>
                <th>
                    Email
                </th>
                <td>
                    **********@gmail.com
                </td>
            </tr>
            <tr>
                <th>
                    Телефон
                </th>
                <td>
                    +38********
                </td>
            </tr>
            <tr>
                <th>
                    Дата народження
                </th>
                <td>
                    **.**.****
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default Account
