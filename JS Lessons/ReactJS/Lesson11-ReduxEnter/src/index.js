import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'
import { createStore } from 'redux';

const intialState = {
  count:5
}

const store = createStore((state = intialState, action)=>{
    switch(action.type){
case "increment":
  const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1
  return{
    count: state.count + incrementBy
  }
  case "decrement":
    return{
      count: state.count-5
    }

    case "RESET":
      return{
        count: 0
      }

      default:
        return state
    }
})

store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch({
  type: "increment",
  incrementBy:10
})

















const App =()=>{
  return(<h1>Hello</h1>)
}


ReactDOM.render(<App />,document.getElementById('root')
);






















