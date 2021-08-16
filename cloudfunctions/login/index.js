// 云函数入口文件
// 登录，获取openid查询是否有该用户  有的话返回信息，没有创建
const cloud = require('wx-server-sdk')
cloud.init()
const db=cloud.database()
const _=db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let len=await db.collection("users").where({"openId":wxContext.OPENID}).count()
  if(len.total==0){
    let data={
    openId:wxContext.OPENID,
    userInfo:event.userInfo,
    score:0,
    level:1,
    }
    await db.collection("users").add({data:data})
  }
  let res=await db.collection("users").where({"openId":wxContext.OPENID}).get()
  let rankList=(await db.collection("users").orderBy("score","desc").get()).data
  rankList.forEach((element,index) => {
    if(element.openId==wxContext.OPENID) res.data[0].rank=index+1
  });
  return res;
}