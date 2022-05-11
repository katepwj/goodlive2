import React from 'react';
import {
  Link,
} from "react-router-dom";
import styles from './index.module.css';

function List(props) {
  const { title, list } = props
  console.log(list);
  return (
    <div >
      <h2>{title}</h2>
      <ul className={styles.container}>
        {list.map((val, index) => {
          return (
            <li>
              <Link to='./detail' style={{ textDecoration: "none" }}>
                {/* <Link to={`./detail/${val.id}`}> */}
                <img src={val.imgUrl} alt="img" />
                <p>{val.desc}</p>
              </Link>
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default List
