
const root = document.querySelector('#root');


// let number = 0;

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


let timeCounter = ()=>{
    let infoTime = (
        <div>
            <h2>Time is: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(infoTime, root);

}
setInterval(timeCounter, 1000);




