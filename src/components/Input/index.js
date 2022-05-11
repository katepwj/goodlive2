import React from 'react';
import styles from './index.module.css';

function Input() {
  return (
    <div className={styles.container}>
      <i className="icofont-search-1"></i>
      <form>
        <input
          type="input"
        />
      </form>
      
    </div>
  )
}

export default Input
