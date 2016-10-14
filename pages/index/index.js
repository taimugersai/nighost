Page({
     data:{
         "name":"NIGHOST",
          imgUrls: [
            'http://tec.yexingxia.com/www/data/images/20160523/26e26a92d79d75da24c540117fb24495.jpg',
            'http://tec.yexingxia.com/www/data/images/20160523/26e26a92d79d75da24c540117fb24495.jpg',
            'http://tec.yexingxia.com/www/data/images/20160523/26e26a92d79d75da24c540117fb24495.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        severlist: [
            {
            "image":'../../../images/huodong.png',
            "msg":"活动&策划"
            }, 
            {
            "image":'../../../images/xuanchuan.png',
            "msg":"宣传&教育"
            },
            {
            "image":'../../../images/zhifu.png',
            "msg":"支付&销售"
            },
            {
            "image":'../../../images/xingxiang.png',
            "msg":"形象&建设"
            }
        ],
         sevList:[
       {
        "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "高端档次" 
      },
      {
        "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "主题性质"
       
      },
      {
        "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "高端档次"
      }      
         ]
     },
  onLoad:function(options){

    // 页面初始化 options为页面跳转所带来的参数
  },
 more:function(event){
      //从网络获取数据
      var newList =[
         {
      "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "主题性质"
        
      },
      {
        "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "主题性质"
      },
      {
         "image":"../../../images/g.png",
         "title": "【H5】XXX公司首页展示",
         "time":" 2016.8.10",
         "info": "简洁大气",
         "info1": "主题性质"
      }    
      ]
       var totalList = this.data.sevList.concat(newList) ; 
      console.log(totalList);
      this.setData({
        sevList:  totalList
      })
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

