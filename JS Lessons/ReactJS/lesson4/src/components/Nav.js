import React from 'react'
import Dropdown from './Dropdown'


const Nav = () =>{
    const myData = {
      basliq: "BMW",
      model1: "x5",
      model2: "x6",
      model3: "X7"
    }
    return(
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            
  
            {/* DropDown Start */}
           <Dropdown basliq={myData.basliq} model1={myData.model1} model2 = 'x6' model3 = 'x7'/>
           <Dropdown basliq="Mercedes"  model1='s500' model2 = 's600' model3 = 's700'/>
           <Dropdown basliq="Dodge" model1='s500'/>
  
            {/* DropDown End */}
          
          </ul>
          
        </div>
      </div>
    </nav>
    );
  }

export default Nav
