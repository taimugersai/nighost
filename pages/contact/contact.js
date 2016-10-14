Page({
  data:{
    // text:"这是一个页面"
    markers: [{
      latitude: 31.488860,
      longitude: 120.374500,
      name: '夜行侠网络科技',
      desc: '无锡国家软件园金牛座'
    }],
    covers: [{
      latitude: 31.488860,
      longitude: 120.374500,
      iconPath: '../../../images/logo.jpg',
      rotate: 10
    }, {
      latitude: 31.488860,
      longitude: 120.374500,
      iconPath: '../../../images/logo.jpg',
      rotate: 90
    }],
    details:[{imgurl:"../../../images/address.PNG",title:"ADDRESS:",information:"锦溪路100号第一单元6楼 中国江苏省无锡市，214000"},
             {imgurl:"../../../images/phone.PNG",title:"PHONE:",information:"0510-68796267"},
             {imgurl:"../../../images/email.PNG",title:"EMAIL:",information:"xsh@yexingxia.com"},
             {imgurl:"../../../images/hour.PNG",title:"HOURS:",information:"Monday - Thursday: 9am - 6pm Friday: 24h    Saturday - Sunday: 10am - 4pm"}]
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