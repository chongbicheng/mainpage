<template>
	<div>
		<TopBg></TopBg>
		<div class="container second-block animated fadeInUp">
			<!-- Projects -->
			<div class="row projects">
				<!-- 魅族商城首页 -->
				<div class="meizu col-md-4 col-sm-11 col-12 animated fadeInUp">
					<div class="meizu-img"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/meizu1.jpg" /></div>
					<div class="meizu-hover" :class="{ show: descShow, hide: descHide }" @mouseenter="meizuEnter()" @mouseleave="meizuLeave()">
						<div class="meizu-desc">
							<p>使用html5、css3、jQuery、gulp等技术制作的pc端静态网页</p>
							<p>
								PS:网站底部内容未添加
								<br />
								图片资源保存在服务器上，加载较慢
							</p>
							<p>Finish Time : 2018.12</p>
							<p>更新: 图片已更换为阿里云oss储存。加载速度大幅提升</p>
						</div>
					</div>
					<div class="meizu-title">
						<div class="title-text">
							<h3 style="color: rgb(51,51,51);font-weight: 400;letter-spacing: 2px;">魅族商城首页</h3>
							<br />
							<p><a href="http://meizu.sykiko.cn" target="_blank">Take a look</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-1 col-sm-1 col-0"></div>
				<!-- uniapp项目 -->
				<div class="uniapp col-md-7 col-sm-11 col-12 animated zoomIn" v-show="!detailShow">
					<div class="uniapp-img">
            <img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uniapp-1.jpg" />
						<img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uniapp-5.jpg" />
						<img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uniapp-3.jpg" />
            
					</div>
					<div class="uniapp-title">
						<div class="title-text">
							<h3 style="color: rgb(51,51,51);font-weight: 400;letter-spacing: 2px;">交友类uniapp</h3>
							<br />
							<p @click="changeDetailShow"><a href="javascript:;">查看详情内容</a></p>
						</div>
					</div>
				</div>
				<div class="detail col-md-7 col-sm-11 col-12 animated zoomIn" v-show="detailShow">
					<!-- Swiper -->
					<div class="swiper-container">
						<div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-1.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-2.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-3.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-4.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-5.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-6.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-7.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-8.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-9.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-10.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-11.jpg" /></div>
							<div class="swiper-slide"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/uni-12.jpg" /></div>
						</div>
						<!-- Add Pagination -->
						<div class="swiper-pagination" slot="pagination"></div>
					</div>
					<div class="uni-desc">{{ newDesc }}</div>
					<div class="uni-return"><p @click="changeDetailShow"><a href="javascript:;">返回预览界面</a></p></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import TopBg from '@/components/Top-bg/Top-bg.vue';
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';
export default {
	data() {
		return {
			descShow: false,
			descHide: true,
			detailShow: null,
			display: false,
			loading: true,
			aIndex: 0,
			newDesc: '用户可以发布文章到不同话题，有顶、踩、评论和转发功能',
			description: [
				'用户可以发布文章到不同话题，有顶、踩、评论和转发功能',
				'可以关注用户和搜索文章、发布文章',
				'个人空间内可以拉黑和进入聊天页，展示该用户个人信息等内容',
				'好友界面可以查看已关注的人和粉丝',
				'小纸条界面可以接收其他用户发来的消息并提醒',
				'可以跟其他用户进行实时聊天',
				'文章详情页可以查看大图，顶、踩、转发、评论、回复',
				'话题页可以搜索、进入不同的话题',
				'文章详情页可以查看大图，顶、踩、转发、评论、回复',
				'动态页面可以展示已关注用户的发表内容',
				'浏览历史可以快速进入文章详情',
				'设置界面可以修改头像和个人信息等内容'
			]
		};
	},
	components: {
		TopBg
	},
	watch: {
		aIndex: function() {
			this.newDesc = this.description[this.aIndex];
		}
	},
	created() {
		this.$store.commit('changeRouterIndex', 2);
	},
	mounted() {
		// this.unishow();
		this.$store.commit('changeRouterIndex', 2);
		this.$store.commit('changeLoading', true);
		this.$store.commit('changeDisplay', false);
		this._initSwiper();
		this.detailShow = false;
		this.$Loading.update(0);
	},
	methods: {
		//创建swiper
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal' /*横向滑动*/,
				loop: false,
				observer: true,
				observeParents: true,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			});
			mySwiper.on('slideChangeTransitionEnd', () => {
				this.aIndex = mySwiper.activeIndex;
			});
		},
		//魅族商城hover事件
		meizuEnter() {
			this.descShow = !this.descShow;
			this.descHide = !this.descHide;
		},
		meizuLeave() {
			this.descShow = !this.descShow;
			this.descHide = !this.descHide;
		},
		//uniapp展示
		changeDetailShow() {
			this.detailShow = !this.detailShow;
		}
	}
};
</script>

<style scoped lang="less">
.second-block {
	margin-top: 2rem;
	padding: 0 1rem;
	.projects {
		padding: 20px;
		.meizu {
      animation-delay: 0.3s;
			text-align: center;
			position: relative;
			background-color: rgb(255, 255, 255);
			overflow: hidden;
			padding: 10px;
			.meizu-img {
				img {
					width: 100%;
				}
				height: 420px;
				overflow: hidden;
			}
			.show {
				opacity: 1;
			}
			.hide {
				opacity: 0;
			}
			.meizu-hover {
				position: absolute;
				top: 0;
				width: 100%;
				height: 440px;
				background-color: rgb(30, 45, 113);
				overflow: hidden;
				transition: 0.35s ease-out;
				z-index: 2;
				.meizu-desc {
					padding: 100px 30px 30px 30px;
					font-size: 20px;
					color: rgb(222, 222, 222, 0.9);
					font-weight: 600;
				}
			}
			.meizu-title {
				margin-top: 30px;
				height: 100px;
				.title-text {
					p {
						font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
						font-size: 16px;
						line-height: 16px;
						font-style: italic;
					}
					a:link,
					a:visited,
					a:hover,
					a:active {
						color: rgb(232, 170, 143);
						font-weight: 600;
					}
					a:link {
						text-decoration: underline;
					}
				}
			}
		}
		.uniapp {
      animation-delay: 0.3s;
			text-align: center;
			position: relative;
			background-color: rgb(255, 255, 255);
			overflow: hidden;
			padding: 10px;
			user-select: none;
			-ms-user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			.uniapp-img {
				height: 420px;
				overflow: hidden;
				img {
					height: 100%;
				}
			}
			.uniapp-title {
				margin-top: 30px;
				height: 100px;
				.title-text {
					p {
						font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
						font-size: 16px;
						line-height: 16px;
						font-style: italic;
					}
					a:link,
					a:visited,
					a:hover,
					a:active {
						color: rgb(232, 170, 143);
						font-weight: 600;
					}
					a:link {
						text-decoration: underline;
					}
				}
			}
		}
		.detail {
			.swiper-container {
				width: 100%;
				height: 465px;
				margin-top: 20px;
				// margin: 0;
				.swiper-wrapper {
					width: 350px;
					height: 420px;
					.swiper-slide {
						text-align: center;
						font-size: 1.125rem;
						// background: #fff;

						/* Center slide text vertically */
						display: -webkit-box;
						display: -ms-flexbox;
						display: -webkit-flex;
						display: flex;
						-webkit-box-pack: center;
						-ms-flex-pack: center;
						-webkit-justify-content: center;
						justify-content: center;
						-webkit-box-align: center;
						-ms-flex-align: center;
						-webkit-align-items: center;
						align-items: center;
						img {
							height: 100%;
							// margin-bottom: 2.25rem;
							position: absolute;
							border: 1px solid gray;
							border-radius: 10px;
						}
					}
				}
			}
			.uni-desc {
				margin-top: 0.8rem;
				font-size: 1rem;
			}
			.uni-return{
				margin-top: 1rem;
				font-size: 1rem;
				p {
					font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
					font-size: 16px;
					line-height: 16px;
					font-style: italic;
				}
				a:link,
				a:visited,
				a:hover,
				a:active {
					color: rgb(232, 170, 143);
					font-weight: 600;
				}
				a:link {
					text-decoration: underline;
				}
			}
		}
		
	}
}
</style>
