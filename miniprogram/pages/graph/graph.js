// miniprogram/pages/graph/graph.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabList: ["队徽", "百年回望", "逐奥之路", "双奥盛举", "京彩齐聚"],
    TabCur: 0,
    scrollLeft: 0,
    cardCur: 0,
    swiperList: [
      [
        {
          id: 0,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/1.jpg?sign=19c7d680928e2a1dfbb590779f387f23&t=1630162337",
          content:"典雅庄重的小篆\n \
          为冬奥盛事增添底蕴\n\
          飘逸灵动的祥云\n\
          为冰雪赛事增添祝福\n\
          五环与汉字碰撞\n\
          东西方文明在此交汇\n\
          奥运的活泼热情\n\
          东方的古典韵味\n\
          二者相互契合 有机共存\n\
          散落的奥运简标\n\
          展现着体育文化\n\
          表露这奥运精神\n\
          三者共生 和谐共存\n\
          古今相通 东西相融\n"
        },
      ],
      [
        {
          id: 0,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/2.jpg?sign=080c17c4d4f04932f2246be50acb09ac&t=1630162346",
          content:"革命圣火未忘\n\
          南昌起义的枪声，激荡着英勇无畏的信念\n\
          冬奥赛场的冰球，击出了勇敢拼搏的情怀\n\
          曾经的奋斗热血，装点了九州大地\n\
          如今的赤子战衣，矗立在世界东方\n\
          忆往昔，一袭军装，只求国富民强\n\
          看今朝，一身战甲，但求为国争光\n\
          "
        },
        {
          id: 1,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/3.jpg?sign=492490a53e2f12ae29e53bb627de354d&t=1630162354",
          content:"\
          时代辉煌闪耀\n\
          高高矗立的白玉华表\n\
          支撑着中华民族的精神之火\n\
          装点着中华民族的威严形象\n\
          迎风飞扬的五星红旗\n\
          展扬着中国人民的爱国热忱\n\
          激荡着中国人民的无上自豪\n\
          我们身披五星红旗，\n\
          坚守党的领导\n\
          以己为柱\n\
          唯求它永远明亮，永远飘扬\n\
          见证无上的民族辉煌\n\
          "
        },
        {
          id: 2,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/4.jpg?sign=bd202eaae18ca4a09adc5d49f2907184&t=1630162361",
          content:"未来梦想飘扬\n\
          我们在冰上起舞\n\
          脚下划出百年的字样\n\
          我们接过历史的接力棒\n\
          在新的舞台再度启航\n\
          不忘曾经的艰苦卓绝\n\
          不惧未来的雨雪风霜\n\
          在党的领导下\n\
          人民幸福是必然趋向\n\
          国家富强是不变期望\n\
          民族复兴是永恒信仰\n\
          "
        },
        {
          id: 3,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/5.jpg?sign=083c5818ace977ea782d9a6c44bf98a6&t=1630162368",
          content:"舞出民族骄傲\n\
          百年前的碧波荡漾\n\
          承载着中华民族的希望\n\
          一艘小小的红船\n\
          走过了各方的围堵\n\
          保护了革命的心脏\n\
          今朝的蔚蓝冰层\n\
          托举着为国争光的信仰\n\
          一位优雅的运动员\n\
          划过了曾经的艰苦\n\
          舞出了盛世的华章\n\
          穿越历史的长河\n\
          嘉兴南湖的小船蜕变成巨轮模样\n\
          满怀着信心与希望\n\
          高歌猛进 扬帆远航\n\
          "
        },
        {
          id: 4,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/6.jpg?sign=1985ef8eca8dc6c61db13eb7032c7468&t=1630162373",
          content:"划出中国篇章\n\
          速滑场的一骑绝尘\n\
          诠释着中国速度的\n\
          数代人的积累\n\
          见证了弯道超车的\n\
          高举的金色奖牌\n\
          是运动员的荣耀\n\
          亦是民族进步的勋\n\
          天安门城楼\n\
          经过了风刀霜剑 刺骨寒\n\
          迎来了春回大地 鸟语花\n\
          我们手举鲜花 面带微笑\n\
          向过往致敬 向未来问好\n\
          "
        },
      ],
      [
        {
          id: 0,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/7.jpg?sign=74c91d4d6054c893277aefaaa6743c97&t=1630162379",
          content:"首战荣光\n\
          1980年寒冬中的普莱西德湖畔\n\
          各国奥运健儿齐聚一堂\n\
          千人竞技在这里隆重举行\n\
          一支仅有28人的队伍首次参与这中盛赛\n\
          在漫天的飞雪中\n\
          在千人的拥挤中\n\
          这支队伍是如此不起眼\n\
          但他们依旧昂首挺胸\n\
          自信展扬着鲜红的旗帜\n\
          井然有序的列队前行\n\
          大国丰富的经验没有让他们灰心\n\
          异国他乡的寒风无法使他们屈服\n\
          四十一年前曾有人远赴大洋彼岸\n\
          纵使拼尽全力也未能使红旗飘扬\n\
          但他们却带领着五星红旗\n\
          首度进入了冬奥会的赛场\n\
          奖牌熠熠的光辉值得人们记忆\n\
          首度参与的热忱亦须世人铭记\n\
          "
        },
        {
          id: 1,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/8.jpg?sign=2b53c573c82c8090d86369d5964763fd&t=1630162389",
          content:"\
          首金闪耀\n\
          数次参与冬奥会的努力\n\
          皆包含争得金牌的向往\n\
          汗水不会被辜负\n\
          努力从未被遗忘\n\
          灰色的战甲\n\
          潇洒的身姿\n\
          滑动的双脚\n\
          在盐城的冬日构成了首金的图标\n\
          2002年女子短道速滑中\n\
          杨扬为中国夺得了首金\n\
          五星红旗首次在冬奥赛长上飞扬\n\
          这是人民期望的实现\n\
          国家形象的矗立\n\
          民族信心的昂扬\n\
          "
        },
        {
          id: 2,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/9.jpg?sign=564069b3a96a6219ce11c9a1d9befb12&t=1630162394",
          content:"滑雪勋章\n\
          红色的战甲\n\
          优美的身姿\n\
          灵动的滑板\n\
          凌空的飞旋\n\
          2006年男子自由式滑雪中\n\
          韩晓鹏夺得了项目首金\n\
          这是中国滑雪史上的开拓\n\
          推动了冬奥之门的进一步开放\n\
          我们在皑皑白雪中飞扬\n\
          中国红与晶莹雪在阳光下闪耀\n\
          "
        },
        {
          id: 3,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/10.jpg?sign=220eeb6d470e89b0fe7447bf2762f0ea&t=1630162403",
          content:"花滑荣耀\n\
          2010年的温哥华\n\
          一对俊男靓女用自己的优雅吸引了世界的目光 \n\
          自信的笑容\n\
          高超的技巧\n\
          默契的配合\n\
          完美的收放\n\
          尽显中国魅力\n\
          增强民族自豪\n\
          申雪 赵宏博\n\
          中国双人花滑的奠基者\n\
          中国双人花滑的首金者\n\
          为新世纪的冰雪运动\n\
          开创奇迹 增光添彩\n\
          "
        },
        {
          id: 4,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/11.jpg?sign=07f12fcea49c8b6d716880ada8b5c19a&t=1630162424",
          content:"红旗飘扬\n\
          速滑道上的一骑绝尘\n\
          滑雪场上的凌空飞旋\n\
          花滑场上的优美舞蹈\n\
          我们在一次次的努力中收获成长\n\
          一块块金牌因你们而闪耀各方\n\
          每一块金牌都是梦想的实现\n\
          每一次成功都铸成了民族自豪\n\
          五星红旗因你们高高飘扬\n\
          体育强国因你们而逐步构建\n\
          这场奇妙的冰雪之旅\n\
          我们在跌跌撞撞中前行\n\
          败不颓丧 胜不骄躁\n\
          当一个人专注于己时\n\
          他将实现自我的梦想\n\
          而这一个个梦想的点燃\n\
          照亮了民族逐奥的方向\n\
          "
        },
      ],
      [
        {
          id: 0,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/12.jpg?sign=d6385737dc1f65662d3cab99de144b48&t=1630162431",
          content:"双奥剪影\n\
          一张薄纸 一柄剪刀\n\
          我们在纸上剪出自己的奥运剪影\n\
          从“京”到“冬”的变迁\n\
          见证着两个季节的轮换\n\
          联系着两场盛事的传承\n\
          空中的篮球转换为地上的冰球\n\
          流动的水立方成为了凝固的冰立方\n\
          跳台上优美的身姿转变为雪地的飒爽英姿\n\
          夏与冬的轮转，变换的是季节，不变的是热情\n\
          圣火未熄，五环重聚\n\
          双奥之城，京彩有你\n\
          2022，我们再次齐聚\n\
          期许再见你们的传奇\n\
          亦望再现北京的魅力\n\
          "
        },
        {
          id: 1,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/13.jpg?sign=f30a901732cbddcf3556417dcb192d49&t=1630162441",
          content:"京门演进\n\
          “京”的相遇\n\
          昭示着奥运的再临\n\
          小巧真实的“京”字\n\
          是2008年盛事成功举办的积淀与回望\n\
          硕大淡色的“京”字\n\
          是2022年大赛如期筹办的兴奋与期许\n\
          天安门的组合\n\
          见证着时光的交替\n\
          淡雅明亮的城楼\n\
          极具夏日的热情与明亮\n\
          大气浑厚的城楼\n\
          赋有冬日的厚重与气韵\n\
          一枝繁花\n\
          见证了时光流转，四季迁移\n\
          记录了两场盛赛，一国盛世\
          "
        },
        {
          id: 2,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/14.jpg?sign=7ec1b15e7d2f81cdde6ff2707f73d48b&t=1630162446",
          content:"无双盛举\n\
          当冰立方与水立方相遇\n\
          当冬奥会与夏奥会齐聚\n\
          时光流逝 东夏交替\n\
          北京创造了新的传奇\n\
          变换的是季节\n\
          不变的是场地\n\
          夏日的清风里我们曾热情相拥\n\
          冬日的飞雪里我们将再度齐聚\n\
          “双”是双奥之城\n\
          是无双盛举\n\
          我们的热情如翠竹拔节\n\
          我们的热情如翠竹常青\n\
          2022 北京欢迎你\n\
          "
        },
        {
          id: 3,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/15.jpg?sign=ac69eb3056f1c604f3ab40d5d241872c&t=1630162451",
          content:"奥运期许\n\
          2001年首次申奥胜利\n\
          四海誉传  九州同庆\n\
          2008年圣火传递五环升起\n\
          中华儿女举国参与\n\
          2015年再度申奥成功\n\
          奔走相告 普天同庆\n\
          2022年圣火再临五环再聚\n\
          华夏大地再度神起\n\
          同一个平台，同一座城市\n\
          在这里我们见证了中国传奇\n\
          两次申奥，一样的期许\n\
          两场赛事，同样的盛举\n\
          金黄的秋菊传达着最独到的欢迎\n\
          "
        },
        {
          id: 4,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/16.jpg?sign=18e680167f7da8f85077d0367df9ba8c&t=1630162458",
          content:"京彩有你\n\
          舞动的冰鞋\n\
          滑动的雪板\n\
          优雅的动作\n\
          矫健的身姿\n\
          都是精彩瞬间的剪影\n\
          可爱的冰墩墩用微笑\n\
          向世界传达善意与热情\n\
          北京因你们的到来更具魅力\n\
          傲雪独立的寒梅\n\
          见证我们出色的竞技\n\
          寒冬独矗的梅花\n\
          与你我的精神相契\n\
          2022，京彩有你\n\
          "
        },
      ],
      [
        {
          id: 0,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/17.jpg?sign=f66331485b4154aaac5c6cd2af10e087&t=1630162465",
          content:"\
          千年昆曲余韵\n\
          与清澈的蓝色相遇\n\
          蔚蓝的“北”字\n\
          独具北国魅力\n\
          绘就冰雪的纯粹空灵\n\
          "
        },
        {
          id: 1,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/18.jpg?sign=ffa8bb52c67d021ae83463721fea4250&t=1630162471",
          content:"千载经文传唱\n\
          与厚重的黑色相遇\n\
          棕褐的“京”字\n\
          展现中华底蕴\n\
          蕴含文化的厚重大义\n\
          "
        },
        {
          id: 2,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/19.jpg?sign=effbde22a3d39921f0f6b9c086f228f8&t=1630162475",
          content:"传统汉服飘逸\n\
          与激情的红色相遇\n\
          火红的“欢”字\n\
          张扬民族热情\n\
          展现国民的热情善意\n\
          "
        },
        {
          id: 3,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/20.jpg?sign=69978c5b24cd66dad1253f9d1b6d8bf7&t=1630162480",
          content:"数代笔墨传承\n\
          与明烈的黄色相遇\n\
          土黄的“迎”字\n\
          赋有大国的磅礴底气\n\
          "
        },
        {
          id: 4,
          type: "image",
          url: "https://6465-dev-5gb1g863bb2952f3-1306936285.tcb.qcloud.la/images/graph/21.jpg?sign=30bd5580e5e06b5dbdf9abac5f0f3c0f&t=1630162484",
          content:"独特东方舞曲\n\
          与活泼的绿色相遇\n\
          翠绿的“你”字\n\
          包含世界的勃勃生机\n\
          "
        },
      ],
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
      cardCur:0
    });
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
});
