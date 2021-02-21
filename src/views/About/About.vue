<template>
	<div id="fourth-block">
		<TopBg></TopBg>
		<div class="container fourth-block animated fadeInUp wow" >
			<Card>
				<div class="card">
					<p>Hi，我是水原kiko，一只95后前端开发者，现位于江苏无锡。</p>
					<br />
					<p>建这个人网站的目的是收藏一些知识和记录平时学习和工作中遇到的问题，方便日后查阅。</p>
					<br />
					<p>都说好记性不如烂笔头，学习了许久之后发现，确实如此。</p>
					<br />
					<p>作为前端开发，笔记更为重要。因为前端的知识体系十分的杂，
					一个专业的web开发必须要具备UI、用户体验、浏览器、网络、服务器等知识。
					对知识的广度、深度都有很大的考验。需要不断的去学习，希望自己能够坚持下去。</p>
					<br />
					<br />
					<div class="contact">有志同道合的,欢迎交个朋友</div>
					<br />
					<div class="contact">Email: 747820767@qq.com</div>
					<br />
					<div class="wximg"><img src="https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/wxshare.jpg"/></div>
					<br />
					<div class="contact">微信二维码</div>
				</div>
			</Card>
		</div>
	</div>
</template>

<script>
import TopBg from '@/components/Top-bg/Top-bg.vue';
export default {
	data() {
		return {};
	},
	components: {
		TopBg
	},
	created() {
		this.$store.commit('changeRouterIndex', 4);
	},
	mounted() {
		this.$store.commit('changeRouterIndex', 4);
		this.$store.commit('changeLoading', true);
		this.$store.commit('changeDisplay', false);
	}
};
</script>

<style scoped lang="less">
	#fourth-block{
		position: relative;
		.fourth-block{
      animation-delay: 0.35s;
			// z-index: 100;
			position: relative;
			top: -6rem;
			padding: 0 1rem;
			.card{
				padding: 1rem 1rem;
				text-align: left;
				line-height: 1.5rem;
				font-size: 1rem;
				border: 0;
				.contact{
					text-align: center;
					color: rgb(127,127,127);
				}
				.wximg{
					margin: auto;
					img{
						width: 12.5rem;
					}
				}
			}
		}
	}

</style>
