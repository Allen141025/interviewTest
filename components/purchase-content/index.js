// components/order-purchase/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commonPurchase: {
      type: Array,
      value: []
    }
  },

  // 监听传入的变量,当传入的值发生变化时,触发方法
  observers: {
    'commonPurchase': function (val) {
      this.setData({
        purchasePrice: val
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    purchasePrice: [],
    commonIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navChangePurchase(e) {
      this.setData({
        commonIndex: e.currentTarget.dataset.index
      })
    }
  }
})
