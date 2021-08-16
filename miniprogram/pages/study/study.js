Page({
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://pic.dongyingnews.cn/003/000/446/00300044604_6507283e.jpg',
    }, {
      id: 1,
        type: 'image',
        url: 'http://pic.dongyingnews.cn/003/000/446/00300044606_b83eccf7.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://pic.dongyingnews.cn/003/000/446/00300044612_5d8c37cd.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://p0.ssl.img.360kuai.com/t01f2970ccd1e2534ee.webp'
    }, {
      id: 4,
      type: 'image',
      url: 'http://n.sinaimg.cn/sports/transform/203/w641h362/20190224/Uud3-htknpmi3717004.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'http://www.bjwmb.gov.cn/jrrd/qhxw/W020180810499099269835.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'http://www.bjwmb.gov.cn/jrrd/qhxw/W020180810499105551022.jpg'
    }],
  },
  goto(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: './article/article',
    })
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})

const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    })
  },
});
