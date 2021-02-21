<template>
	<div class="post">
		<div ref="img" class="post_image animated fadeInDown">
			<div class="container">
				<div class="post_title">{{ post.title }}</div>
				<div class="post_info">
					<span><i class="fa fa-th" aria-hidden="true"></i></span>
					<span>{{ post.category }}</span>
					<span>-</span>
					<span><i class="fa fa-tags" aria-hidden="true"></i></span>
					<span>{{ post.tag1 }}</span>
					<span>{{ post.tag2 }}</span>
					<span>{{ post.tag3 }}</span>
				</div>
			</div>
		</div>
		<div class="content container animated fadeInUp">
			<div ref="detail" class="detail"></div>
		</div>
		<Button type="default"  class="back" size="large" @click="back">返回</Button>
		<!-- <Button type="primary" long class="delete" size="large" v-on:click="deletePost">删除本篇</Button> -->
	</div>
</template>

<script>
import vueLive2d from 'vue-live2d'
export default {
	props: {
		postId: [Number, String]
	},
	data() {
		return {
			post: {},
		};
	},
	mounted() {
		this.getPost();
		this.$Loading.update(0);
	},
	methods: {
		//根据id获取数据
		getPost() {
			this.$axios
				.get('http://server.sykiko.cn/kiko/getPost', {
					params: {
						postId: this.postId
					}
				})
				.then(response => {
					this.post = response.data.message[0];
					// if(this.postId%2==0){
					// 	this.$refs.img.style.backgroundImage = 'url(../../../static/img/bbb.jpg)';
					// }else{
					// 	this.$refs.img.style.backgroundImage = 'url(../../../static/img/iii.jpg)';
					// }
					this.$refs.detail.innerHTML = this.post.content;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		//返回
		back(){
			window.history.back(-1);
		}
		//删除文章
		// deletePost(){
		// 	let r = confirm('是否确认删除');
		// 	if (r==true){
		// 		this.$axios.post('http://47.101.154.157:9527/api/kiko/postDel', {
		// 				postId: this.post_id
		// 			})
		// 		}
		// 	}
	}
};
</script>

<style scoped lang="less">
.post {
	padding: 0;
	.post_image {
		height: 40vh;
		color: white;
		margin: 0 auto;
		background-image: url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/iii.jpg);
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;
		text-align: left;
		text-shadow: 0 0 10px white;
		.post_title {
			padding: 20vh 0 0 1rem;
			font-size: 2rem;
			font-weight: bold;
		}
		.post_info {
			padding: 1rem 0 0 1rem;
			font-size: 1.5rem;
		}
	}
	.content {
		margin: 2rem auto;
		padding: 1rem;
		text-align: left;
		box-shadow: 0px 0px 5px rgb(205, 207, 212);
		.detail {
			padding: 2rem 1rem;
		}
	}
}
</style>
