import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart" className="cart-widget-link">
      <div className="cart-widget">
        <img src="../images/carrito.png" alt="Carrito" className="cart-icon" />
        <span className="cart-text">Elije ahora y pide descuento!!</span> 
      </div>
    </Link>
  );
}

export default CartWidget;