import React from "react";
import {UserName} from './componentsWithProps/userName'
import {UserGender} from './componentsWithProps/userGender'
import {UserAge} from './componentsWithProps/userAge'
import {YearsWorked} from './componentsWithProps/yearsWorked'

import '../components/UserInfo.css'

export function UserInfo () {
    return (
        <ul className='listOfData'>
            <li>{UserName}</li>
            <li>{UserGender}</li>
            <li>{UserAge}</li>
            <li>{YearsWorked}</li>
        </ul>
    )
};
