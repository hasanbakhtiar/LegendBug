"use strict";

var root = document.querySelector('#root'); // let number = 0;
// const addOne = () =>{
//         number ++;
//         renderApp();
// }
// const clearOne = ()=>{
//     number --;
//     renderApp();
// }
// const renderApp=()=>{
//     let temp = (
//         <div>
//             <h1>Number : {number}</h1>
//             <button onClick = {clearOne}>-1</button>
//             <button onClick = {addOne}>+1</button>
//         </div>
//     )
//     ReactDOM.render(temp, root);
// }
// renderApp();

var timeCounter = function timeCounter() {
  var infoTime = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Time is: ", new Date().toLocaleTimeString()));
  ReactDOM.render(infoTime, root);
};

setInterval(timeCounter, 1000);
