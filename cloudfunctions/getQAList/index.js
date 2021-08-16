// 云函数入口文件
// 随机抽5个
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
const _=db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let user=(await db.collection("users").where({"openId":wxContext.OPENID}).get()).data[0]
  let res= await db.collection("question_list").where({
    level:user.level
  }).get()
   res=res.data[0].QAlist
   res.forEach(element => {
     delete element.answer
   });

  //  抽取，打乱
   shuffle(res)

   return res.slice(0,5);
}

function shuffle(array) {
  var m = array.length,
      t, i;
  while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
}