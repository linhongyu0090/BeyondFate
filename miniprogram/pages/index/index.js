const db = wx.cloud.database()
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:"",
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,

  },
  clickButton(){
    db.collection("list").doc("8de6ebcc652570830652e076200aa5b8").get({
      success:res=>{
        console.log(res);
        this.setData({
          dataObj:res.data.user
        })
      }
    })
  },  

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
   
    this.setData({
      avatarUrl,
    })
    app.globalData.userInfo.avatarUrl = avatarUrl
   
  },
  formSubmit(e){
    console.log(e);
     app.globalData.userInfo.nickName = e.detail.value.nickname
      // wx.switchTab({
      //   url: '/pages/home/index'
      // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.globalData.userInfo) {  
      app.globalData.userInfo = {};  
    } 
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme
      })
    })

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