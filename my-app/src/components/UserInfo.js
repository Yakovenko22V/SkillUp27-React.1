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
            <li>Name: {userName}</li>
            <li>Gender: {userGender}</li>
            <li>Age: {userAge}</li>
            <li>Year Worked: {yearsWorked}</li>
        </ul>

    )
};
 