// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const _=db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  await db.collection("users").where({"openId":wxContext.OPENID}).update({
    data:{
      score:[0,0,0,0,0,0],
      totalScore:0,
      level:1
    }
  })
  return db.collection("users").where({"openId":wxContext.OPENID}).get()
}