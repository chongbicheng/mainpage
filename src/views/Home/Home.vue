<template>
	<div class="home">
		<TopBg></TopBg>
		<div class="home-block" v-if="fullWidth<525">
			<!-- <div class="content animated fadeInDown" > -->
      <div class="content">
				<div id="home_typed"></div>
			</div>
		</div>
    <div class="video-box" v-if="fullWidth>525">
      <video src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/life2.mp4" width="100%" autoplay muted loop ></video>
    </div>
    <!-- <div class="demo_box">
      <div class="demo">
        <span id="MizuharaKiko" class="typed"></span>
        <div class="albums-tab">
          <div class="albums-tab-thumb sim-anim-1">
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko1.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko2.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko3.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko4.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko5.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko8.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko7.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko9.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/kiko6.jpg" class="all studio"/>
          </div>
        </div>
      </div>
      <div class="demo">
        <span id="AragakiYui" class="typed"></span>
        <div class="albums-tab">
          <div class="albums-tab-thumb sim-anim-2">
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui1.jpeg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui2.jpeg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui3.jpeg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui4.jpeg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui5.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui6.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui7.jpeg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui8.jpg" class="all studio"/>
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/yui14.gif" class="all studio"/>
          </div>
        </div>
      </div>
    </div> -->
		
	</div>
</template>


<script>
	import Typed from "typed.js";
	import TopBg from '@/components/Top-bg/Top-bg.vue';
	export default{
		data(){
			return {
        fullWidth: document.documentElement.clientWidth,
        qudaoShow: false,
        deviceShow: false,
			}
		},
		created() {
			this.$store.commit('changeRouterIndex',1)
		},
		components:{
			TopBg
    },
		mounted() {
			this.$store.commit('changeRouterIndex',1)
			this.$store.commit('changeLoading',true)
			this.$store.commit('changeDisplay',false)
			this.initTyped()
      this.$Loading.update(0)
      // this.typedPicName()
		},
		methods:{
			initTyped() {
			  new Typed("#home_typed", {
					strings: [
            "我今天也在追逐那彩虹",
            "医书里说有两样东西是最好的灵丹妙药，一个是开心的笑容，一个是睡个好觉",
						"想人间婆娑，全无着落；看万般红紫，过眼成灰",
						"失去的东西，其实从来未曾真正地属于你，也不必惋惜",
						"惊觉相思不露，原来只因已入骨，情不知所起，一往而深",
						"宠辱不惊，看庭前花开花落，去留无意，望天上云卷云舒",
						"念念不忘，必有回响，不忘初心，方得始终", 
					],
					typeSpeed: 80,
					backSpeed: 50,
					backDelay: 2000,
					loop: true,
					cursorChar: ''
			  });
      },
      typedPicName(){
        new Typed("#MizuharaKiko", {
					strings: [
            "Mizuhara Kiko"
					],
					typeSpeed: 80,
					backSpeed: 50,
					backDelay: 2000,
					loop: true,
					cursorChar: '_'
        });
        new Typed("#AragakiYui", {
					strings: [
            "Aragaki Yui"
					],
					typeSpeed: 80,
					backSpeed: 50,
					backDelay: 2000,
					loop: true,
					cursorChar: '_'
			  });
      }
		}
	}
</script>

<style scoped lang="less">
	.home{
		position: relative;
    width: 100%;
		.home-block{
			width: 100%;
			margin: auto;
			.content{
				position: absolute;
				top: 40vh;
				@media screen and (max-width: 525px) {
				  top: 72px;
				}
				height: 150px;
				width: 100%;
				// font-family: Cursive !important;
				color: rgb(240,240,240);
				#home_typed{
					// margin-top: 18rem;
					font-size: 1.5rem;
					text-shadow: 0 0 10px #FFFFFF;
					@media screen and (max-width: 525px) {
						// top: 100px;
						margin: 4rem 2rem;
						font-size: 1.125rem;
          }
				}
			}
    }
    .video-box{
      position: relative;
      overflow: hidden;
      height: 100vh;
    }
    .demo_box{
      position: relative;
      width: 80%;
      margin: 200px auto;
      border: 1px solid rgb(210,210,210);
      display: flex;
      justify-content: space-around;
      .demo{
        width: 200px;
        height: 200px;
        border: 1px solid rgb(210,210,210);
        .typed{
          font-size: 18px;
          font-weight: 600;
        }

        .sim-anim-1{
          position: relative;
          margin-top: 10px;
          -webkit-perspective: 500px; /* Chrome, Safari, Opera */
          perspective: 500px; 
          height: 195px;
          overflow: hidden;
          &:hover{
            overflow: visible;
          }
        }	
        .sim-anim-1 img{
          position: absolute;
          width: 200px;
          // height: 200px;
          margin-left: -100px;
          -webkit-transition: all 0.5s ;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        .sim-anim-1:hover img{
          z-index: 1;
        }
        .sim-anim-1:hover img:nth-child(1){
          -ms-transform: translate(0,56%) scale(0.75,0.75) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(0,56%)  scale(0.75,0.75) rotateX(3deg) translateZ(100px);
          transform: translate(0,56%) scale(0.75,0.75) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-1:hover img:nth-child(2){
          -ms-transform: translate(72%,75%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(72%,75%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(72%,75%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }		
        .sim-anim-1:hover img:nth-child(3){
          -ms-transform: translate(-72%,100%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-72%,100%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(-72%,100%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-1:hover img:nth-child(4){
          -ms-transform: translate(-72%,-8%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-72%,-8%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);  
          transform: translate(-72%,-8%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }		
        .sim-anim-1:hover img:nth-child(5){
          -ms-transform: translate(72%,-5%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(72%,-5%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(72%,-5%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-1:hover img:nth-child(6){
          -ms-transform: translate(70%,-70%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(70%,-70%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(70%,-70%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }	
        .sim-anim-1:hover img:nth-child(7){
          -ms-transform: translate(-70%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-70%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);  
          transform: translate(-70%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }		
        .sim-anim-1:hover img:nth-child(8){
          -ms-transform: translate(0,-74%) scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
          -webkit-transform: translate(0,-74%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(0,-74%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-1:hover img:nth-child(9){
          -ms-transform: scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
          -webkit-transform:scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }	

        .sim-anim-2{
          position: relative;
          margin-top: 10px;
          -webkit-perspective: 500px; /* Chrome, Safari, Opera */
          perspective: 500px; 
          height: 195px;
          overflow: hidden;
          &:hover{
            overflow: visible;
          }
        }	
        .sim-anim-2 img{
          position: absolute;
          width: 200px;
          // height: 200px;
          margin-left: -100px;
          -webkit-transition: all 0.5s ;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        .sim-anim-2:hover img{
          z-index: 1;
        }
        .sim-anim-2:hover img:nth-child(1){
          -ms-transform: translate(0,112%) scale(0.75,0.75) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(0,112%)  scale(0.75,0.75) rotateX(3deg) translateZ(100px);
          transform: translate(0,112%) scale(0.75,0.75) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-2:hover img:nth-child(2){
          -ms-transform: translate(71%,58%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(71%,58%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(71%,58%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }		
        .sim-anim-2:hover img:nth-child(3){
          -ms-transform: translate(-72%,125%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-72%,125%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(-72%,125%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-2:hover img:nth-child(4){
          -ms-transform: translate(-70%,-18%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-70%,-18%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);  
          transform: translate(-70%,-18%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }		
        .sim-anim-2:hover img:nth-child(5){
          -ms-transform: translate(70%,-15%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(70%,-15%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(70%,-15%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-2:hover img:nth-child(6){
          -ms-transform: translate(70%,-82%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(70%,-82%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(70%,-82%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }	
        .sim-anim-2:hover img:nth-child(7){
          -ms-transform: translate(-69%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          -webkit-transform: translate(-69%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px);  
          transform: translate(-69%,-76%)  scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }		
        .sim-anim-2:hover img:nth-child(8){
          -ms-transform: translate(0,-82%) scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
          -webkit-transform: translate(0,-82%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(0,-82%) scale(0.7,0.7) rotateX(3deg) translateZ(100px);
        }	
        .sim-anim-2:hover img:nth-child(9){
          -ms-transform: translate(0,-15%) scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
          -webkit-transform: translate(0,-15%)scale(0.7,0.7) rotateX(3deg) translateZ(100px);
          transform: translate(0,-15%) scale(0.7,0.7) rotateX(3deg) translateZ(100px); 
        }	
      }
    }
	}
</style>
