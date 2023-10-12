// pages/formKT/formKT.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/ranking_image/bacground.jpg",
    title_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/ranking_image/title.png",
     iptValue:"",
     listArr:[
      {id:1232345423,title:"666！！"},
      {id:2343423434,title:"咖啡不用冲，迟早会成功"},
      {id:3453455345,title:"谁与争锋"}
     ],
     rankingList:{},
     comment:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    db.collection("ranking").orderBy("score","desc").get().then(res=>{
      console.log(res)
      this.setData({
        rankingList:res.data
      })
    })
    db.collection("comment").get().then(res=>{
      console.log(res)
      this.setData({
        comment:res.data
      })
    })
  },
  updateRanking(){
    wx.showLoading({
      title: '正在更新',
      mask:true,
    })
    db.collection("ranking").orderBy("score","desc").get().then(res=>{
      console.log(res)
      this.setData({
        rankingList:res.data
      })
      wx.hideLoading()
    })
  },

  //点击发布按钮去
  onSubmit(){
    let value = this.data.iptValue
    // let arr = this.data.listArr;
    // arr.push({
    //   id:Date.now(),
    //   title:value
    // })
    // this.setData({
    //   listArr:arr,
    //   iptValue:""
    // })
    db.collection("comment").add({
      data:{
        comment:value
      }
    }).then(res=>{
      wx.showToast({
        title: '发布成功',
        icon:"none"
      })
      db.collection("comment").get().then(res=>{
        console.log(res)
        this.setData({
          comment:res.data,
        })
      })
    })
    this.setData({
      iptValue: ''
    })
  },


  //点击关闭列表按钮
  clickClose(e){
    console.log(e);
    wx.showModal({
      title: '是否确认删除？',
      success:res=>{
        if(res.confirm){
          // db.collection("comment")
        }
      }       
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