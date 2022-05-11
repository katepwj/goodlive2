import React from 'react';
import Carousel from '../../components/Carousel';
// import Header from '../../components/Title/Header';
import Header from '../../components/Header/Header';
import Comment from '../../components/Comment/Comment';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css';

function Detail() {
  // const data = [
  //   {
  //     id: uuidv4(),
  //     title: "豪宅1居室",
  //     houseType: "17/19 270m",
  //     price: "110000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅2居室",
  //     houseType: "17/19 270m",
  //     price: "120000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅3居室",
  //     houseType: "17/19 270m",
  //     price: "130000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅4居室",
  //     houseType: "17/19 270m",
  //     price: "140000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅5居室",
  //     houseType: "17/19 270m",
  //     price: "150000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅6居室",
  //     houseType: "17/19 270m",
  //     price: "160000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  //   {
  //     id: uuidv4(),
  //     title: "豪宅7居室",
  //     houseType: "17/19 270m",
  //     price: "170000",
  //     rentType: "整租",
  //     img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  //   },
  // ]

  const detail = {
    id: uuidv4(),
    title: "豪宅1居室",
    houseType: "17/19 270m",
    price: "110000",
    rentType: "整租",
    img: "https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png"
  }
  return (
    <div >
      <Header title={"详情页"} />
      <Carousel />
      <div className={styles.container}>
        <div className={styles.btn}>
          <button>
            房屋信息
          </button>
          <button>
            房屋评价
          </button>
        </div>

        <h3>豪宅*使馆壹号-南</h3>
        <div className={styles.descTop}>
          <div>
            <p>130000/月</p>
            <p>租金</p>
          </div>
          <div>
            <p>4室一厅</p>
            <p>房型</p>
          </div>
          <div>
            <p>100m</p>
            <p>面积</p>
          </div>
        </div>

        <div className={styles.descBtm}>
          <div className={styles.left}>
            <p>楼层：17/19层</p>
            <p>类型：4室一厅</p>
            <p>年代 ：2002年</p>
          </div>
          <div className={styles.right}>
            <p>装修：精装修</p>
            <p>朝向： 朝南</p>
          </div>
        </div>

      </div>
      <div className={styles.btnBtm}>
        <button>收藏</button>
        <button>购买</button>

      </div>
      <div>
        <Comment />
     

      </div>
    </div>
  )
}

export default Detail
