import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


const App = (props)=>{

  const [say, hadise] = useState(props.say);

 const  sayiSil=()=>{
    if(say > 0){
      hadise(say-1);
    }
  }

  return( 
    <div className="container">
    <p>U clicked <span className="text-primary">{say}</span></p>
    {/* <button onClick={()=>{hadise(say-1)}} className="btn btn-xs btn-danger" >-1</button>
    <button onClick={()=>{hadise(say+1)}} className="ms-3 btn btn-xs btn-success" >+1</button> */}
    <button onClick={sayiSil} className="btn btn-xs btn-danger" >-1</button>
    <button onClick={()=>{hadise(say+1)}} className="ms-3 btn btn-xs btn-success" >+1</button>
    </div>
    );
   
  
}
App.defaultProps={
  say:0
}


// class App extends React.Component{

//   constructor(props){
//     super(props);
//     this.clearCount = this.clearCount.bind(this);
//     this.addCount = this.addCount.bind(this);
//     this.state={
//       count : 0
//     }
//   }

//   clearCount(){
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   addCount(){
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render(){
//     return(
//       <div className="container">
//           <p>U clicked <span className="text-primary">{this.state.count}</span></p>

//           <button className="btn btn-xs btn-danger" onClick={this.clearCount}>-1</button>
//           <button className="ms-3 btn btn-xs btn-success" onClick={this.addCount}>+1</button>
//       </div>
//     );
//   }
// }






ReactDOM.render(<App />,document.getElementById('root')
);






















