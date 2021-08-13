const db = wx.cloud.database();
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    userName: 'null',
    userClass: 'null',
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
        title: '关于',
        name: 'about',
        icon: 'guanyu',
        color: 'pink'
      },
    ]
  },

  onLoad: function(options) {
    db.collection('userInfo').get({
      success: res => {
        console.log(res)
        this.setData({
          userInfo: res.data[0].userInfo,
          avatarUrl: res.data[0].avatarUrl,
          userName: res.data[0].name,
          userClass: res.data[0]._class,
        })
      }
    })
  },
})