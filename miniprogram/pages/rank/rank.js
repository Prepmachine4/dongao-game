// pages/rankList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:[],
    loadModal:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let that=this
    wx.cloud.callFunction({
      name:"getRankList",
    }).then((res)=>{
      let rankList=res.result.data
      that.setData({
        rankList:rankList,
        loadModal:false
      })
    
    })
  },

})