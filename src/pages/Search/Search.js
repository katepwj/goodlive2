import React from 'react';
import Input from '../../components/Input/index';
import SearchItem from '../../components/SearchItem/SearchItem';
import styles from './index.module.css';


function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="icofont-rounded-left" ></i>
        <Input />
      </div>
      <ul>
        <SearchItem />
      </ul>
    </div>
  )
}

export default Search
