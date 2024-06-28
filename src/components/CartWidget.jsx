import React from 'react';
import { Link }  from 'react-router-dom';


const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="cart-widget">
        <img src="./images/cart-icon.png" alt="Cart" />
        <span>3</span> {/* Example of cart item count */}
      </div>
    </Link>
    
  );
}

export default CartWidget;