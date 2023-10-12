// app.js
App({
  data: {
    //拥有奖励分的特殊组合
    special: [
      [2, 2, 5, 5, 1],
      [1, 1, 1, 5, 6],
      [5, 5, 5, 6, 6],
      [2, 2, 2, 2, 3],
      [6, 6, 6, 6, 6],
      [1, 2, 3, 4, 6],
      [1, 2, 3, 4, 5]
    ],
    //每个特殊组合的点数
    integral: [25, 24, 47, 55, 130, 46, 75],
  },
  globalData: {
    // 准备页面输入的游戏玩家个数
    player_num:5,
    // 准备页面输入的游戏局数
    play_num:3,
    // 准备页面输入的筹码数
    play_money:1000,
    //存储对局前设置的对局数传递给对局页面
    chess: 0,
    //存储对局前设置的筹码数，传递给对局页面 
    chips: 0,
    userInfo:{
      avatarUrl:"",
      nickName:""
    },
    win_player:"",
    win_play_num:0,
    win_num:0,
    win_money:0
  },

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }
  },
  // globalData: {
  //   userInfo: null,
  //   player_num: 3,
  //   play_num: 3,
  //   play_money: 1000,
  // },
  //倍率选择函数
  select_Magnification: function (my_integral, enemy_integral) {
    let val = enemy_integral - my_integral;
    if (val < 0) {
      return 0;
    } else if (val >= 1 && val <= 5) {
      return 1;
    } else if (5 < val && val <= 10) {
      return 2;
    } else {
      return 3;
    }
  },
  count_same: function (enemy_selectNum, newcam, special, newdice) {
    var count = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (special[i] == newcam[j]) {
          if (j >= enemy_selectNum) {
            newdice[count] = j;
          }
          count++;
          newcam[j] = -1;
          break;
        }
      }
    }
    return count;
  },

  match_special: function (dice) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      sum += dice[i];
    }
    for (let i = 0; i < 7; i++) {
      var newcam = [0, 0, 0, 0, 0];
      for (let i = 0; i < 5; i++) {
        newcam[i] = dice[i];
      }
      var index = [-1, -1, -1, -1, -1];
      var count = this.count_same(0, newcam, this.data.special[i], index);
      if (count == 5) {
        return this.data.integral[i] - sum;
      }
    }
    return 0;
  },

  robot_decision: function (enemy_selectNum, dice, pubdice) {
    // var enemy_selectNum=4
    //  var dice=[2,3,4,6,0];
    //  var pubdice=[0,0,0,0,1];
    var cam = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
      if (dice[i] != 0) {
        cam[i] = dice[i];
      } else {
        cam[i] = pubdice[i];
      }
    }
    var count = 0;
    var integral1 = 0;
    for (let i = 0; i < 7; i++) {
      var newcam = [0, 0, 0, 0, 0];
      for (let i = 0; i < 5; i++) {
        newcam[i] = cam[i];
      }
      var newdice = [-1, -1, -1, -1, -1];
      var newcount = this.count_same(enemy_selectNum, newcam, this.data.special[i], newdice);
      if (newcount >= count) {
        count = newcount;
        if (this.data.integral[i] > integral1) {
          dice = newdice;
        }
      }
    }
    return dice;
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})