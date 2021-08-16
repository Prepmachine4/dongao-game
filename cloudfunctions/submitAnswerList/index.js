// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db=cloud.database()
const _=db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let ansList=event.QAList
  let score=0
  let correct=0
  let user=(await db.collection("users").where({"openId":wxContext.OPENID}).get()).data[0]
  let res= await db.collection("question_list").where({
    level:user.level
  }).get()
  let origin=res.data[0].QAlist
  ansList.forEach(element => {
    let id=element.id
    let answer=element.answer
    origin.forEach(ele=>{
      if(id==ele.id&&answer==ele.answer){
        // 加分
        score+=10
        correct+=1
      }
    })
  });
  
  // 更新个人信息
  if(correct>=4){
    // 大于4个  更新关卡
    await db.collection("users").where({openId:wxContext.OPENID}).update({
      data:{
        level:_.inc(1)
      }
    })
  }
  // 更新分数
  

  return {
    score:score,
    correct:correct
  }
}