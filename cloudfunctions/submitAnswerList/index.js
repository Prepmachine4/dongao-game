// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db=cloud.database()
const _=db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let ansList=event.QAList
  let time=event.time
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

  score=0.8*score+0.2*((50-time)/50)
  
  // 更新个人信息
  if(correct>=4){
    // 大于4个  更新关卡
    await db.collection("users").where({openId:wxContext.OPENID}).update({
      data:{
        level:_.inc(1)
      }
    })
  }
  // 大于当前关分数则更新分数
  if(score>user.score[user.level-1]){
    user.score[user.level-1]=score
    let totalScore=0
    user.score.forEach(ele=>{
      totalScore+=ele
    })
    await db.collection("users").where({"openId":wxContext.OPENID}).update({
      data:{
        score:user.score,
        totalScore:totalScore
      }
    })
  }

  return {
    score:score.toFixed(2),
    correct:correct
  }
}