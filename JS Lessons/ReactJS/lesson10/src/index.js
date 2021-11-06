import { render } from '@testing-library/react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'

// const App =()=>{
//   return(
//     <h1>Hello</h1>
//   );
// }

class App extends Component{
  
  constructor(props){
    super(props)
    this.addCount = this.addCount.bind(this);
    console.log("runing constructor");
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    console.log("runing didMount");
  }
  componentDidUpdate(){
    document.querySelector("button").style.background = "red";
    document.querySelector("h1").innerHTML = "new";

  }

  componentWillUnmount(){
    console.log("did unmount");
  }
 
  addCount(){
    this.setState({
      count: this.state.count + 1
    })
  }


  render(){
    return(
      <div className="container">
        <p >U clicked : {this.state.count}</p>

        <button onClick={this.addCount}>+1</button>
        <button>-1</button>
        <h1></h1>

        
      </div>
      
    )
  console.log("Hello");

  }

}




ReactDOM.render(<App />,document.getElementById('root'));






















