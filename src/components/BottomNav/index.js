import React from 'react';
import {
  NavLink
} from "react-router-dom";


import styles from './index.module.css';

function BottomNav() {
  return (
    <div >

      <ul className={styles.container}>
        <li>
          <NavLink to="/"
            className={styles.NL}
            activeClassName={styles.active}>
            <i className="icofont-home"></i>
            <p>Home</p>
          </NavLink>
        </li>
        <li>

          <NavLink to="/shop"
            className={styles.NL}
            activeClassName={styles.active}>
            <i className="icofont-bag"></i>
            Shop
          </NavLink>
        </li>
        <li>

          <NavLink to="/life"
            className={styles.NL}
            activeClassName={styles.active}>
            <i className="icofont-trophy"></i>
            Life
          </NavLink>
        </li>
        <li>

          <NavLink to="/mine"
            className={styles.NL}
            activeClassName={styles.active}>
            <i className="icofont-users-alt-3"></i>
            Mine
          </NavLink>
        </li>
      </ul>

    </div>
  )
}

export default BottomNav
