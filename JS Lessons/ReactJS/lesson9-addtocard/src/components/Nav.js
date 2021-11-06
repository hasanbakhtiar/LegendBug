import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';

const Nav = () => {
    const{totalItems,
        
    }=useCart();

    return (
        <div>
            


<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home🌎</NavLink>
      </li>
     
    
    </ul>
    <form className="d-flex">
      <NavLink to="/cart" className="btn btn-outline-success" type="submit">Card🛒({totalItems})</NavLink>
    </form>
  </div>
</div>
</nav>
        </div>
    )
}

export default Nav
