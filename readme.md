---------------
## webapp项目

### 配置环境请求变量

npm run dev 本地开发环境
npm run build dev 内网开发环境
npm run build test 测试环境
npm run build pre 预生产环境
npm run build pro 生产环境

### 9.9 待完事项

1. 详情页轮播图，点击轮播     ok
2. 消息im title样式， 点击表情事件，输入框
3. 注册登录整合到一个页面
4. 商机页面输入框 你 改成 您

### 开发页面

1. 商机列表
2. 列表数据详情
3. 品牌已认证
4. 加盟区域 
5. 搜索页面
6. 大家都在搜索-热文
7. 搜索成功页面
8. 消息未登录页面，消息列表
9. 聊天页面

### 网易IM 

1. 唤醒键盘，输入框不跟随 **目前小米自带浏览器不兼容**
2. 通知  **可暂不开发**  补充开发，不做功能只有固定的提示
3. 语音功能  **可暂不开发**

### app-banner组件

1. banner的背景图片是大小是750*420，不知道是否有合适的

2. 手动滑动轮播,不能循环轮播，需要改进 **解决办法：v-if**

### brandList

1. 总部这块 取三个值需要更改 **解决办法：加一个v-if，再输出index小于2**
2. offsetTop 切换路由的时候需要销毁  **组件切换的时候，销毁监听**
3. 评论三角  **css已完成**

### 品牌搜索页面

1. 数据获取慢，不能正常显示数据 **个别页面已经做好交互**

### 详情页面 

1. 评论  已加载完毕提示不能显示，添加点击收缩评论事件 **已解决**
2. banner 首次进入不能显示1/6 刷新有时候会好用

### 加盟区域

1. 需要加载动画**已完成**

### 全体页面

1. 数据没有的时候，进入动画需要做 **详情页面有做** 

## git 操作

## 组件库选用的vux

安装后需要进行配置 

VUX 必须配合 vux-loader 使用，如果不使用 vux2 模板请按照文档正确配置。

less@3.x 有严重的兼容问题，请暂时使用 less@^2.7.3。

vux2必须配合vux-loader使用, 请在build/webpack.base.conf.js里参照如下代码进行配置：

```
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
})
```

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}
asyncCall();


## 服务器部署

if(process.env.NODE_ENV == 'production'){
    // 部署服务调用正式地址
    axiosBaseUrl = '/'
}else{
    // 开发测试地址development
    axiosBaseUrl = '/api'
}

## 注意

一、地址选择三联动

vue-awesome-picker 不能提供地址的code

vux 没有全部，取消按钮没有callback

## 知识点

一、process进程对象及其属性

process对象是Node的一个全局对象，可以在任意位置使用，不必通过require命令加载。

process对象提供一系列属性  process.cwd()   process.env   _ _dirname

process.cwd()与__dirname的区别：前者进程发起时的位置的绝对路径（在node中代表所输命令行上面的那一行，

后者是脚本的位置（文件原原本本处于的目录位置），两者可能是不一致的。

process.env：process.env属性返回一个对象，包含了当前Shell的所有环境变量，一般这里的做法，新建一个环境变量NODE_ENV，用它确定当前所处的开发阶段。　　生产阶段设为production，开发阶段设为development。

　用法：A 脚本中读取process.env.NODE_ENV来确定是哪个阶段。B 运行脚本时，设置环境变量 node命令行中：$ NODE_ENV=production node app.js

　var env = process.env.NODE_ENV   env === 'development'   env === 'production'

二、CSS3居中
```
-webkit-transform: translate3d(-50%, -50%, 0);
-ms-transform: translate3d(-50%, -50%, 0);
transform: translate3d(-50%, -50%, 0);
```
三、三角
```
.riangle-up{  // 修饰箭头
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid #f4f4f4;
    position: absolute;
    left: 1em;
    top: -0.5em;
}
.left::before{ // 左三角
  content: "";
  position: absolute;
  width: 14/@rem;
  height: 14/@rem;
  border: 1px solid #2a2a2a;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  transform: rotate(315deg);
  top: -5/@rem;
  left: 0;
}
```
四、[photoswipe图片轮播](http://photoswipe.com/)

五、下载逻辑
```
ar downLoadApp = {
    init:function(){
      var _this = this;
      $(".getMore").on("click",function(){
        if( _this.judgeType() == 'IOS' ){
          window.location.href = $("#appKd").val().split("|")[1];
        }
        if( _this.judgeType() == 'Android' ){
          window.location.href = $("#appKd").val().split("|")[0];
        }
      });	
    },
    judgeType:function(){
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/iPhone\sOS/i) == "iphone os") {
        return "IOS";
      } else if(ua.match(/Android/i) == "android") {
        return "Android";
      }
    }
  }
  downLoadApp.init();
```

```
input[type="file"] {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  width: inherit;
  height: inherit;
  opacity: 0;
  font-size: 1rem;
}

<input type="file" accept="image/*" capture="camera">  照相机

<input type="file" accept="video/*" capture="camcorder"> 摄像机
 
<input type="file" accept="audio/*" capture="microphone"> 录音

```
if (window.localStorage.getItem('token')) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ` + window.localStorage.getItem('token')
}

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if (to.meta.requiresAuth) {
    if (token) {
      store.dispatch('getUser')
      next()
    } else {
      store.dispatch('logOut')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
```

input[type=range] {
	 -webkit-appearance: none;
    width: 100%;
    border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
    background: -webkit-linear-gradient(#35aeb6, #35aeb6) no-repeat;
	  background-size: 10% 100%;
	  z-index: 9999;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background:#eee;
}
input[type=range]::-webkit-slider-runnable-track {
	-webkit-appearance: none;
    height: 1.5px;
    border-radius: 10px; /*将轨道设为圆角的*/
  /*   box-shadow: 0 1px 1px #b1b1b1轨道内置阴影效果 */
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 50/@rem;
    width: 50/@rem;
    margin-top: -25/@rem; /*使滑块超出轨道部分的偏移量相等*/
    border:none;
    background:url("https://m.kuaidao.cn/mobile/share/branddetail/images/handle.png") no-repeat;
    background-size: 100% 100%;
}

```

移动端 关于 键盘将input 框 顶上去的解决思路

本项目对这块是兼容问题，个别浏览器会出现这种状况

不管是上面的textarea还是下面的input输入框，它们任意一个获得焦点的时候，手机的虚拟键盘都会抬起将fixed定位于屏幕最低端的 “提交”按钮顶到屏幕 “中间”位置，严重影响布局，这就测试人员来看是一个不可饶恕，已经足已被开除的底部，怎么解决这个问题呢？对于布局不是很复杂的 "提交"页面而言，可以采用动态获取底部footer的offset().top 再减去其父元素offset().top ，将其差值当作footer的的margin-top数值的，同时remove掉footer的fixed属性。

具体的解决步骤如下：将footer 外面包裹一个父级div,赋给其类名 footer-wrap，footer fixed绝对定位与屏幕的底部,分别获取footer和footer-wrap的offset().top,计算差值，remove掉footer的fixed属性，然后赋值给footer的margin-top

组件中的细节
<ul><li is="row"></li></ul>  // 父组件ul中有row组件,如果直接写row组件可能会有兼容问题

--------------------

## 组件中的name大写，路由中的name是小写