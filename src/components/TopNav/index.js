import React from 'react';
import Input from '../Input';
import {
  Link,
} from "react-router-dom";
import styles from './index.module.css';

function TopNav() {
  return (
    <div className={styles.container}>

      <Link to="/city" className={styles.link}>
      XXXX
        <i className="icofont-rounded-down"></i>
      </Link>
      <Input />
      <Link to="/shoppingCart" className={styles.link}>
        <i className="icofont-shopping-cart icofont-2x"></i>
      </Link>

    </div>
  )
}

export default TopNav



      // <ul className={styles.container}>
      //   <li>
      //     <Link to="/city" className={styles.link}>
      //       广州
      //       <i className="icofont-rounded-down"></i>
      //     </Link>
      //   </li>
      //   <li styles={{width:"200px"}}>
      //     <Input />
      //   </li>
      //   <li>
      //     <Link to="/shoppingCart" className={styles.link}>
      //       <i className="icofont-shopping-cart icofont-2x"></i>
      //     </Link>
      //   </li>
      // </ul>
