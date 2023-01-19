// custom-tab-bar/custom-tab-bar.js
Component({
  data: {
    active: 0,
    list:[
      {
        icon:'/asset/icon/index.png',
        iconSelected:'/asset/icon/index-selected.png',
        text:'首页',
        url:'/pages/index/index'
      },
      {
        icon:'/asset/icon/order.png',
        iconSelected:'/asset/icon/order-selected.png',
        text:'订单',
        url:'/pages/order/order'
      },
      {
        icon:'/asset/icon/message.png',
        iconSelected:'/asset/icon/message-selected.png',
        text:'消息',
        url:'/pages/message/message'
      },
      {
        icon:'/asset/icon/my.png',
        iconSelected:'/asset/icon/my-selected.png',
        text:'我的',
        url:'/pages/my/my'
      },
    ]
  },
  methods:{
    onChange(event) {
      wx.switchTab({
        url: this.data.list[event.detail].url
      })
    }
  }
});