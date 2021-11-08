import React from "react";
import { UserInfo } from "./components/UserInfo";
//import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //         <p>Hello, React!</p>
// //       </header>
// //     </div>
// //   );
// // }
const name = 'Vitaliy';
const sumNumber = (a, b) => a + b;

const arrPeople = [
    {
        name: 'Вова',
        pol: 'Муж',
        age: 27,
        workYear: 1
    },
    {
        name: 'Коля',
        pol: 'Муж',
        age: 98,
        workYear: 90
    },
    {
        name: 'Валюха',
        pol: 'Баба',
        age: 17,
        workYear: 3
    }
]
function WorkOnLessonAndHometask() {
    return (
        <div>
            <h1 style={{ border: '1px solid red' }} > Hello, {name}: {sumNumber(17, 5)} </h1>
            <p style={{fontWeight:'bold', color: 'green'}}>Test</p>
            {
            arrPeople.map((item, i) => (
                <UserInfo 
                key={i}
                userName={item.name} 
                userGender={item.pol} 
                userAge={item.age} 
                yearsWorked={item.workYear} 
                />
            ))
            }
        </div>
        );
}
 export default WorkOnLessonAndHometask;
