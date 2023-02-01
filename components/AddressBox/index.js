// components/AddressBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    reverse:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text1:"填写取货地址",
    text2:"填写收货地址",
    info:"填写收货信息",
  },

  observers:{
    reverse(newVal){
      if(newVal){
        this.setData({text2:"填写发货地址"});
        this.setData({info:"填写发货信息"});
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
