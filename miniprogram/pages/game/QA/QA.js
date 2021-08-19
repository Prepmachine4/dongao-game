// pages/game/QA/QA.js
// 接受2个参数 level:闯关数 QAindex:第几题

Page({
  options: {
    multipleSlots: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    dbUserInfo:{},
    QAList:[],
    QAindex:0,
    ansIndex:-1,
    ansList:[],
    // 倒计时样式
    value: 0,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
    timerNumber:null,
    hasCommit:false,
    modalShow:false
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
      dbUserInfo:wx.getStorageSync('dbUserInfo'),
      QAList:wx.getStorageSync('QAList'),
      level:Number(options.level),
      QAindex:Number(options.QAindex),
      ansList:[]
    })

    // 加载获取题目数据
    wx.cloud.callFunction({
      name:"getQAList"
    }).then((res)=>{
      that.setData({QAList:res.result})
      //所有页面加载完毕 开启倒计时旋转框监听
      let addValue= function(){
        that.setData({value:that.data.value+10})
      } 
      that.setData({
        timerNumber:setInterval(addValue,1000)
      })
      let countDown=that.selectComponent('.control-count-down');
      countDown.start();
    })
  },
  // 自定义函数
  finished(e){
    this.goToNextQuestion()
  },
  goToNextQuestion(){
    clearInterval(this.data.timerNumber)
    var that=this
    // 保存结果
    this.data.ansList.push(this.data.ansIndex.value)
    // 不提交
    if(this.data.QAindex<4){
      // 局部刷新
      that.setData({
        QAindex:that.data.QAindex+1,
        value:0
      })

      //所有页面加载完毕 开启倒计时旋转框监听
      let addValue= function(){
        that.setData({value:that.data.value+10})
      }
      that.setData({
        timerNumber:setInterval(addValue,1000)
      })
      const countDown = this.selectComponent('.control-count-down');
      countDown.reset()
      countDown.start()

    }
    //提交结果 数据校验等待3秒后返回
    else{
      this.setData({
        hasCommit:true
      })
      //ansList 插回
      that.data.QAList.forEach((item,i)=>{
        item.answer=that.data.ansList[i]
      })
      wx.showToast({
        icon:"loading",
        title: '提交数据中',
        duration:5000,
      })
      wx.cloud.callFunction({
        name:'submitAnswerList',
        data:{
          level:that.data.level,
          QAList:that.data.QAList
        }
      }).then((res)=>{
        wx.hideToast({
          success: (t) => {
            // 显示答题情况
            console.log("积分",res.result)
            that.setData({dbResData:res.result,modalShow:true})
            
          },
        })
      })
    }
  },
  hideModal(e){
    // 用户点击确定
    wx.navigateTo({
      url: `../game`,
    })
  },
  changeSelect(e){
    let index=e.detail
    this.setData({
      ansIndex:index
    })
  }
})