// 每次onshow这个页面需要更新用户信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '第一关',
        activeIcon: 'location-o'

      },
      {
        text: '第二关',
        activeIcon: 'location-o'
      },
      {
        text: '第三关',
        activeIcon: 'location-o'
      },
      {
        text: '第四关',
        activeIcon: 'location-o'
      },
      {
        text: '第五关',
        activeIcon: 'location-o'
      },
      {
        text: '第六关',
        activeIcon: 'location-o'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    // 检查授权
    if(!wx.getStorageSync('userInfo')){
      wx.showToast({
        title: '请授权个人信息',
        icon:'error',
        duration:3000,
        success:()=>{
          setTimeout(()=>{
            wx.switchTab({
              url: '../index/index',
            })
          },3000)
        }
      })
      return;
    }

    // 第一次进游戏，展示规则
    


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