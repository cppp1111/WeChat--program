// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
const app = getApp()
// console.log(app);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null,
    isPlaying:false,
    collected:false,
    _postsCollected:{},
    _mgr:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const postData = postList[options.pid];
    this.data._pid = options.pid
    // 获取数据缓存
    const postsCollected = wx.getStorageSync('posts_collected')
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid]

    if (collected === undefined) {
      // 如果是undefined 说明文章从来没有被收藏过
      collected = false
    }

    // console.log(collected);
    // console.log(postsCollected);
    // this.setData({
    //   collected
    // })
    this.setData({
      postData,
      collected,
      isPlaying : this.currentMusicIsPlaying()
    })
    // 监听后台音乐是否播放
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)
  },

  currentMusicIsPlaying(){
    if (app.gIsPlayingMusic && app.gIsPlayingPostID === this.data._pid) {
      return true
    }
    return false
  },

  onMusicStart(event){
    const mgr = this.data._mgr
    // mgr.onPlay(()=>{
    //   console.log(132);
    // })

    const music =  postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg

    app.gIsPlayingMusic = true
    app.gIsPlayingPostID = this.data._pid

    this.setData({
      isPlaying:true
    })
  },

  onMusicStop(event){
    const mgr = this.data._mgr
    mgr.stop()
    app.gIsPlayingMusic = false
    app.gIsPlayingPostID = -1
    this.setData({
      isPlaying:false
    })
    // 音乐停止显示 start图片
    // 音乐播放显示 stop图片
  },

  async onShare(event){
    const result = wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到朋友圈'],
    })
    console.log(result);
  },

  async onCollect(event){
    // 假设 未收藏 ->收藏
    // 哪篇文章被收藏
    // 数据结构  多篇文章是否被收藏
    const postsCollected = this.data._postsCollected
    // wx.getStorageSync('key')
    postsCollected[this.data._pid] = !this.data.collected
    // this.data.collected=true
    this.setData({
      collected:!this.data.collected
    })
    wx.setStorageSync('posts_collected', postsCollected)
    // 原生组件弹出提醒，也可以用lin-ui组件展示，有更多的功能
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      // 弹出提示的持续时间
      duration:3000
    })

    // 轻提示
    // 模态对话框
    // const result = await wx.showModal({
    //   title:'是否收藏文章',
    // })
    // // console.log(result);
    // if (result.confirm) {
      
    // }


    // {
      // 1:true
      // id : true | false
    // }
    const obj = {
      flag:1
    }
    obj.flag = 2
    // 第二种可以动态访问属性
    obj['flag'] = 2
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})