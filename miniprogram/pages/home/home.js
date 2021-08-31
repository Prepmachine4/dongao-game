Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    userInfo:{},
    dbUserInfo:{},
    
  },
  pageLifetimes:{
    show(){
      this.setData({
        userInfo:wx.getStorageSync('userInfo'),
        dbUserInfo:wx.getStorageSync('dbUserInfo')

      })
      wx.showShareMenu({
        withShareTicket: false,
        menus: ['shareAppMessage', 'shareTimeline']
      })

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
      }
    }
  },
  attached() {
  },
  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
      })
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    showQrcode() {
      wx.previewImage({
        urls: ['https://z3.ax1x.com/2021/08/31/hdNx0S.png'],
        current: 'https://z3.ax1x.com/2021/08/31/hdNx0S.png' // 当前显示图片的http链接      
      })
    },
  }
})