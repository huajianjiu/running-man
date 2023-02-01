// components/TabList/TabList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTabChange(event) {
      // setTimeout(()=>{
      //   this.selectComponent('#tabs').resize();
      //   console.log(1111111);
      // },3000)
      
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
    },
    onBeforeChange(event) {
      const { callback, title } = event.detail;
      
      wx.showModal({
        title: '异步切换',
        content: `确定要切换至 ${title} tab吗？`,
        success: (res) => {
          if (res.confirm) {
            callback(true)
          } else if (res.cancel) {
            callback(false)
          }
        },
      })
    }
  }
})
