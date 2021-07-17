import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";


const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/cart" className="nav-link active" aria-current="page">
              
              cart
          <span classNameName="cartLogo_badge"> {getCartCount()}</span>
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