<template>
	<!-- 第一部分 -->
	<div class="scene">
		<div ref='bgdiv' id="scene" class="first-block bg-image animated" :class="routerIndex != 1 ? 'fadeInDown' : 'fadeIn'">
			<!-- <div v-if="routerIndex==1 && fullWidth>525" class="layer" data-depth="0.4" :style="layerStyle">
				<img id="image" :style="imgStyle" src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg1.jpg" width="1920" height="1080">
			</div> -->
      <!-- 封面图
      https://image.raindays.cn/Mood/image/1594348066004.png -->
		</div>
	</div>
	
</template>

<script>
import Parallax from 'parallax-js'
export default {
	data(){
		return{
			fullWidth: document.documentElement.clientWidth,
			boxH: '',
			boxW: '',
			layerStyle: {},
			imgStyle: {},
		}
	},
	computed: {
	  isChange () {
	    return this.$store.state.routerIndex;　　//需要监听的数据
	  }
	},
	watch: {
	  isChange (newVal, oldVal) {
		  this.changeH()
	  }
  },
  computed:{
    routerIndex() {
      return this.$store.state.routerIndex
    }
  },
	mounted() {
		this.changeH()
		// this.init()
		// Cover image init
		if(this.fullWidth>525){
			const scene = document.getElementById('scene');
			const parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			clipRelativeInput: true,
		  })
		}
		
		// console.log(this.fullWidth)
	},
	methods:{
		// Cover image init
		init(){
			this.boxH = document.documentElement.clientHeight + 'px';
			this.boxW = document.documentElement.clientWidth + 'px';
			this.coverLayer()
			// console.log('开始了')
		},
		// Cover image box calculation
		coverLayer(){
			let id = document.getElementById('scene'),
				_w = parseInt(this.boxW), 
		    _h = parseInt(this.boxH), 
				x, y, i,
				e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;
		
        if (_w >= _h) {
          i = _w / e * 50;
          y = i;
          x = i * _w / _h;
        } else {
          i = _h / e * 50;
          x = i;
          y = i * _h / _w;
        }
			const style = {
        width: _w + x + 'px',
        height: _h + y + 'px',
        marginLeft: - 0.5 * x + 'px',
        marginTop: - 0.5 * y + 'px'
			}
			this.layerStyle = Object.assign({}, this.layerStyle, style);
      this.coverImg()
		},
		// Cover image size calculation
		coverImg(){
			const width = parseInt(this.layerStyle.width), 
        height = parseInt(this.layerStyle.height), 
        ratio = 1080 / 1920,
        style = {};
		
			const compute = height / width > ratio;
		
			style['width'] = compute ? (height / ratio + 'px') : `${width}px`;
			style['height'] = compute ? `${height}px` : (width * ratio + 'px');
			
			style['left'] = (width - parseInt(style.width)) / 2 +'px';
			style['top'] = (height - parseInt(style.height)) / 2 +'px';
		
			this.imgStyle = Object.assign({}, this.imgStyle, style);
		},
		
		
		changeH(){
			if(this.fullWidth < 525){
				switch (this.$store.state.routerIndex){
					case 1:
						this.$refs.bgdiv.style.height = 36 + 'vh';	
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg1.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg1.jpg)";
						break;
					case 2:
						this.$refs.bgdiv.style.height = 36 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg2.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg2.jpg)";
						break;
					case 3:
						this.$refs.bgdiv.style.height = 36 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg3.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg3.jpg)";
						break;
					case 4:
						this.$refs.bgdiv.style.height = 36 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg4.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg4.jpg)";
						break;
				}
			}else{
				switch (this.$store.state.routerIndex){
					case 1:
						// this.init()
						break;
					case 2:
						this.$refs.bgdiv.style.height = 55 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg2.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg2.jpg)";
						break;
					case 3:
						this.$refs.bgdiv.style.height = 55 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg3.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg3.jpg)";
						break;
					case 4:
						this.$refs.bgdiv.style.height = 55 + 'vh';
            // this.$refs.bgdiv.style.backgroundImage = "url(" + require("../../../static/img/bg4.jpg") + ")";
            this.$refs.bgdiv.style.backgroundImage = "url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg4.jpg)";
						break;
				}
			}
		}
	}
}
</script>

<style scoped lang="less">
	// .scene{
	// 	transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); 
	// 	transform-style: preserve-3d; 
	// 	backface-visibility: hidden;
	// }
	.first-block {
		position: relative;
		transform-style: preserve-3d;
		backface-visibility: hidden;
		background-repeat: no-repeat;
		background-size: cover;
    // backface-visibility: hidden;
		@media screen and (max-width: 525px) {
			background-position: center;
		}
		
		@media screen and (min-width: 526px) {
			background-position: center -60px;
		}
	} 
</style>
