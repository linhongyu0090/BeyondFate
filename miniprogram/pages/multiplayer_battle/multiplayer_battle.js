// pages/double_battle/double_battle.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 从unicloud获取所需的图片
    background_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/background_battle.png",
    title_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/多人对战@3x.png",
    present_num_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/当前局数：@3x.png",
    public_dice_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/公共掷投区@3x.png",
    my_dice_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/选定区@3x.png",
    lock_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/锁定@3x.png",
    line_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/线条 4@3x.png",
    total_time:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/总倍率@3x.png",
    add_time_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/增加倍率@3x.png",
    time_1_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/1倍@3x.png",
    time_2_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/2倍@3x.png",
    time_3_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/3倍@3x.png",
    cloud1_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/cloud1.png",
    throw_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/投掷@3x.png",
    confirm_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/确认@3x.png",
    calculate_pic:"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/计算@3x.png",
    dice_pic:[
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice1.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice2.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice3.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice4.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice5.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice6.png",
    "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
  ],

    // 用来记录准备页面传递过来的游戏局数
    set_player_num:2,

    // 用来记录玩家的个数
    player_num : 3,

    // 用来记录准备页面传递过来的游戏局数,默认值为3
    set_num:3,

    // 用来记录当前的局数
    current_num : 1, 

    // 用来记录总局数，默认为3
    total_num:3,

    // 用来记录当前是某一局的第几轮
    turn_num:0,

    // 用来记录当前的玩家
    current_player : 0,

    // 用来记录某个玩家的投掷次数
    throwTimes:[],

    // dice1~dice5用来存储锁定的骰子
    dice:[],

    // 用来存储公共投掷区的骰子
    pubdice:[],

    // 用来判读骰子是否被选中
    isSelect:[],

    // 用来记录选中骰子的个数
    selectNum:[],

    // 用来显示我方选定区的骰子
    mydice:[],

    // 用来表示按钮显示的文本（投掷和确认）
    buttonText:["https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/投掷@3x.png" ,"https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/确认@3x.png" ],
    isConfirm:false,

    // 用来判断骰子是否被锁定,若被锁定则显示“锁定”，否则不显示
    isLock:[],

    // 用来记录自己的牌型 
    myDiceNum:[],

    // 用来记录全部玩家的牌型
    brandTypes:[],


    // 用来记录全部玩家的积分
    points:[],

    win_num:[],

    // 用来记录最大的一个玩家的积分
    maxPoint:0,

    // 用来记录最大的一个玩家的下标
    maxIndex:0,

    // 用来记录准备页面传过来的筹码,默认值为1000
    set_money:1000,

    // 用来记录全部玩家的筹码
    money:[],
    // money:[app.globalData.play_money,app.globalData.play_money,app.globalData.play_money,app.globalData.play_money,app.globalData.play_money,app.globalData.play_money],

    // 用来记录总倍率
    totalTime:1,

    // 用来记录玩家本轮是否增加过倍率
    isAddTime:[],

    // 用来判断玩家本局是否计算过牌型和积分
    isCalculate:[],

    win_player:"",

    win_play_num:0,

    win_num:[],

    win_money:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init_prepare()
    this.init()
  },

  init_prepare(){
    // let setmoney = this.data.set_money
    // let setnum = this.data.set_num
    var date = app.globalData
    console.log(date)
    console.log(date.player_num);
    this.setData({
      // TODO: 修改玩家人数
      player_num:date.player_num,
      set_money:date.play_money,
      total_num:date.play_num
    })
  },



  init(){
    const dice_pic = this.data.dice_pic
    const player_num = this.data.player_num
    let dice = this.data.dice
    let pubdice = this.data.pubdice
    let isSelect = this.data.isSelect
    let selectNum = this.data.selectNum
    let mydice = this.data.mydice
    let isLock = this.data.isLock
    let myDiceNum = this.data.myDiceNum
    let points = this.data.points
    let money = this.data.money
    const set_money = this.data.set_money
    let brandTypes = this.data.brandTypes
    let throwTimes = this.data.throwTimes
    let current_num = this.data.current_num
    let isAddTime = this.data.isAddTime
    let isCalculate = this.data.isCalculate
    let win_num = this.data.win_num

    for(let i = 0; i < player_num; i++) {
      dice.push([1,2,3,4,5]);
      pubdice.push([
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
      ]);
      isSelect.push([false, false, false, false, false]);
      selectNum.push(0);
      mydice.push([
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png",
        "https://mp-28289c64-2f79-43ae-9504-4d243c590864.cdn.bspapp.com/image/dice7.png"
      ]);
      isLock.push([false, false, false, false, false]);
      myDiceNum.push([0, 0, 0, 0, 0]),
      points.push(0),
      money.push(set_money),
      brandTypes.push("暂无"),
      throwTimes.push(0),
      isAddTime.push([false,false]),
      isCalculate.push(false),
      win_num.push(0)
    }
    this.setData({
      dice:dice,
      pubdice:pubdice,
      isSelect:isSelect,
      selectNum:selectNum,
      mydice:mydice,
      isLock:isLock,
      myDiceNum:myDiceNum,
      points:points,
      money:money,
      brandTypes:brandTypes,
      throwTimes:throwTimes,
      current_num:current_num,
      isCalculate:isCalculate,
      win_num:win_num
    })
  },

  clickThrow(){
    const dice_pic = this.data.dice_pic
    const player_num = this.data.player_num
    const pubdice = this.data.pubdice
    const dice = this.data.dice
    const isSelect = this.data.isSelect
    const isConfirm = this.data.isConfirm
    let throwTimes = this.data.throwTimes
    const isLock = this.data.isLock
    const mydice = this.data.mydice
    let selectNum = this.data.selectNum
    let myDiceNum = this.data.myDiceNum
    let isAddTime = this.data.isAddTime
    let current_player = this.data.current_player
    let current_num = this.data.current_num
    let turn_num = this.data.turn_num

    if(isConfirm == true) {
      throwTimes[current_player] += 1;
    }

    
    // // 每按一次投掷和确认玩家的索引就加1,当索引值为6说明一轮投掷结束则进行下一轮
    if(isConfirm == true) {
      if(throwTimes[current_player] != 3) {
        current_player += 1
      }
      if(current_player == player_num) {
        current_player %= player_num
        turn_num += 1
      }
    }

    // 如果公共投掷区的骰子还有没有被锁定的，则随机生成未被锁定的骰子（在按钮的状态为投掷的情况下）
    for(let i = 0; i < 5; i++) {
      if(isSelect[current_player][i] == false && isConfirm == false) {
        // 随机生成未被锁定的骰子
        dice[current_player][i] = parseInt(Math.random()*6+1);
        // 设置公共投掷区骰子的图片
        // pubdice[current_player][i] = `../../static/images/dice${dice[current_player][i]}.png`;
        pubdice[current_player][i] = dice_pic[dice[current_player][i]-1];
      }
    }

    // 如果当前按钮的状态为确认
    if(isConfirm == true) {
      // throwTimes[current_player] += 1;
      // 如果某个玩家的投掷次数为3，则自动将其锁定剩下未锁定的骰子
      if(throwTimes[current_player] == 3) {
        for(var i = 0; i < 5; i++) {
          if(isLock[current_player][i] == false) {
            isLock[current_player][i] = true;
            // mydice[current_player][i] = `../../static/images/dice${dice[current_player][i]}.png`;
            mydice[current_player][i] = dice_pic[dice[current_player][i]-1];
            myDiceNum[current_player][i] = dice[current_player][i]
            selectNum[current_player] = selectNum[current_player] + 1;
            // setTimeout(function() {  
            // }, 1000);  
          }
        }
        throwTimes[current_player] %= 3
      }
      // isAddTime = false
    }

    // console.log("投掷次数：");
    console.log(throwTimes);


    this.setData({
      pubdice:pubdice,
      dice:dice,
      isSelect:isSelect,
      isConfirm:!isConfirm,
      throwTimes:throwTimes,
      isLock:isLock,
      mydice:mydice,
      selectNum:selectNum,
      myDiceNum:myDiceNum,
      isAddTime:isAddTime,
      current_player:current_player,
      current_num:current_num,
      turn_num:turn_num
    })

  },

  clickReset(){
    const dice_pic = this.data.dice_pic
    const pubdice = this.data.pubdice
    const isLock = this.data.isLock
    const isSelect = this.data.isSelect
    const mydice = this.data.mydice
    const myDiceNum = this.data.myDiceNum
    let current_num = this.data.current_num
    let points = this.data.points
    let lastPoint = this.data.lastPoint
    const player_num = this.data.player_num
    let totalTime = this.data.totalTime
    let maxPoint = this.data.maxPoint
    let maxIndex = this.data.maxIndex
    let money = this.data.money
    let throwTimes = this.data.throwTimes
    let current_player = this.data.current_player
    let selectNum = this.data.selectNum
    let brandTypes = this.data.brandTypes
    let turn_num = this.data.turn_num
    let isCalculate = this.data.isCalculate
    let total_num = this.data.total_num
    let win_num = this.data.win_num

    if(isCalculate[current_player] == false) {
      // 计算上一个玩家的积分和牌型
      lastPoint = brandPoint(myDiceNum[current_player])
      let point = 0;
      for(let i = 0; i < 5; i++) {
        point += myDiceNum[current_player][i]
      }
      points[current_player] += point

      var lastType = brandType(myDiceNum[current_player])
      brandTypes[current_player] = lastType

      // 将当前玩家的是否计算过属性设置为true
      isCalculate[current_player] = true
    }




    // 如果是某一局的第三轮，则进行结算
    if(turn_num == 2 && current_player == player_num - 1) {
      for(let i = 0; i < player_num; i++){
        if(points[i] > maxPoint) {
          maxPoint = points[i];
          maxIndex = i
        }
      }
      for(let i = 0; i < player_num; i++) {
        if(i != maxIndex) {
          money[i] -= totalTime * (maxPoint - points[i])
        }else {
          for(let j = 0; j < player_num; j++) {
            if(j != maxIndex) {
              money[i] += totalTime * (maxPoint - points[j])
            }
          }
        }
      }
      win_num[maxIndex] + 1;

      totalTime=1
      turn_num=0
      current_num+=1

      // 当一个玩家锁定的骰子个数为5时，将公共投掷区和选定区初始化
      for(var i = 0; i < player_num; i++) {
        for(var j = 0;j < 5; j++) {
          // pubdice[i][j] = `../../static/images/dice7.png`;
          pubdice[i][j] = dice_pic[6];
          // mydice[i][j] = `../../static/images/dice7.png`;
          mydice[i][j] = dice_pic[6];
          isSelect[i][j] = false;
          isLock[i][j] = false;
        }
        selectNum[i] = 0
        throwTimes[i] = 0
        points[i] = 0;
        brandTypes[i] = "暂无"
      }
      
      wx.showToast({
        title: '本轮对战结束！',
        icon:'success',
        duration:2000,
        mask:true
      })
    }


    this.setData({
      pubdice:pubdice,
      selectNum:selectNum,
      isLock:isLock,
      isSelect:isSelect,
      isConfirm:false,
      mydice:mydice,
      current_num:current_num,
      points:points,
      money:money,
      maxPoint:maxPoint,
      maxIndex:maxIndex,
      totalTime:totalTime,
      throwTimes:throwTimes,
      current_player:(current_player + 1)%player_num,
      brandTypes:brandTypes,
      turn_num:turn_num,
      win_num:win_num
    })
  },

  clickDice(e){
    const dice_pic = this.data.dice_pic
    const isSelect = this.data.isSelect
    const mydice = this.data.mydice
    const dice = this.data.dice
    let selectNum = this.data.selectNum
    const isLock = this.data.isLock
    const isConfirm = this.data.isConfirm
    const myDiceNum = this.data.myDiceNum
    const current_player = this.data.current_player

    // console.log(e);
    var index = e.currentTarget.dataset.index; //获取当前点击的索引  
    console.log(index); 

    if(isLock[current_player][index] == false && isConfirm == true) {
      isSelect[current_player][index] = true;
      // mydice[current_player][selectNum[current_player]] = `../../static/images/dice${dice[current_player][index]}.png`
      mydice[current_player][selectNum[current_player]] = dice_pic[dice[current_player][index]-1]
      myDiceNum[current_player][selectNum[current_player]] = dice[current_player][index]
      isLock[current_player][index] = true 
      selectNum[current_player] = selectNum[current_player] + 1
    }
    this.setData({
      isSelect:isSelect,
      mydice:mydice,
      selectNum:selectNum,
      isLock:isLock,
      myDiceNum:myDiceNum,
    })
    // console.log(selectNum);
  },

  clickTime1(){
    const dice_pic = this.data.dice_pic
    let totalTime = this.data.totalTime
    const current_num = this.data.current_num
    const player_num = this.data.player_num
    const throwTimes = this.data.throwTimes
    let isAddTime = this.data.isAddTime
    const current_player = this.data.current_player
    const turn_num = this.data.turn_num
    if((throwTimes[current_player] % 3 == 0 || throwTimes[current_player] % 3 == 1) && isAddTime[current_player][turn_num] == false) {
      totalTime += 1
      isAddTime[current_player][turn_num] = true 
    }
    this.setData({
      totalTime:totalTime,
      isAddTime:isAddTime
    })
  },

  clickTime2(){
    const dice_pic = this.data.dice_pic
    let totalTime = this.data.totalTime
    const current_num = this.data.current_num
    const player_num = this.data.player_num
    const throwTimes = this.data.throwTimes
    let isAddTime = this.data.isAddTime
    const current_player = this.data.current_player
    const turn_num = this.data.turn_num
    if((throwTimes[current_player] % 3 == 0 || throwTimes[current_player] % 3 == 1) && isAddTime[current_player][turn_num] == false) {
      totalTime += 2
      isAddTime[current_player][turn_num] = true 
    }
    this.setData({
      totalTime:totalTime,
      isAddTime:isAddTime
    })
  },

  clickTime3(){
    const dice_pic = this.data.dice_pic
    let totalTime = this.data.totalTime
    const current_num = this.data.current_num
    const player_num = this.data.player_num
    const throwTimes = this.data.throwTimes
    let isAddTime = this.data.isAddTime
    const current_player = this.data.current_player
    const turn_num = this.data.turn_num
    if((throwTimes[current_player] % 3 == 0 || throwTimes[current_player] % 3 == 1) && isAddTime[current_player][turn_num] == false) {
      totalTime += 3
      isAddTime[current_player][turn_num] = true 
    }
    this.setData({
      totalTime:totalTime,
      isAddTime:isAddTime
    })
  },

  game_settle(){

  },

  clickSettle(){
    let maxIndex = this.data.maxIndex
    var date = app.globalData
    const dice_pic = this.data.dice_pic
    const player_num = this.data.player_num
    let dice = this.data.dice
    let pubdice = this.data.pubdice
    let isSelect = this.data.isSelect
    let selectNum = this.data.selectNum
    let mydice = this.data.mydice
    let isLock = this.data.isLock
    let myDiceNum = this.data.myDiceNum
    let points = this.data.points
    let money = this.data.money
    const set_money = this.data.set_money
    let brandTypes = this.data.brandTypes
    let throwTimes = this.data.throwTimes
    let current_num = this.data.current_num
    let isAddTime = this.data.isAddTime
    let isCalculate = this.data.isCalculate
    let win_num = this.data.win_num

    var max_player = ""
    var max_play_num = 0
    var max_num = 0
    var max_win_money = 0

    for(var i = 0; i < player_num; i++) {
      if(money[i] > max_win_money) {
        max_win_money = money[i]
        max_player = i
      }
    }
    max_play_num = total_num

   app.globalData.win_player = String(maxIndex + 1)
   app.globalData.win_play_num = total_num
   app.globalData.win_num = win_num[max_play_num]
   app.globalData.win_money = money[max_play_num]
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
function brandType(arr) {    
  var counts = {}; // 用于存储元素及其出现的次数    
  var duplicates = []; // 用于存储重复的数字    
  var maxTimes = 0;
  var type = ""
    
  for (var i = 0; i < arr.length; i++) {    
    if (counts[arr[i]]) {    
      if(counts[arr[i]] == 1) {
        duplicates.push(arr[i]); 
      }  
      counts[arr[i]]++; 
    } else {    
      counts[arr[i]] = 1;    
    }    
  }    
  
  for(var i = 0; i < duplicates.length; i++) {
    if(counts[duplicates[i]] > maxTimes) {
      maxTimes = counts[duplicates[i]];
    }
  }
  if(maxTimes == 2 && duplicates.length == 2) {
    type = "双对"
  }else if(maxTimes == 3 && duplicates.length == 2) {
    type = "葫芦"
  }else if(maxTimes == 3 && duplicates.length == 1) {
    type = "三连"
  }else if(maxTimes == 4 && duplicates.length == 1) {
    type = "四连"
  }else if(maxTimes == 5 && duplicates.length == 1) {
    type = "五连"
  }else if(maxTimes == 0 && isConsecutive(arr) == false) {
    type = "小顺子"
  }else if(maxTimes == 0 && isConsecutive(arr) == true) {
    type = "大顺子"
  } 


  console.log(maxTimes)
  if(type == "") {
    type = "暂无"
  }
  return type;    
}    

function brandPoint(arr) {    
  var counts = {}; // 用于存储元素及其出现的次数    
  var duplicates = []; // 用于存储重复的数字    
  var maxTimes = 0;
  var lastPoint = 0
    
  for (var i = 0; i < arr.length; i++) {    
    if (counts[arr[i]]) {    
      if(counts[arr[i]] == 1) {
        duplicates.push(arr[i]); 
      }  
      counts[arr[i]]++; 
    } else {    
      counts[arr[i]] = 1;    
    }    
  }    
  
  for(var i = 0; i < duplicates.length; i++) {
    if(counts[duplicates[i]] > maxTimes) {
      maxTimes = counts[duplicates[i]];
    }
  }
  if(maxTimes == 2 && duplicates.length == 2) {
    lastPoint = 10
  }else if(maxTimes == 3 && duplicates.length == 2) {
    lastPoint = 20
  }else if(maxTimes == 3 && duplicates.length == 1) {
    lastPoint = 10
  }else if(maxTimes == 4 && duplicates.length == 1) {
    lastPoint = 40
  }else if(maxTimes == 5 && duplicates.length == 1) {
    lastPoint = 100
  }else if(maxTimes == 0 && isConsecutive(arr) == false) {
    lastPoint = 30
  }else if(maxTimes == 0 && isConsecutive(arr) == true) {
    lastPoint = 60

  } 


  console.log(maxTimes)
  return lastPoint;    
}    


function isConsecutive(arr) {  
  // 对数组进行排序  
  arr.sort((a, b) => a - b);  

  // 检查数组中的每个元素是否比前一个元素大1  
  for(let i = 1; i < arr.length; i++) {  
      if(arr[i] !== arr[i-1] + 1) {  
          return false;  
      }  
  }  

  return true;  
} 


// 实现ai
function diceAI(arr){

}

function checkDice(arr) {  
  var counts = {}; // 用于存储元素及其出现的次数    
  var duplicates = []; // 用于存储重复的数字    
  var maxTimes = 0;
    
  for (var i = 0; i < arr.length; i++) {    
    if (counts[arr[i]]) {    
      if(counts[arr[i]] == 1) {
        duplicates.push(arr[i]); 
      }  
      counts[arr[i]]++; 
    } else {    
      counts[arr[i]] = 1;    
    }    
  }    
  
  for(var i = 0; i < duplicates.length; i++) {
    if(counts[duplicates[i]] > maxTimes) {
      maxTimes = counts[duplicates[i]];
    }
  }
  if(maxTimes == 2 && duplicates.length == 2) {
    result = arr.filter(num => duplicates.includes(num)); 
  }else if(maxTimes == 3 && duplicates.length == 2) {
    result = arr.filter(num => duplicates.includes(num));
  }else if(maxTimes == 3 && duplicates.length == 1) {
    result = arr.filter(num => counts[num] == 3);
  }else if(maxTimes == 4 && duplicates.length == 1) {
    result = arr.filter(num => counts[num] == 4); 
  }else if(maxTimes == 5 && duplicates.length == 1) {
    result = arr.filter(num => counts[num] == 5);  
  }else if(maxTimes == 0 && isConsecutive(arr) == false) {
    result = arr;  
  }else if(maxTimes == 0 && isConsecutive(arr) == true) {
    result = arr; 
  } 
  return result
}
