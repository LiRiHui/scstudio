// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"星云创新工作室",
    imgUrls: [
      '../../srcs/images/index_logo.png'
    ],
    show_img: "../../srcs/images/show.png",
    intro_img: "../../srcs/images/intro.png",
    add_img: "../../srcs/images/add.png",
    wechat_img: "../../srcs/images/wechat.png",
    phone_img: "../../srcs/images/phone.png",
    artcle_img: "../../srcs/images/article.png",
    xiao_img: "../../srcs/images/xiao.png",
    cheng_img: "../../srcs/images/cheng.png",
    xu_img: "../../srcs/images/xu.png",
    little_msg:"../../srcs/images/little_msg.png",
    little_paper: "../../srcs/images/little_paper.png",
    little_pen: "../../srcs/images/little_pen.png",
    recommend_img: "../../srcs/images/recommend.png",
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

  phoneCall:function(){
    wx.showActionSheet({
      itemList: ["呼叫:18502794699"],
      success:function(tapIndex){
        if(tapIndex == 0){
          wx.makePhoneCall({
            phoneNumber: '18502794699',
          })
        }
      }
    })
  }
})