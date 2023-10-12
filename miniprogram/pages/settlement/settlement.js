// pages/information/information.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/background_battle.png",
    settle_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/settlement_image/结  算@3x.png",
    coin_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/settlement_image/图片 3@3x.png",
    icon_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/family.png",
    player_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/player.png",
    total_game_num:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/settlement_image/对战局数@3x.png",
    win_game_num:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/胜局总数@3x.png",
    money_num:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/筹码总数@3x.png",
    user_name_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/梅长苏@3x.png",
    username: "Erlish bBchman",
    battle_num:100,
    victory_num:50,
    chip_num:10000,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      username:"玩家" + String(app.globalData.win_player),
      battle_num:app.globalData.win_play_num,
      victory_num:app.globalData.win_num,
      chip_num:app.globalData.win_money
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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