const db = wx.cloud.database();
Page({
  options: {
    addGlobalClass: true,
  },
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    elements: [{
        title: '知识',
        name: 'study',
        icon: 'zhishi',
        color: 'blue'
      },
      {
        title: '闯关',
        name: 'game',
        icon: 'youxi',
        color: 'cyan'
      },
      {
        title: '排行榜',
        name: 'rank',
        icon: 'paihangbang',
        color: 'red'
      },
      
      {
        title: '图鉴',
        name: 'graph',
        icon: 'tujian',
        color: 'pink'
      },
    ]
  },
  onLoad: function(options) {
    let that=this
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    if(wx.getStorageSync('userInfo')){
      this.setData({hasUserInfo:true,userInfo:wx.getStorageSync('userInfo')})
    }

    // 同步本地和数据库中的userInfo
    if(this.data.hasUserInfo&&!wx.getStorageSync('dbUserInfo').userInfo){
      console.log(111)
      wx.cloud.callFunction({
        name:"updateUserInfo",
        data:{
          userInfo:that.data.userInfo
        },
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善头像和昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.setStorageSync('userInfo', res.userInfo)
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorageSync('userInfo', res.userInfo)
  },
})