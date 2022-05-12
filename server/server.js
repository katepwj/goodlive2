
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3001
const cityList = require("./data/cityList");
const searchList = require("./data/searchList")
// const cors = require("cors");
// console.log(cors);
// app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//新商品推荐
app.get("/newproductlist", (req, res, next) => {
  // res.send(cityList)
  res.send("ok")
})

//热门商品推荐
app.get("/hotproductlist", (req, res, next) => {
  // res.send(cityList)
  res.send("ok")
})


//城市列表
app.get("/citylist", (req, res, next) => {
  res.send(cityList)
})

//搜索返回
app.get("/searchlist", (req, res, next) => {
  res.send(searchList)
})








app.listen(port, () =>
  console.log("listen to ", port))








