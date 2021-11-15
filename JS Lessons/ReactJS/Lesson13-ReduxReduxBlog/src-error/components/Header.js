import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand"  >Navbar</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link " aria-current="page" activeClassName="active" exact>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/blog" className="nav-link " aria-current="page" activeClassName="active" exact>Blog</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link " aria-current="page" activeClassName="active" >Contact</NavLink>
              </li>
              
              
            
            </ul>
         
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
