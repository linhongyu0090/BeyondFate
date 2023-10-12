Page({
  data: {
    imageUrl: ''
  },
  
  chooseImage: function () {
    const that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://api.example.com/upload', // 请替换为实际的上传地址
          filePath: tempFilePaths[0],
          name: 'file',
          success: function (uploadRes) {
            const imageUrl = uploadRes.data;
            that.setData({
              imageUrl: imageUrl
            });
            wx.showToast({
              title: '图片上传成功',
              icon: 'success'
            });
          },
          fail: function (err) {
            console.error(err);
            wx.showToast({
              title: '图片上传失败',
              icon: 'none'
            });
          }
        });
      },
      fail: function (err) {
        console.error(err);
        wx.showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  },
 
  submitForm: function (e) {
    const formData = e.detail.value;
    // 向服务器提交表单数据
    wx.request({
      url: 'https://api.example.com/submit', // 请替换为实际的提交地址
      method: 'POST',
      data: formData,
      success: function (res) {
        console.log('表单提交成功', res);
        wx.showToast({
          title: '表单提交成功',
          icon: 'success'
        });
      },
      fail: function (err) {
        console.error('表单提交失败', err);
        wx.showToast({
          title: '表单提交失败',
          icon: 'none'
        });
      }
    });
  }
});