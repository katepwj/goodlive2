import React from 'react'
import styles from './index.module.css';
import TopNav from '../../components/TopNav';
import Carousel from '../../components/Carousel';
import List from '../../components/List';
import BottomNav from '../../components/BottomNav';
import { v4 as uuidv4 } from 'uuid';
function Home() {
  const list1 = [{ id: uuidv4(), desc: "储物柜", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "照明灯", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "抱枕", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "镜子", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }]

  const list2 = [{ id: uuidv4(), desc: "储物柜1", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "照明灯2", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "抱枕3", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }, { id: uuidv4(), desc: "镜子4", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg" }]
  // https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg

  return (
    <div>
      <div 
      // styles={{
      //   overflow: "scroll",
      //   position:"relative"}}
        >

      <TopNav />
      <Carousel />
      <List title={"新品推荐"} list={list1} />
      <List title="热门推荐" list={list2} />
      </div>
      <BottomNav />
    </div>
  )
}

export default Home
