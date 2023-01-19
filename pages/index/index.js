// index.js
// 获取应用实例
const app = getApp()
const computedBehavior = require('miniprogram-computed').behavior

Page({
  behaviors: [computedBehavior],
  data: {
    screenHeight:667,
    isScroll:false,
    navColor:"transparent",
    logoURL:"/asset/icon/white-logo.png",
    position:"安阳师范学院",
    swiperList:['/public/01.jpg','/public/02.jpg'],
    active: 0,
    current:0,
    tabList:['取快递','寄快递','取外卖']
  },
  watch:{
    'isScroll':function(newVal){
      if(newVal===false){
        this.setData({navColor:"transparent"})
        this.setData({logoURL:"/asset/icon/white-logo.png"})
      }else if(newVal===true){
        this.setData({navColor:"#fff"})
        this.setData({logoURL:"/asset/icon/black-logo.png"})
      }
    }
  },
  onChange(event) {
    this.setData({current:event.detail.index})
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.getSystemInfoSync(res=>{
      this.screenHeight = res.screenHeight;
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow(){
    this.getTabBar().setData({active:0})
  },
  onPageScroll(res){
    if(res.scrollTop>160){
      this.setData({isScroll:true})
    }else{
      this.setData({isScroll:false})
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
