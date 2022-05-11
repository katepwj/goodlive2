import React from 'react'
import styles from './index.module.css';

export default function CartItem() {
  return (
    <li style={{listStyle:"none"}}>

      <div className={styles.des}>

        <div className={styles.left}>
          <img src="https://wallpaperaccess.com/full/157353.jpg" />
          <div className={styles.center}>
            <p>商户：xxxxxxx</p>
            <p>类型：xxxxxxxxx</p>
            <p>价格：￥xxxxx</p>
          </div>
        </div>

        <button>评价</button>
      </div>

      <div className={styles.btm}>
      <textarea 
      // rows="4" cols="100%" 
      // name="comment" form="usrform" 
      />
        <br />
        <button className={styles.active}>提交</button>
        <button className={styles.cancel}>取消</button>

     </div>
  
    </li>
  )
}
