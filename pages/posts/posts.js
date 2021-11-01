// pages/posts/posts.js

// var postData = require("../../data/data.js")
// console.log(postData);

import{postList} from '../../data/data.js'
// console.log(postList);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // 回调函数
  onGoToDetail(event){
    // console.log(event);
    // event:事件对象
    // 页面与页面之间数据通信
    // console.log(event);
    const pid = event.currentTarget.dataset.postId | event.detail.pid
    console.log(pid);

    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid,
    })
    console.log(111);
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数  hook function
   * 顺序
   */
  async onLoad(options) {
    // setData
    // 更新
    // 创建+更新
    console.log("onload");
    
    // 将获得的数组初始化送到post页面上
    // this.setData(content)   是json对象才可以，数组不能这么写
    this.setData({
      posts:postList
    })

    // 异步缓存就是不带Sync的
    // 缓存相当于前端的数据库一样
    // 设置数据缓存
    // wx.setStorageSync('flag', true)
    // 修改数据缓存
    // wx.setStorageSync('flag', false)
    // 删除数据缓存
    // wx.removeStorageSync('flag')
    // 创建新缓存
    // wx.setStorageSync('flag1', 1)
    // 一次性清空所有缓存
    // wx.clearStorageSync();
    // 读取缓存变量
    // const flag = wx.getStorageSync('flag1');
    // console.log(flag);

    wx.setStorageSync('flag', 2)
    // 同步获取缓存
    // const flag = wx.getStorageInfoSync('flag')
    // 异步获取缓存
    const flag = await wx.setStorage({
      key:'flag',
    })
    // flag.then((value)=>{
    //   console.log(value);
    // })

    console.log(flag);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("onready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 条件触发
   */
  onHide: function () {
    // console.log("onhide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("onunload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("onpull");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("onreach");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})