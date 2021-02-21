<template>
	<div class="loading" v-show="loading">
		<div class="demo-spin-container">
			<Spin fix size="large"></Spin>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		loading:Boolean
	},
	data(){
		return {
			percent:0
		}
	},
	watch:{
		percent(val){			
			this.$Loading.update(this.percent)
		}
	},
	methods:{
		isLoading(bgArr){
			if(this.loading == true){
				let imgList = document.getElementsByTagName('img'); //图片集合，返回的是HTMLCollection
				let imgCount = imgList.length; //图片总数
				let imgArr = [...imgList];
				let urlArr = []; //用于存放所有图片的url
				for(let a=0; a<imgCount;a++){
					urlArr.push(imgArr[a].src);
				}
        let bg = new Image(); //背景图
        if(this.$store.state.routerIndex>0 && this.$store.state.routerIndex<7){
          bg.src = 'https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bg'+this.$store.state.routerIndex+'.jpg';
        }
				urlArr.unshift(bg.src);
				if(bgArr){
					urlArr.concat(bgArr)
				};
				if (urlArr.length <= 0) return;
				let i = 0,
				timer = null,
				len = urlArr.length,
				load = (url) => {
					if(len <= 8){
						if (i <= len) {
							const image = new Image();
							image.src  = url;
							timer = setInterval(() => {
								if (image.complete) {
									this.percent = i/len*100
									clearInterval(timer);
									load(urlArr[i++]);									
									// console.log(image.src)
								}
							}, 30)
						}else{
							this.$store.state.loading = false;
							this.$store.state.display = true; // 所有图片加载完后的操作
							this.$Loading.update(0)
							// console.log('此时显示')
						}
					}else if(len > 8 && len<20){
						if (i <= 8) {
							const image = new Image();
							image.src  = url;
							timer = setInterval(() => {
								if (image.complete) {
									this.percent = i/6*100
									clearInterval(timer);
									load(urlArr[i++]);
								}
							}, 30)
						}else{
							this.$store.state.loading = false;
							this.$store.state.display = true; // 所有图片加载完后的操作
							this.$Loading.update(0)
							// console.log('此时显示')
						}
					}else{
						if (i <= len/2) {
							const image = new Image();
							image.src  = url;
							timer = setInterval(() => {
								if (image.complete) {
									this.percent = i/(Math.floor(len/2))*100
									clearInterval(timer);
									load(urlArr[i++]);
									// console.log(image.src)
								}
							}, 30)
						}else{
							this.$store.state.loading = false;
							this.$store.state.display = true; // 所有图片加载完后的操作
							this.$Loading.update(0)
							// console.log('此时显示')
						}
					}	
				}
				load(urlArr[i])
			}
		}
	}
}
</script>

<style scoped lang="less">
.loading {
	z-index: 100;
	position: relative;
	// width: 100vw;
	height: 100vh;
	.demo-spin-container {
		width: 10rem;
		height: 10rem;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
}
</style>
