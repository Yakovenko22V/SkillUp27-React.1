import React from "react";
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
const name = 'Vova';
const sumNumber = (a, b) => a + b;
function WorkOnLesson() {
    return (
        <div>
            <h1 style={{ border: '1px solid red' }} > hello {name}, {sumNumber(5, 6)} </h1>
            <p>Test</p>
        </div>
        );
}
 export default WorkOnLesson;
