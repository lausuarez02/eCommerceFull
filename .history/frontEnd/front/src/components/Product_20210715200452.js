import React from "react";

import {Link} from "react-router-dom"

const Product = () => {
    return(
        <div>
              <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=8" alt="Product name"/>

              <div>
                  <p>Product 1</p>
                  <p>
                      DEscripcion
                  </p>

                  <p>$500.55</p>

                  <Link to={`/product/${1111}`}>View</Link>
              </div>
        </div>
    )
}

export default Product;