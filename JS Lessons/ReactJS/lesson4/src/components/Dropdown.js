import React, { Component } from 'react'


class Dropdown extends React.Component{
    render(){
        return(
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {this.props.basliq}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">{this.props.model1}</a></li>
        <li><a className="dropdown-item" href="#">{this.props.model2}</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">{this.props.model3}</a></li>
      </ul>
    </li>
  );
    }
      
    
  }

export default Dropdown
