

import axios from "axios";

const url = {
  baseURL: "http://localhost:3001",
  newProList: "/newproductlist",
  cityList: "/cityList"

}


export default {

  // getNewProList() {
  //   axios.get(`"${url.baseURL}${url.newProList}"`)
  // },


  // getCityList() {
  //   axios.get(url.baseURL + url.cityList)
  // },

  getCityList() {
    console.log(55);
    return axios.get("http://localhost:3001/citylist")
   
  },
}
