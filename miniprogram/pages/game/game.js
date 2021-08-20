// 每次onshow这个页面需要更新用户信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    var that=this
    // 获取新的用户信息
    wx.cloud.callFunction({name:"login",data:{userInfo:wx.getStorageSync('userInfo')}}).then(
      (res)=>{
        let data=res.result.data[0]
        wx.setStorageSync('dbUserInfo', data)
        that.setData({
          userInfo:wx.getStorageSync('userInfo'),
          dbUserInfo:wx.getStorageSync('dbUserInfo'),
        })
        // 全部通关
        if(that.data.dbUserInfo.level==7){
          wx.showToast({
            title: '已全部通关',
            icon:"success",
            duration:3000
          })
        }
        else{
          wx.showToast({
            title: '即将挑战第'+that.data.dbUserInfo.level+'关',
          })
        }
        
      }
    )

    

    // 渲染页面

  },
  goQA(e){
    let level=e.currentTarget.dataset.id
    let anslist=JSON.stringify([])
    wx.navigateTo({
      url: `QA/QA?level=${level}&QAindex=${0}&ansList=${anslist}`,
    })
  }
})