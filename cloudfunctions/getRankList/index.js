// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const _=db.command

// 云函数入口函数
exports.main = async (event, context) => {
  let res= await db.collection("users").orderBy("totalScore","desc").limit(50).get()
  res.data.forEach(ele=>{
    ele.totalScore=ele.totalScore.toFixed(2)
  })
  return res;
}