// showpic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: {
      menu_url: "/srcs/images/showpic_menu.png",
      intro: "门店介绍",
      name: "你的小程序名称"
    },
    picArray: [
      "/srcs/images/showpic1.png",
      "/srcs/images/showpic2.png",
      "/srcs/images/showpic3.png",
      "/srcs/images/showpic1.png",
      "/srcs/images/showpic2.png",
      "/srcs/images/showpic3.png",
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin]
    });
  }
})