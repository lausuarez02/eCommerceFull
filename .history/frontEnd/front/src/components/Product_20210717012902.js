import React from "react";

import {Link} from "react-router-dom"

const Product = ({ imageUrl, description, price, name, productId }) => {
    return(
        <div>
              <img src={imageUrl} alt={name} style={{width:"20%"}}/>

              <div>
                  <p>{name}</p>
                  <p>
                  {description.substring(0, 100)}
                  </p>

                  <p>${price}</p>

                  <Link to={`/product/${productId}`}>View</Link>
              </div>
        </div>
    )
}

export default Product;