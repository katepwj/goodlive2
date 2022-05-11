import React from 'react';
import styles from './index.module.css';

export default function Comment() {
  return (
    <li className={styles.container}>
      <i className="icofont-user"></i>
      <span>XXXXXXXXX</span>
      <br />
      <i className="icofont-star"></i>
      <i className="icofont-star"></i>
      <i className="icofont-star"></i>
      <i className="icofont-star"></i>
      <i className="icofont-star"></i>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </li>
  )
}
