<template>
    <div class="my page-top">
    	<div class="bggrey"></div>
    	<!-- loading -->
      <div v-show="loading" class="loading-animation">
          <div class="loading-img loading-logo">
              <img width="100%" src="/static/images/common/logo.png" alt="">
          </div>
          <div class="loading-img loading-circle Rotation">
              <img width="100%" src="/static/images/common/circle.png" alt="">
          </div>
          <p>正在加载...</p>
      </div>
      <div class="cntbox page-top" v-show="!loading">
    	<!-- <div class="cntbox page-top"> -->
	    	<!-- 头部title start -->
	    	<header-title :title="title"></header-title>
	        <div class="myBox fontSize">
			    <div class="headBox">
			    	<div class="loginHead">
				    	<div class="headimgbox">
				    		<!-- 有返回头像图片 -->
				    		<img :src="userAvatar" v-if="headimgShow">
				    		<!-- 没有头像图片 -->
							<div class="icobox" v-if="defaultheadimgShow">
				    			<img src="/static/images/my/default_headimg.png" alt="">
				    		</div>
				    	</div>

				        <div class="name" v-if="loginShow">{{name}}</div>
				        <div class="tel" v-if="loginShow">{{phonenum}}</div>

				        <div class="loginbtnbox" v-if="logoutShow">
				        	<router-link to="/login" tag="div"  class="btn loginbtn">登录</router-link>
				        	<router-link to="/register" tag="div"  class="btn registerbtn">注册</router-link>
				        </div>
			    	</div>
			    </div>
			    <ul class="introUl">
					<li>
						<div @click="myfocus" class="myfocus">
							<span class="ico-focus"><img src="/static/images/my/ico_star.png" alt=""></span>我的关注
						</div>
						<div @click="mycollect"><span class="ico-collect"><img src="/static/images/my/icon_collect.png" alt=""></span>我的收藏</div>
					</li>
			        <li>
			            <a class="callTell" href="tel:010-53579588"><span class="ico1" ><img src="/static/images/my/ico_head.png" alt=""></span>客服电话</a>
			        </li>
			    </ul>
			</div>
			<div class="btnbox" v-if="loginShow">
				<button class="btn" @click = "logout">退出登录</button>
			</div>
    	</div>
    </div>
</template>
<script>
import HeaderTitle from '@/pages/components/HeaderTitle.vue'
export default {
    name: 'My',
    components: {HeaderTitle},
    data () {
        return {
            headimgShow: false,
            defaultheadimgShow: false,
            loading: true,
            loginShow:false,
            logoutShow:false,
            headImg:"",
            name:"",
            phonenum:"",
            userAvatar:"",
            title: '个人中心'
        }
    },
    methods: {
		myfocus(){
			if(!this.logoutShow){
				this.$router.push('/myfocus')
			}else{
				this.$router.push('/login')
			}
		},
		mycollect(){
			if(!this.logoutShow){
				this.$router.push('/mycollect')
			}else{
				this.$router.push('/login')
			}
		},
    	ungetMyinfo(){//未登录
    		this.logoutShow=true //显示登录和注册按钮
			this.defaultheadimgShow=true //显示默认头像
			this.loading = false
    	},
    	getMyinfo(){ //已登录
			this.$http.get(this.baseurl+'/me',{mode: 'cors',credentials: 'include'}).then((res) => {
			// this.$http.get('http://192.168.13.135/me').then((res) => {
				if(res.status==200){
					// console.log(res.data.data)
					var phonenum=res.data.data.phoneNumber
					var phonenumStr = phonenum.substr(0,3)+"****"+phonenum.substr(7);
					this.name = res.data.data.name;
					this.phonenum = phonenumStr;
					this.userAvatar = res.data.data.userAvatar;
					this.loginShow=true
					this.loading = false
					if(this.userAvatar==null){//头像返回空值
						this.defaultheadimgShow=true //显示默认头像
					}else{
						this.headimgShow=true //显示返回头像
					}
				}else{
					this.logoutShow=true //显示登录和注册按钮
					this.defaultheadimgShow=true //显示默认头像
					this.loading = false
				}

			}).catch((error) => {
			  console.log(error)
			  this.clearAllCookie()//清掉cookie
			  this.ungetMyinfo() //未登录
			  // if(error.status==401){
			  // 	this.ungetMyinfo()
			  // 	error.statusText="重新登录"
			  // }
			})
    	},
        phoneCall () {
            window.location.href = "tel:010-53579588"
        },
        logout () {//点击退出登录
			this.$http.get(this.baseurl+'/logout').then((res) => {
			    // console.log(res)
			    this.loginShow=false
			    this.logoutShow=true //显示登录和注册按钮
				this.defaultheadimgShow=true //显示默认头像
			    this.clearAllCookie()
			    this.loading = false

			    this.headimgShow=false //返回头像不显示

			}).catch((error) => {

			})
        },
        getCookie (objName) {
	    	var search = objName + '='
		    if (document.cookie.length > 0) {
				var offset = document.cookie.indexOf(search)
				if (offset != -1) {
					offset += search.length
					var end = document.cookie.indexOf(';', offset)
					if (end == -1) end = document.cookie.length
					return unescape(document.cookie.substring(offset, end))
				} else {
					return ''
				}
		    }
		    return ''
		},
	    //清除cookie
		clearAllCookie() {
			var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
			if(keys) {
				for(var i = keys.length; i--;)
					document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
			}
		}
	},
  	created () {
  		var cookiestr=this.getCookie("accesstoken")
  		// console.log(cookiestr)
  		if(cookiestr!==""){//判断cookie里accesstoken的值是否存在

  			this.getMyinfo() //已登录

  		}else{
  			this.ungetMyinfo() //未登录
  		}
  	}
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.bggrey{background:#eff3f7;width:100%;height:100%;z-index: 1;position: absolute;left:0;top:0;}
.cntbox{width:100%;position: absolute;left:0;top:0;z-index: 2;}
.myBox{width: 100%;}
.myBox .headBox{
	width: 100%;
	height: auto;
	background: url("/static/images/my/my_introbg.jpg") no-repeat top center;
	background-size: 100% 100%;
	overflow: hidden
}
.myBox .headBox .headimgbox{
	width: 148/@rem;
	height: 148/@rem;
	margin: 77/@rem auto 0;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	border: 1px solid #fff;
	background:#fff;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	border:1px solid #59b1d8;
	overflow:hidden;
}

.myBox .headBox .headimgbox .icobox{
	width:80/@rem;
	height:80/@rem;
	margin:27/@rem auto 0;
}

.myBox .headBox .headimgbox img{
	width: 100%;
	height: 100%;
	display: block;
}

.myBox .headBox .name{
	text-align: center;
	padding: 13/@rem 0 20/@rem;
	color: #1966ab;
	font-size:30/@rem;
}

.myBox .headBox .tel{
	text-align: center;
	padding-bottom: 75/@rem;
	color: #488bc7;
	font-size:24/@rem;
}

.myBox .introUl{
	display: block;
	overflow: hidden;
	margin-bottom:145/@rem;
}

.myBox .introUl li{
	padding: 0 24/@rem;
	overflow: hidden;
	border-top: 1px solid #dae0e6;
	border-bottom: 1px solid #dae0e6;
	background:#fff;
	margin-bottom:15/@rem;
	font-size:30/@rem;
	color: #2a2a2a;
	img{
		width: 100%;
		vertical-align: top;
	}
	div{
		height:88/@rem;
		line-height:88/@rem;
		display: flex;
		align-items: center;
		background: url('/static/images/my/icon_arrow_right.png') no-repeat;
		background-size: 16/@rem 28/@rem;
		background-position: right;
		span{
			display: inline-block;
			margin-right:37/@rem;
		}
		.ico-focus{
			width:40/@rem;
			height:40/@rem;
		}
		.ico-collect{
			width:40/@rem;
			height:34/@rem;
		}
	}
	.myfocus{
		border-bottom: 1px solid #d9d9d9;
	}
  a.callTell {
	width: 100%;
	height:88/@rem;
	line-height:88/@rem;
    color: #000;
	display: flex;
	align-items: center;
	background: url('/static/images/my/icon_arrow_right.png') no-repeat;
	background-size: 16/@rem 28/@rem;
	background-position: right;
	.ico1{
		display: inline-block;
		margin-right: 37/@rem; 
		width:40/@rem;
		height:45/@rem;
	}
  }
}
.myBox .introUl li:first-child{
	border-top: 1px solid #6fc2e7;
}
.btnbox .btn{
	width:658/@rem;
	background:#3caeb5;
	height:88/@rem;
	line-height:88/@rem;
	border-radius:44/@rem;
	color:#fff;
	margin:0 auto;
	display: block;
	font-size:36/@rem;
	font-family: "Microsoft Yahei",Arial, "Helvetica Neue", Helvetica, sans-serif;
	margin-bottom:383/@rem;
}
.hidden{display:none;}

.loginbtnbox{
	width:585/@rem;
	margin:22/@rem auto 70/@rem;
}
.loginbtnbox {overflow:hidden;}
.loginbtnbox .btn{width:248/@rem;height:72/@rem;border-radius:36/@rem;border:1px solid #fff;line-height:72/@rem;background:rgba(129,206,242,0.5);font-size:36/@rem;color:#1966ab;float:left;margin-left:30/@rem;text-align:center;}
.loading-animation{
    margin: 40% auto;
    z-index: 3;
    position:relative;
}
</style>
