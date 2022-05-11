import React from 'react'
import styles from './index.module.css';

function Header(props) {
  const { title } = props
  const handleClick = () => {
    window.history.back()
  }

  return (
    <div className={styles.container}>
      <i className="icofont-rounded-left " 
      onClick={handleClick}>
      </i>
      <span>{title}</span>
    </div>
  )
}

export default Header


