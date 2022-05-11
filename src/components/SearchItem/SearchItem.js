import React from 'react'
import styles from './index.module.css';

function SearchItem(props) {
  return (

    <li className={styles.container}>
      <img
        src="https://wallpaperaccess.com/full/157353.jpg"
        alt="img"
      />
      <div className={styles.desc}>
        <div className={styles.left}>
          <p>豪宅*使馆壹号-南</p>
          <p>17/19层 4室一厅 100m</p>
        </div>
        <div className={styles.right}>
          <button>整租</button>
          <p>130000/月</p>
        </div>
      </div>
    </li>

  )
}

export default SearchItem
