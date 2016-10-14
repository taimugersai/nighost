Page({
  data:{
    // animationData: {},
    animateji:{},
    animateou:{},
    left:"leftfirst",
    right:"rightfirst",
    // text:"这是一个页面"
    items:[{
      avatarUrl: '../../../images/cd1.jpg',
      nickName:'风景优美景色宜人'
    },{
      avatarUrl: '../../../images/cd2.jpg',
      nickName:'风景优美景色宜人'
      },{
      avatarUrl: '../../../images/cd2.jpg',
      nickName:'风景优美景色宜人'
    },{
      avatarUrl: '../../../images/cd1.jpg',
      nickName:'风景优美景色宜人'
    },{
      avatarUrl: '../../../images/cd1.jpg',
      nickName:'风景优美景色宜人'
    },{
      avatarUrl: '../../../images/cd2.jpg',
      nickName:'风景优美景色宜人'
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
   onReady:function(){
    // 页面渲染完成
    var animation = wx.createAnimation({
      duration: 1000,
    })
    this.animation = animation;
    animation.translate(160).step();
    
    this.setData({
      animateji:this.animation.export()
    })
    animation.translate(-160).step();
     this.setData({
      animateou:this.animation.export()
    })
  },

  onShow:function(){
    // 页面显示

  },

  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})