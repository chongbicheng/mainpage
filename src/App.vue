<template>
	<div id="app">
		<loading ref='loading' :loading="loading"></loading>
		<div id="app-wrap" v-show="display">
			<navBar></navBar>
			<div class="site-content"><router-view /></div>
			<vueToTop type="8" duration="700" size="34"></vueToTop>
			<foot></foot>
		</div>
    <live2d
      v-if="fullWidth>525 && storeRouterIndex!=1"
      :style="style"
      :model="[1, 53]"
      :direction="direction"
      :size="size"
    ></live2d>
	</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script>
import navBar from '@/components/Navbar/Navbar.vue';
import TopBg from '@/components/Top-bg/Top-bg.vue';
import home from '@/views/Home/Home.vue';
import projects from '@/views/Projects/Projects.vue';
import notes from '@/views/Notes/Notes.vue';
import about from '@/views/About/About.vue';
import foot from '@/components/Foot/Foot.vue';
import publish from '@/views/Publish/Publish.vue';
import post from '@/views/Post/Post.vue';
import loading from '@/components/Loading/Loading.vue';

import live2d from 'vue-live2d'
import $ from 'jquery';
import vueToTop from 'vue-totop';
// import '@/assets/js/main.js';
// import '@/assets/js/canvas-nest.js'
import '@/assets/js/jquery.bootstrap-autohidingnavbar.min.js';

export default {
	name: 'App',
	components: {
		navBar,
		TopBg,
		home,
		projects,
		notes,
		about,
		foot,
		publish,
		post,
    loading,
    live2d
  },
	data() {
		return {
			fullWidth: document.documentElement.clientWidth,
			transitionName: 'fade',
      // 看板娘配置
      direction: 'right',
      style: 'position: fixed; bottom: 0; left: 0;',
      width: 400,
      height: 400,
      size: 330,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      }
		};
	},
	computed: {
		loading() {
			return this.$store.state.loading; //需要监听的数据
		},
		display() {
			return this.$store.state.display; //需要监听的数据
    },
    storeRouterIndex(){
      return this.$store.state.routerIndex;
    }
  },
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
		// $('.fixed-top').autoHidingNavbar({});
		this.$refs.loading.isLoading()
		// console.log(this.fullWidth)
	},
	updated() {
		this.$refs.loading.isLoading(this.$store.state.bgArr)
	},
	methods: {
		handleScroll() {
			let scrollTop = document.documentElement.scrollTop;
			let scrollHeight = document.documentElement.scrollHeight;
			let innerHeight = window.innerHeight;
			this.$Loading.update((scrollTop * 100) / (scrollHeight - innerHeight));
    },
	}
};
</script>

<style lang="less">
#app {
	font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	#app-wrap {
    position: relative;
		min-height: 100vh;
		display: flex;
    flex-direction: column;
    justify-content: space-between;
	}
	.site-content {
    position: relative;
		flex: 1;
	}
	a {
		text-decoration: none;
	}
}
* {
	padding: 0;
	margin: 0;
}
body {
	width: 100%;
	overflow-x: hidden;
	font-size: 1rem;
}

/* table 样式 */
table {
	border-top: 1px solid #ccc;
	border-left: 1px solid #ccc;
}

table td,
table th {
	border-bottom: 1px solid #ccc;
	border-right: 1px solid #ccc;
	padding: 3px 5px;
}

table th {
	border-bottom: 1px solid #ccc;
	text-align: center;
}

/* blockquote 样式 */
html blockquote {
	display: block;
	border-left: 5px solid var(--app-color-brand);
	padding: 5px 10px;
	margin: 10px 0;
	line-height: 1.4;
	font-size: 14px;
	background-color: #f1f1f1;
}

/* code 样式 */
html code {
	display: block;
	background-color: #f1f1f1;
	border-radius: 2px;
	padding: 10px 10px;
	margin: 0 3px;
	line-height: 1rem;
	font-size: 1rem;
}

html pre {
	display: block;
	padding: 1rem 0;
}
</style>
