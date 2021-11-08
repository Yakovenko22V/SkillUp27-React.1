import React from "react";

import '../components/UserInfo.css'

export function UserInfo (props) {

    const { 
        userName, 
        userGender, 
        userAge, 
        yearsWorked,
     } = props

    return (
        <ul className='listOfData'>
            <li>Имя: {userName}</li>
            <li>Пол: {userGender}</li>
            <li>Возраст: {userAge}</li>
            <li>Работает лет: {yearsWorked}</li>
            <li>Зарплата:{yearsWorked*10}</li>
        </ul>

    )
};
 