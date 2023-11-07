// pages/purchase/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标签列表
    navList: [{
        title: '按次购买',
        index: 1
      },
      {
        title: '按年月购买',
        index: 2
      },
    ],
    // 被选中的下标
    chosed: 1,
    // 按次买
    orderPurchase: [
      {
        num: "10次",
        preferentialPrice: 5,
        originalPrice: 5,
      },
      {
        num: "20次",
        preferentialPrice: 8,
        originalPrice: 10,
      },
      {
        num: "40次",
        preferentialPrice: 15,
        originalPrice: 20,
      },
    ],
    // 按年月买
    yearPurchase: [
      {
        num: "一个月",
        preferentialPrice: 18,
        originalPrice: 38
      },
      {
        num: "一年",
        preferentialPrice: 128,
        originalPrice: 216
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //导航栏切换事件
  navChange(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      chosed: index,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})