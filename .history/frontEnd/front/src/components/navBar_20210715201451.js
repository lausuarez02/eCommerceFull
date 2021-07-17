import React from "react";
import {Link} from "react-router-dom"



const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/cart" class="nav-link active" aria-current="page">
              
              cart
          <span className="cartLogo_badge"> 0</span>
          </Link>
        </li>
       {/* <li class="nav-item">
          <Link to="/" class="nav-link">Shop</Link>
    </li>*/}
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar;