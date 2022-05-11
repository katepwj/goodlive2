import React from 'react';
import Header from '../../components/Header/Header';
// import Comment from '../../components/Comment/Comment';
import CartItem from '../../components/CartItem/CartItem'
import styles from './index.module.css';


function ShoppingCart() {
  return (
    <div>
      <Header title={"购物车"} />
      <div style={{ padding: "10px", lineHeight: "1.5" }}>
        <div>
          <i className="icofont-user"></i> <span>XXX</span>
        </div>
        <div>
          <i className="icofont-location-pin"></i> <span>XXX</span>
        </div>
      </div>
      <CartItem />
    </div>
  )
}

export default ShoppingCart
