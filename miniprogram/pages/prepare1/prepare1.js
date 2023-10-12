// pages/prepare/perpare.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/background_prepare.png",
    menu_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/family.png",
    enter_num_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/请输入局数@3x.png",
    enter_money_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/请输入筹码数@3x.png",
    cloud_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/cloud.png",
    begin_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/开始游戏@3x.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(getApp().globalData.play_num);
  },

  onInputNum(e){
    var inputValue = e.detail.value
    var num = parseInt(inputValue)
    // console.log(inputValue);
    app.globalData.play_num = num
    console.log(getApp().globalData.play_num);
  },

  onInputMoney(e){
    var inputValue = e.detail.value
    var num = parseInt(inputValue)
    // console.log(inputValue);
    app.globalData.play_money = num
    console.log(getApp().globalData.play_money);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    var date = app.globalData
    console.log(date)
    console.log(date.player_num);
    this.setData({
      set_money:date.play_money,
      total_num:date.play_num
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})