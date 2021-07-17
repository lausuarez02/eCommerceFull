import React from "react";

import {Link} from "react-router-dom"

const Product = ({ imageUrl, description, price, name, productId }) => {
    return(
        <div>
              <img src={imageUrl} alt={name} style={{width:"20%"}}/>

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