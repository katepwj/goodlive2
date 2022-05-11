import React from 'react';
import styles from './index.module.css';

function Login() {
  return (

    <form
      className={styles.container}
    >
      <div className={styles.row}>
        <i className="icofont-ui-touch-phone"></i>
        <input
          placeholder="用户名/手机号" />
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <i className="icofont-key"></i>
          <input
            placeholder="输入验证码"
          />
        </div>
        <button>
          发送验证码
        </button>

      </div>
      <button className={styles.loginBtn}>
        登录
      </button>
    </form>
  )
}

export default Login
