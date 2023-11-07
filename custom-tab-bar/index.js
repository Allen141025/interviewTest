// custom-tab-bar/index.js
Component({
  data: {
    selected: 0,
    color: "#BBBBBB",
    selectedColor: "#333333",
    list: [{
        pagePath: "pages/index/index",
        iconPath: "/images/square2.png",
        selectedIconPath: "/images/square.png",
        text: "广场"
      },
      {
        iconPath: "/images/main.png",
        selectedIconPath: "/images/main.png"
      },
      {
        pagePath: "pages/usercenter/index",
        iconPath: "/images/my2.png",
        selectedIconPath: "/images/my.png",
        text: "我的"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const path = e.currentTarget.dataset.path
      wx.switchTab({
        url: `/${path}`
      })
      this.setData({
        selected: e.currentTarget.dataset.index
      })
    }
  }
})