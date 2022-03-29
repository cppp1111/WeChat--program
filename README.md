# WeChat--program
“电影-阅读”微信小程序

### 这是一个比较简单的微信小程序，作为自己学习开发作用，需要的同学可以自行下载

* 注意事项：
* 1.由于小程序的平台计划从2022年2月21日24时起回收通过<open-data>展示个人信息的能力，若小程序需收集用户昵称头像等信息，可以通过头像昵称填写功能功能进行收集保护协议更新了，现在只能得到灰色头像和微信用户了，所以欢迎页面只能显示灰色头像
* 2.由于做这个小程序的时间较早，现在一些API的接口已经用不了了，所以可能出现显示不全的现象，如果需要的话也可以自行去查找可用的API
* 3.因为这个项目是写完再传到github上，所以只有一个主分支
  
### 目录结构
```
├─.gitignore                    //忽略的文件列表
├─app.js                        //程序入口文件
├─app.json                      //程序全局配置
├─app.wxss                      //小程序主样式表文件
├─package.json                  
├─project.config.json
├─project.private.config.json
├─README.md
├─sitemap.json
├─utils
|   └util.js
├─pages                    //小程序页面
|   ├─welcome              //欢迎页面（也就是最开始进入的页面）
|   ├─posts                //发布页面（阅读页面）
|   ├─post-detail          //阅读详细页面
|   ├─movies               //电影页面
|   ├─movie-detail         //电影详细页面
|   ├─more-movie           //更多电影页面
├─images                   //存放项目图片
|   ├─icon                 //图标
|   |  ├─fenxiang.png      //分享的图标
|   |  ├─music-start.png   //音乐开始的图标
|   |  ├─shuqian.png       //书签的图标
|   |  ├─unfenxiang.png    //灰色的分享图标
|   |  ├─unshuqian.png     //灰色的书签图标
|   |  ├─暂停.png        //音乐暂停的图标
|   |  ├─电影 (1).png    //下面任务栏电影的图标备用
|   |  ├─电影.png        //下面任务栏电影的图标
|   |  ├─阅读 (1).png    //下面任务栏阅读的图标备用
|   |  └阅读.png         //下面任务栏阅读的图标备用
├─data                   //数据存储
|  └data.js              //前端显示的一些数据
├─components             //组件
|     ├─post             //首页发布的组件
|     ├─movie-list       //电影列表的组件
|     ├─movie            //电影组件
```
  
### 小程序环境搭建与开发工具介绍
  1. 下载并安装微信开发者工具
  2. 申请appid
  3. 开发实时编译：yarn  dev / npm run dev
  4. 新版小程序务必勾选“不校验合法域名、TLS、HTTPS”（在右上角详情本地设置里头）

### 部分项目截图
  
![欢迎页面](https://user-images.githubusercontent.com/91047039/160526679-a8e52745-2839-461d-a23d-12c3140c772a.png)
![电影页面](https://user-images.githubusercontent.com/91047039/160526743-f45b100f-e946-44b1-ba2b-f239105de411.png)
![阅读页面](https://user-images.githubusercontent.com/91047039/160526744-cb0f9cd7-9276-4724-8322-0ae7dfbd8f47.png)
![电影详情页面](https://user-images.githubusercontent.com/91047039/160526739-02adcc03-da52-48bb-93be-c60d4a3c0256.png)
![电影页面子栏目](https://user-images.githubusercontent.com/91047039/160526742-5cc88627-9f5a-4988-a507-439bff7b37b4.png)
![阅读子页面](https://user-images.githubusercontent.com/91047039/160526741-d8b7f145-bf9f-4c1b-9bb7-06d57041d239.png)
![阅读子页面可以播放音乐](https://user-images.githubusercontent.com/91047039/160526740-6933ac64-4eea-4209-814f-de80069e8ac8.png)
