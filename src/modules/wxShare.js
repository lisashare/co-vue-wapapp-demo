// wxShare.js
import axios from 'axios'

export default function wxShare ({title, desc, timelineTitle, link, imgUrl} = {}) {
   var shareApi = '';
   //测试环境
   if( window.location.href.split('#')[0] == 'http://kdwap-frontend-test.kuaidaoapp.com/' ){
     shareApi = 'http://kdwap-api-test.kuaidaoapp.com';
   }
   //预生产环境
   if( window.location.href.split('#')[0] == 'http://kdwap-frontend-pre.kuaidaoapp.com/' ){
     shareApi = 'http://kdwap-api-pre.kuaidaoapp.com';
   }
   //生产环境
   if( window.location.href.split('#')[0] == 'http://wap.kuaidao.cn/' ){
     shareApi = 'http://mapi.kuaidao.cn';
   }
   axios.post(shareApi+'/jssdk/getsignpackage',{
    url: encodeURIComponent(window.location.href.split('#')[0])
   }).then(function (res) {
   // axios.post('http://192.168.13.135/'+'jssdk/getsignpackage').then(function (res) {
     if (res.status==200 && res.data.code==200 ) {
       var getMsg = res.data.data;

       wx.config({
          debug: false,  // 开启调试模式
          appId: getMsg.appId, // 必填，公众号的唯一标识
          timestamp: getMsg.timestamp, // 必填，生成签名的时间戳
          nonceStr: getMsg.nonceStr, // 必填，生成签名的随机串
          signature: getMsg.signature,// 必填，签名
          jsApiList: [  // 必填，需要使用的JS接口列表
            'onMenuShareTimeline', //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
            'onMenuShareAppMessage', //获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
            'onMenuShareQQ',
            'onMenuShareWeibo',
            // 'showMenuItems',
            //'hideMenuItems'
            // 'updateAppMessageShareData',
            // 'updateTimelineShareData',
            // 'onMenuShareWeibo'
          ]
        });

       wx.ready(() => {
          /*var shareData = {
            title: '商机盒子',
            desc: '商机盒子，无限商机',
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_sheng@3x.png', // 分享图标
            link: link || window.location.href, // 分享链接
            type: 'link',
            success: function() {
                alert(success)
            }
          }*/
           var shareWxLink = window.location.href.split('#')[0] + 'static/html/redirect.html?app3Redirect=' + encodeURIComponent(window.location.href);
          wx.onMenuShareAppMessage({
            title: title || '商机盒子', // 分享标题
            desc: desc || '商机盒子，无限商机', // 分享描述
            link: link || shareWxLink, // 分享链接
            type: 'link',
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/wxshare.png' // 分享图标
          })
          wx.onMenuShareTimeline({
            title: timelineTitle || desc || '商机盒子', // 分享标题，由于分享到朋友圈没有desc，所以这里采用的策略是，指定的朋友圈分享标题优先，其次采用发送给朋友的描述，最后采用默认文案。
            link: link || shareWxLink, // 分享链接
            type: 'link',
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/wxshare.png' // 分享图标
          })
          wx.onMenuShareQQ({
            title: title || '商机盒子', // 分享标题
            desc: desc || '商机盒子，无限商机', // 分享描述
            link: link || shareWxLink, // 分享链接
            type: 'link',
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/wxshare.png' // 分享图标
          });
          wx.onMenuShareWeibo({
            title: title || '商机盒子', // 分享标题
            desc: desc || '商机盒子，无限商机', // 分享描述
            link: link || shareWxLink, // 分享链接
            type: 'link',
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/wxshare.png' // 分享图标
          });

          //新加的
          /*wx.updateAppMessageShareData({ //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
            title: title || '商机盒子新', // 分享标题
            desc: desc || '商机盒子，无限商机', // 分享描述
            link: link || window.location.href, // 分享链接
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_sheng@3x.png' // 分享图标
          }, function(res) {  //这里是回调函数
             console.log(res)
          });

          wx.updateTimelineShareData({ //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
            title: title || '商机盒子新', // 分享标题
            link: link || window.location.href, // 分享链接
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_sheng@3x.png' // 分享图标
          }, function(res) { //这里是回调函数
             alert('分享到朋友圈或者QQ空间成功');
          });

          wx.onMenuShareWeibo({ //分享腾迅微博
            title: title || '商机盒子新', // 分享标题
            desc: desc || '商机盒子，无限商机', // 分享描述
            link: link || window.location.href, // 分享链接
            imgUrl: imgUrl || 'http://kdwap-frontend-test.kuaidaoapp.com/static/images/home/icon_sheng@3x.png', // 分享图标
            success: function () { // 用户确认分享后执行的回调函数
              alert('分享腾迅微博成功')
            },
            cancel: function () { // 用户取消分享后执行的回调函数
              alert('分享腾迅微博失败')
            }
          });*/

        })
     }
   });

}


