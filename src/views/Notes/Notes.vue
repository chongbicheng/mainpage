<template>
	<div>
		<TopBg></TopBg>
		<div class="third-block container animated fadeInUp">
			<div id="post_detail" class="post row wow animated fadeInUp" data-wow-delay="0.25s" v-for="(post,index) in posts" :key="index" @click="toDetail(post)">
				<!-- 左侧图片 -->
				<div class="post_left"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/iii2.jpeg" alt="加载失败。" /></div>
				<!-- 右侧 -->
				<div class="post_right">
					<div class="wrap">
						<div class="title">{{ post.title }}</div>
						<div class="info">
							<span><i class="fa fa-calendar" aria-hidden="true"></i></span>
							<span>{{ post.createDate }}</span>
							<span>-</span>
							<span><i class="fa fa-th" aria-hidden="true"></i></span>
							<span>{{ post.category }}</span>
							<span>-</span>
							<span><i class="fa fa-tags" aria-hidden="true"></i></span>
							<span>{{ post.tag1 }}</span>
							<span>{{ post.tag2 }}</span>
							<span>{{ post.tag3 }}</span>
						</div>
						<div class="description">{{ post.description }}</div>
					</div>
				</div>
			</div>
			<!-- 翻页器 -->
			<div class="pager">
				<a v-on:click="prevPage" class="pager_btn module_mini"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
				<span>第 {{ currentPage }} / {{ totalPage }} 页</span>
				<a v-on:click="nextPage" class="pager_btn module_mini"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
import TopBg from '@/components/Top-bg/Top-bg.vue';
import '@/assets/js/date.format.js';
import {WOW} from 'wowjs'
export default {
	data() {
		return {
			currentPage: 1,
			postId: 0,
			pageSize: 10,
			total: 0,
			totalPage: 0,
			posts: [
				// {
				// 	postId:0,
				// 	createDate:null,
				// 	title:'代码或服务器调试中',
				// 	image:'',
				// 	category:'程序人生',
				// 	tag1:'测试',
				// 	tag2:'',
				// 	tag3:'',
				// 	description:'暂无内容显示',
				// 	content:'无关紧要'
				// },
				// {
				// 	postId:0,
				// 	createDate:null,
				// 	title:'代码或服务器调试中',
				// 	image:'',
				// 	category:'程序人生',
				// 	tag1:'测试',
				// 	tag2:'',
				// 	tag3:'',
				// 	description:'暂无内容显示',
				// 	content:'无关紧要'
				// }
			],
			allPosts: null,
      bgArr:[
        'url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bbb.jpg)',
        'url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/iii.jpg)',
        'url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/iii2.jpeg)'
      ]
		};
	},
	components: {
		TopBg
	},
	created() {
		this.$store.commit('changeRouterIndex',3)
	},
	mounted() {
		this.$store.commit('changeRouterIndex', 3);
		this.getPosts();
		this.$store.commit('changeLoading',true)
		this.$store.commit('changeDisplay',false)
		this.$store.commit('changeBgArr',this.bgArr)
		this.$Loading.update(0)
		this.downToContent(this.$store.state.cTop)
	},
	watch: {
		posts() {
			this.$nextTick(() => { // 在dom渲染完后,再执行动画
				var wow = new WOW({
					mobile: true,
					live: false
				})
				wow.init()
			})
		}
	},
	methods: {
		toDetail(post) {
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//滚动条距离顶部的高度
			this.$store.commit('changecTop',scrollTop)
			this.$router.push({ path: `/Post/${post.postId}`});
		},
		getPosts() {
			this.$axios({
				method:'get',
				url:'http://server.sykiko.cn/kiko/getPosts',
				// data:this.qs.stringify({    //这里是发送给后台的数据
				// 	userId:this.userId,
				// 	token:this.token,
				// })
			}).then((response) =>{  
				this.allPosts = response.data.message.reverse();
				for(let i=0; i<this.allPosts.length;i++){
					let oldTime = (new Date(this.allPosts[i].createDate)).getTime();
					this.allPosts[i].createDate = new Date(oldTime).format('Y-m-d');
				}
				this.totalPage = Math.ceil(this.allPosts.length/this.pageSize)
				this.currentList(this.currentPage)
				// console.log(this.posts)       //请求成功返回的数据
			}).catch((error) =>
				console.log(error)       //请求失败返回的数据
			)
		},
		
		// 分组显示
		currentList(num){
			if(this.allPosts.length >= 10) {
				this.posts = this.allPosts.slice(this.pageSize*(num-1),this.pageSize*num)
			}else{
				this.posts = this.allPosts
			}
		},
		
		// 下一页
		nextPage() {
			if (this.currentPage === this.totalPage) {
				this.$Message.info('已经是最后一页啦');
			} else {
				this.downToContent();
				this.currentPage += 1;
				this.currentList(this.currentPage)
			}
		},
		
		// 上一页
		prevPage() {
			if (this.currentPage === 1) {
				this.$Message.info('已经是第一页啦');
			} else {
				this.downToContent();
				this.currentPage -= 1;
				this.currentList(this.currentPage)
			}
		},
		// 页面定位到文章顶部
		downToContent(cTop) {
			if(cTop){
				setTimeout(()=>{
					$("html,body").animate({scrollTop: cTop},100
				),60})
			}else{
				setTimeout(()=>{
					$("html,body").animate({scrollTop: document.querySelector('.third-block').offsetTop},700
				),60})
			}
		}
	}
};
</script>

<style scoped lang="less">
.third-block {
	margin: 60px auto;
	padding: 0 1rem;
	// max-width: 1200px;
	transform: translateZ(0);
	.post {
		border-radius: 2px;
		height: auto;
		transition: 0.3s all linear;
		margin: 2rem 0.5rem;
		zoom: 1;
		box-shadow: 0px 0px 5px rgb(205, 207, 212);
		&::after {
			content: '';
			display: block;
			clear: both;
			height: 0;
			visibility: hidden;
		}
		.post_left {
			@media screen and (max-width: 525px) {
				width: 100%;
				height: 12rem;
			}

			@media screen and (min-width: 526px) {
				width: 45%;
				height: 17.5rem;
			}
			width: 45%;
			float: left;
			overflow: hidden;
			transition: 0.3s all ease-in-out;
			img {
				width: 100%;
				height: 100%;
				transition: 0.3s all ease-in-out;
				object-fit: cover;
			}
		}
		.post_right {
			@media screen and (max-width: 525px) {
				width: 100%;
				height: 12rem;
				margin: 1rem 0;
			}

			@media screen and (min-width: 526px) {
				width: 55%;
				height: 17.5rem;
			}

			position: relative;
			float: right;
			display: flex;
			align-items: center;
			text-align: left;
			div {
				@media screen and (max-width: 1024px) {
					padding: 0 1rem;
				}
				@media screen and (min-width: 1025px) {
					padding: 0 2.5rem;
				}
				display: block;
				width: 100%;
				height: max-content;
			}
			&:hover {
				.title {
					color: #3399ff;
				}
			}
			.title {
				transition: 0.3s all;
				font-size: 1.5rem;
				line-height: 1.4;
				text-shadow: 0 0 1rem #fff;
			}

			.info {
				font-size: 0.875rem;
				color: #909399;
				line-height: 2;
				margin: 8px 0;

				span {
					margin-right: 6px;
				}
			}

			.description {
				font-size: 0.875rem;
				color: #333333;
				line-height: 2;
				// 一条龙省略
				text-overflow: ellipsis;
				white-space: normal !important;
				word-wrap: break-word;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				overflow: hidden;
			}
		}
		&:hover {
			.post_left img {
				transform: scale(1.1);
			}
			box-shadow: 0px 0px 25px rgb(205, 207, 212);
		}
	}
	.pager {
		font-size: 0.875rem;
		height: 2.25rem;
		line-height: 36px;
		margin: 32px 0;

		.pager_btn,
		span {
			display: inline-block;
			overflow: hidden;
			height: 2.25rem;
			line-height: 2.25rem;
			margin: 0 0.5rem;
			padding: 0 0.5rem;
			color: var(--app-text-color-2);
			transition: all 0.3s ease;

			i {
				color: var(--app-text-color-2);
			}
		}

		.pager_btn {
			width: 2.25rem;
		}

		.pager_btn:hover {
			color: var(--app-color-brand);

			i {
				color: var(--app-color-brand);
			}
		}
	}
}
</style>
