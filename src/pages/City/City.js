import React, { useState, useEffect } from 'react';
// import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import api from '../../api/index'
import styles from './index.module.css';

function City() {
  // console.log(api.getCityList)
  api.getCityList().then(()=>console.log(1)).catch(()=>console.log(2))
  // useEffect(() => {
  //   api.getCityList().then(()=>console.log(1)).catch(err=>console.log(err))
    
  // }, [])
  const cityList = ["北京", "上海", "成都", "杭州", "南京", "重庆", "三亚", "海口", "深圳", "遂宁", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "北京2", "上海2", "成都2", "杭州2", "南京2", "重庆2", "三亚2", "海口2",]
  return (
    <div >
      <Header title={"城市选择"} />
      <div className={styles.container}>
        <h2 style={{ textAlign: "center" }}>当前城市：<span>XX</span></h2>
        <h3>热门城市</h3>
        <br />
        {cityList.map((val, index) => {
          return (
            <p
              key={index}
            //  onClick={()=>console.log(val)}
            >
              {val}
            </p>)
        })}

      </div>

    </div>
  )
}

export default City
