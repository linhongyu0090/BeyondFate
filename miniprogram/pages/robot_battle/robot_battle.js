// pages/double_battle/double_battle.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 从unicloud获取所需的图片
    background_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/background_battle.png",
    title_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/人机对战@1x.png",
    present_num_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/当前局数：@3x.png",
    present_point_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/当前点数@3x.png",
    present_money_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/当前筹码数@3x.png",
    brandtype_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/牌型@3x.png",
    player_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/player.png",
    robot_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/robot.png",
    total_time:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/总倍率@3x.png",
    add_time_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/增加倍率@3x.png",
    time_1_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/1倍@3x.png",
    time_2_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/2倍@3x.png",
    time_3_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/3倍@3x.png",
    line_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/线条 4@3x.png",
    lock_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/锁定@3x.png",
    enemy_dice_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/敌方选定区@3x.png",
    public_dice_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/公共掷投区@3x.png",
    my_dice_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/我方选定区@3x.png",
    throw_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/投掷@3x.png",
    confirm_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/确认@3x.png",
    calculate_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/计算@3x.png",
    cloud1_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/cloud1.png",
    dice_pic:[
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice1.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice2.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice3.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice4.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice5.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice6.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
  ],

    //总局数
    num:0,
    //双方筹码数
    my_chip:1000,
    enemy_chip:1000,
    //是否已经选倍率
    ischoose:false,
    //总倍率
    Magnification:1,
    //双方倍率
    my_Magnification:0,
    enemy_Magnification:0,
    //双方积分记录
    my_integral:0,
    enemy_integral:0,
    // 用来记录当前的局数
    current_num : 1, 
    // dice1~dice5用来存储公共投掷区的骰子
    dice:[1,2,3,4,5],

    // 用来存储公共投掷区的骰子
    pubdice:[
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
    ],

    // 用来判读骰子是否被选中
    my_isSelect:[false, false, false, false, false],
    enemy_isSelect:[false, false, false, false, false],

    // 用来记录选中骰子的个数

    my_selectNum:0,
    enemy_selectNum:0,

    // 用来显示我方选定区的骰子
    mydice:[
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
    ],

    // 用来显示敌方选定区的骰子
    enemydice:[
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
    ],
    //存储双方选定区的骰子
    enemy_dice:[0,0,0,0,0],
    my_dice:[0,0,0,0,0],
    // 用来判断是否对换角色
    changeRole:false,

    // 用来表示按钮显示的文本（投掷和确认）
    buttonText:[
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/投掷@3x.png" ,
      "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/确认@3x.png"
    ],
    isConfirm:false,

    // 用来判断骰子是否被锁定,若被锁定则显示“锁定”，否则不显示
    my_isLock:[false, false, false, false, false],
    enemy_isLock:[false, false, false, false, false],

    // 用来记录自己的牌型 
    myDiceNum:[0, 0, 0, 0, 0],

    // 用来记录敌人的牌型
    enemyDiceNum:[0, 0, 0, 0, 0],

    //双方投掷的次数
    my_throw:0,
    enemy_throw:0,

    cnt : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // let setmoney = this.data.set_money
    // let setnum = this.data.set_num
    let cnt = this.data.cnt
    if(cnt == 0){
      var data = app.globalData
    // console.log(data)
    console.log(data.player_num);
    var play_money = data.play_money
    this.setData({
      // TODO: 修改玩家人数
      num:data.play_num,
      my_chip:play_money,
      enemy_chip:play_money,
      cnt:cnt+1
    })
    }
  },
  countmul(e){
    const ischoose=this.data.ischoose
    let Magnification=this.data.Magnification
    let my_Magnification=e.currentTarget.dataset.index
    if(!ischoose){
      Magnification+=my_Magnification;
    }
    this.setData({
      ischoose:!ischoose,
      Magnification:Magnification,
      my_Magnification:my_Magnification
    })
  },
  change(){
    const pubdice = this.data.pubdice
    const isConfirm = this.data.isConfirm
    const changeRole = this.data.changeRole
    for(let i=0;i<5;i++){
      pubdice[i] = "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png";
    }
    this.setData({
      pubdice:pubdice,
      isConfirm:!isConfirm,
      changeRole:!changeRole
    })
  },
  clickThrow(){
    if(this.data.num<this.data.current_num){
      return;
    }
    const dice_pic = this.data.dice_pic
    let enemy_Magnification=this.data.enemy_Magnification
    const ischoose=this.data.ischoose
    let my_integral=this.data.my_integral
    let enemy_integral=this.data.enemy_integral
    const my_dice=this.data.my_dice
    const changeRole = this.data.changeRole
    const pubdice = this.data.pubdice
    let dice = this.data.dice
    const my_isSelect = this.data.my_isSelect
    const enemy_isSelect = this.data.enemy_isSelect
    const isConfirm = this.data.isConfirm
    const enemy_dice = this.data.enemy_dice
    let enemy_selectNum = this.data.enemy_selectNum
    const enemydice = this.data.enemydice
    let enemy_isLock=this.data.enemy_isLock
    let my_isLock=this.data.my_isLock
    let my_throw=this.data.my_throw
    let enemy_throw=this.data.enemy_throw
    let mydice = this.data.mydice
    let my_selectNum = this.data.my_selectNum
    if(!changeRole){
      my_throw++;
      for(let i = 0; i < 5; i++) {
        if(my_isSelect[i] == false && isConfirm == false) {
          dice[i] = parseInt(Math.random()*6+1);
          // pubdice[i] = `../../static/images/dice${dice[i]}.png`;
          pubdice[i] = dice_pic[dice[i]-1];
          if(my_throw>=3){
            my_isSelect[i]=true;
            my_isLock[i]=true;
            // mydice[my_selectNum] = `../../static/images/dice${dice[i]}.png`;
            mydice[my_selectNum] = dice_pic[dice[i]-1];
            my_dice[my_selectNum]=dice[i];
            my_integral+=dice[i];
            my_selectNum++;
          }
        }
      }
      this.setData({
        my_integral:my_integral,
        enemy_integral:enemy_integral,
        my_throw:my_throw,
        my_isSelect:my_isSelect,
        my_isLock:my_isLock,
        pubdice:pubdice,
        dice:dice,
        isConfirm:!isConfirm,
        mydice:mydice,
        my_selectNum:my_selectNum
      })
    }
    else{
      enemy_throw++;
      var pub=[0,0,0,0,0];
      var k=enemy_selectNum;
      for(let i = 0; i < 5; i++) {
        if(enemy_isSelect[i] == false && isConfirm == false) {
          dice[i] = parseInt(Math.random()*6+1);
          pub[k]=dice[i];
          k++;
          // pubdice[i] = `../../static/images/dice${dice[i]}.png`;
          pubdice[i] = dice_pic[dice[i]-1];
        }
      }
      if(enemy_throw>=3){
        for(let i=0;i<5;i++){
          if(!enemy_isLock[i]){
            enemy_isLock[i]=true;
            enemy_isSelect[i]=true;
            // enemydice[enemy_selectNum] = `../../static/images/dice${dice[i]}.png`;
            enemydice[enemy_selectNum] = dice_pic[dice[i]-1];
            enemy_dice[enemy_selectNum]=dice[i];
            enemy_integral+=dice[i];
            enemy_selectNum++;
          }
        }
      }
      else{
        let select_index=app.robot_decision(enemy_selectNum,enemy_dice,pub);
        for(let i=0;i<5;i++){
          if(select_index[i]!=-1){
            enemy_dice[enemy_selectNum]=pub[select_index[i]];
            enemy_integral+=pub[select_index[i]];
            // enemydice[enemy_selectNum] = `../../static/images/dice${pub[select_index[i]]}.png`;
            enemydice[enemy_selectNum] = dice_pic[pub[select_index[i]]-1];
            enemy_selectNum++;
            for(let j=0;j<5;j++){
              if(pub[select_index[i]]==dice[j]&&!enemy_isLock[j]){
                enemy_isLock[j]=true;
                enemy_isSelect[j]=true;
                break;
              }
            }
          }
        }
        //根据当前情况调用倍率选择函数选择倍率
        enemy_Magnification=app.select_Magnification(my_integral,enemy_integral)
      }
     this.setData({
      Magnification:this.data.Magnification+enemy_Magnification,
      ischoose:!ischoose,
      enemy_integral:enemy_integral,
      my_throw:my_throw,
      enemy_throw:enemy_throw,
      enemy_dice:enemy_dice,
      enemy_isSelect:enemy_isSelect,
      enemy_isLock:enemy_isLock,
      enemy_selectNum:enemy_selectNum,
      enemydice:enemydice,
      pubdice:pubdice,
      dice:dice,
      isConfirm:!isConfirm
    })
    }
  },

  clickReset(){
    const dice_pic = this.data.dice_pic
    let my_chip=this.data.my_chip
    let enemy_chip=this.data.enemy_chip
    const Magnification=this.data.Magnification
    const my_dice=this.data.my_dice
    const enemy_dice=this.data.enemy_dice
    const mydice=this.data.mydice
    const enemydice=this.data.enemydice
    const my_isSelect=this.data.my_isSelect
    const enemy_isSelect=this.data.enemy_isSelect
    let dice=this.data.dice
    let current_num=this.data.current_num
    const pubdice = this.data.pubdice
    const my_isLock = this.data.my_isLock
    const enemy_isLock = this.data.enemy_isLock
    let my_integral=this.data.my_integral
    let enemy_integral=this.data.enemy_integral
    //把当前骰子类型用match_special函数去匹配有特殊奖励分的骰子组合，如果有，当前积分加上奖励分
    my_integral+=app.match_special(my_dice)
    enemy_integral+=app.match_special(enemy_dice)
    var value=Math.abs(my_integral-enemy_integral)*Magnification
    if(my_integral>enemy_integral){
      my_chip=my_chip+value;
      enemy_chip=enemy_chip-value;
    }
    else{
      my_chip=my_chip-value;
      enemy_chip=enemy_chip+value;
    }
    for(let i = 0; i < 5; i++) {
      dice[i]=0;
      pubdice[i] = "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png";
      mydice[i]="https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png";
      enemydice[i]="https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png";
      enemy_isLock[i] = false;
      my_isLock[i] = false;
      my_isSelect[i]=false;
      enemy_isSelect[i]=false;
      my_dice[i]=0;
      enemy_dice[i]=0;
    }
    this.setData({ 
      my_chip:my_chip,
      enemy_chip:enemy_chip,
      my_throw:0,
      enemy_throw:0,
      my_dice:my_dice,
      enemy_dice:enemy_dice,
      mydice:mydice,
      enemydice:enemydice,
      my_selectNum:0,
      enemy_selectNum:0,
      dice:dice,
      current_num:current_num+1, //局数达限需要跳转到结算页面
      my_integral:0,
      enemy_integral:0,
      pubdice:pubdice,
      changeRole:false,
      my_isSelect:my_isSelect,
      enemy_isSelect:enemy_isSelect,
      my_isLock:my_isLock,
      enemy_isLock:enemy_isLock,
      isConfirm:false
    })
  },
  clickdice(e){
    const dice_pic = this.data.dice_pic
    let index=e.currentTarget.dataset.index
    let my_integral=this.data.my_integral
    let my_dice=this.data.my_dice
    const mydice = this.data.mydice
    const dice = this.data.dice
    let my_selectNum = this.data.my_selectNum
    const my_isLock = this.data.my_isLock
    const isConfirm = this.data.isConfirm
    const changeRole = this.data.changeRole
    const my_isSelect = this.data.my_isSelect

    if(my_isLock[index] == false && isConfirm == true) {
      if(changeRole == false) {
        my_isSelect[index] = true;
        // mydice[my_selectNum] = `../../static/images/dice${dice[index]}.png`
        mydice[my_selectNum] = dice_pic[dice[index]-1]
        my_dice[my_selectNum]=dice[index];
        my_integral+=dice[index];
        my_selectNum = my_selectNum + 1
        my_isLock[index] = true
      }
    }
    this.setData({
      my_integral:my_integral,
      my_dice:my_dice,
      mydice:mydice,
      my_selectNum:my_selectNum,
      my_isLock:my_isLock,
      my_isSelect:my_isSelect,
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

// 用于在五个骰子中寻找对子
function findDuplicates(arr) {    
  var counts = {}; // 用于存储元素及其出现的次数    
  var duplicates = []; // 用于存储重复的数字    
    
  for (var i = 0; i < arr.length; i++) {    
    if (counts[arr[i]]) {    
      duplicates.push(arr[i]);    
    } else {    
      counts[arr[i]] = 1;    
    }    
  }    
    
  return duplicates;    
}    
  
// // 示例用法：    
// var arr = [1, 2, 3, 4, 5];    
// var duplicates = findDuplicates(arr);    
// console.log(duplicates); // 输出空数组，因为没有重复的数字    
    
// var arr2 = [1, 2, 3, 2, 5];    
// var duplicates2 = findDuplicates(arr2);    
// console.log(duplicates2); // 输出 [2]，因为数字2重复了