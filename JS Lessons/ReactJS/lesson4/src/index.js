import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'
import App from './components/App';

// const Dropdown = (props) =>{
//   return(
//     <li className="nav-item dropdown">
//     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//       {props.basliq}
//     </a>
//     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//       <li><a className="dropdown-item" href="#">{props.model1}</a></li>
//       <li><a className="dropdown-item" href="#">{props.model2}</a></li>
//       <li><hr className="dropdown-divider" /></li>
//       <li><a className="dropdown-item" href="#">{props.model3}</a></li>
//     </ul>
//   </li>
//   );
// }









ReactDOM.render(<App />,document.getElementById('root')
);
























// const App =()=>{
//   return(
//     <h1>Hello React</h1>
//   );
// }

// const App = function(){
//   return(
//     <h1>Hello React</h1>
//   );
// }

// function App(){
//   return(
//     <h1>Hello React</h1>
//   );
// }
//statefull component

// class App extends React.Component{ //stateless component
//   render(){
//     return(
//       <h1>Hello React4</h1>
//     );
//   }
// }