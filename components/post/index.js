// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
  },


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 回调函数
      // 组件的方法列表
      // 组件的开发者不应该决定
      // 点击之后做什么事情  不应该
      // 组件的使用者  决定
      // 自定义事件
      // 什么是自定义事件呢,你可以简单的理解为:在触发子组件的一些事件的时候,
      // 同时也能触发父组件对应的事件并对父组件中的某些数据进行修改的事件就是自定义事件.
  onTap(event){
    // console.log(event);
    // event:事件对象
    // 页面与页面之间数据通信
    // console.log(event);
    const pid = this.properties.res.postId;
    // wx.navigateTo({
    //   url: '/pages/post-detail/post-detail?pid='+pid,
    // })

    // triggerEvent()之后就会产生我们自己的函数,括号里的名字决定了我们事件的名字叫什么
    // 该函数应用于  采用这个组件的位置
    // 改函数的第二个参数是一个js对象，该对象可以将里面的属性传到使用该方法的外面的组件
    this.triggerEvent('posttap',{
      pid,
    })
  },
  }
})
 