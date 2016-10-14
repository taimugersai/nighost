Page({
  data:{
    // text:"这是一个页面"
     imgUrls: [
      '../../../images/logo.jpg',
      'http://img1.imgtn.bdimg.com/it/u=1172049401,3158795676&fm=21&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=3604057920,2493938306&fm=21&gp=0.jpg'
    ],
    mainData:[
      {
        images:"https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg",
        title:"H5展示",
        text:"H5活动展示页面，Canvas、SVG课件游戏"
      },
      {
        images:"https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg",
        title:"社区宣传",
        text:"政府宣传官方微信公众平台、社区活动"
      }, 
      {
        images:"http://img4.imgtn.bdimg.com/it/u=3604057920,2493938306&fm=21&gp=0.jpg",
        title:"商城",
        text:"移动商城、分销商城等在线销售平台"
      },
       {
        images:"https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg",
        title:"餐饮",
        text:"餐厅点单系统，外卖系统"
      },
       {
        images:"http://img4.imgtn.bdimg.com/it/u=3604057920,2493938306&fm=21&gp=0.jpg",
        title:"活动",
        text:"在线投票、在线预约、促销活动(砸金蛋，大转盘)"
      }
    ],
    mainData2:[
      {
        images:"https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg",
        title:"企业",
        text:"企业官网，企业产品展示，产品形象策划"
      },
      {
        images:"https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg",
        title:"商城",
        text:"PC商城，导购平台，团购系统"
      }
    ], 
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    text:"sdagkjdsajgdka",
    mobile:"移动端",
    pc:"PC端",
    mobileCSS:"mobileColorB",
    pcCSS:"pcColorB",
    main_left:"main_left",
    navigator_type_bottom:"navigator_type_bottom"
  },


tapmobile: function(event) {
    this.setData({
      mobileCSS:"mobileColorG",
      pcCSS:"pcColorB",
      navigator_type_bottom:"navigator_type_bottom",
      main_left:"main_left"
    })
    console.log(event)
  },

tapPc: function(event) {
    this.setData({
      mobileCSS:"mobileColorB",
      pcCSS:"pcColorG",
      navigator_type_bottom:"navigator_type_bottom1",
      main_left:"main_left_click"
    })
  },
  goToCaseDetil:function(event){
    wx.navigateTo({
         url:'../caseDetail/caseDetail'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
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