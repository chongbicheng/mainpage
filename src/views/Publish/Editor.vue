<template>
	<div class="editor">
		<div id="wangEditor"></div>
	</div>
</template>

<script>
	import E from 'wangeditor';
  
	export default{
		data() {
			return {
				editor: null
			};
		},
		mounted() {
			
			this.editor = new E('#wangEditor');
			
			// 自定义菜单配置
			this.editor.customConfig.menus = [
			  'head',  // 标题
			  'bold',  // 粗体
			  'fontSize',  // 字号
			  'fontName',  // 字体
			  'foreColor',  // 文字颜色
			  'underline',  // 下划线
			  'strikeThrough',  // 删除线
			  'justify',  // 对齐方式
			  'quote',  // 引用
			  'emoticon',  // 表情
			  'image',  // 插入图片
			  'link',  // 插入链接
			  'table',  // 表格
			  'code'  // 插入代码
			];
			// 配置颜色
			this.editor.customConfig.colors = [
			  '#2d8cf0',
			  '#5cadff',
			  '#2b85e4',
			  '#ffffff',
			  '#2db7f5',
			  '#19be6b',
			  '#ff9900',
			  '#ed4014',
			  '#17233d',
			  '#515a6e',
			  '#808695',
			  '#c5c8ce'
			];
			// 添加表情
			this.editor.customConfig.emotions = [
			  {
			    title: '贴吧',
			    type: 'image',
			    content: [
			      {alt: '[呵呵]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f01.png'},
			      {alt: '[哈哈]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f02.png'},
			      {alt: '[吐舌]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f03.png'},
			      {alt: '[啊]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f04.png'},
			      {alt: '[酷]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f05.png'},
			      {alt: '[怒]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f06.png'},
			      {alt: '[开心]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f07.png'},
			      {alt: '[汗]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f08.png'},
			      {alt: '[泪]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f09.png'},
			      {alt: '[黑线]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f10.png'},
			      {alt: '[鄙视]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f11.png'},
			      {alt: '[不高兴]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f12.png'},
			      {alt: '[真棒]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f13.png'},
			      {alt: '[钱]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f14.png'},
			      {alt: '[疑问]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f15.png'},
			      {alt: '[阴险]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f16.png'},
			      {alt: '[吐]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f17.png'},
			      {alt: '[咦]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f18.png'},
			      {alt: '[委屈]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f19.png'},
			      {alt: '[花心]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f20.png'},
			      {alt: '[呼~]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f21.png'},
			      {alt: '[笑眼]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f22.png'},
			      {alt: '[冷]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f23.png'},
			      {alt: '[太开心]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f24.png'},
			      {alt: '[滑稽]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f25.png'},
			      {alt: '[勉强]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f26.png'},
			      {alt: '[狂汗]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f27.png'},
			      {alt: '[乖]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f28.png'},
			      {alt: '[睡觉]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f29.png'},
			      {alt: '[惊哭]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f30.png'},
			      {alt: '[升起]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f31.png'},
			      {alt: '[惊讶]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f32.png'},
			      {alt: '[喷]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f33.png'},
			      {alt: '[爱心]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f34.png'},
			      {alt: '[心碎]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f35.png'},
			      {alt: '[玫瑰]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f36.png'},
			      {alt: '[礼物]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f37.png'},
			      {alt: '[彩虹]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f38.png'},
			      {alt: '[星星月亮]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f39.png'},
			      {alt: '[太阳]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f40.png'},
			      {alt: '[钱币]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f41.png'},
			      {alt: '[灯泡]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f42.png'},
			      {alt: '[茶杯]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f43.png'},
			      {alt: '[蛋糕]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f44.png'},
			      {alt: '[音乐]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f45.png'},
			      {alt: '[haha]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f46.png'},
			      {alt: '[胜利]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f47.png'},
			      {alt: '[大拇指]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f48.png'},
			      {alt: '[弱]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f49.png'},
			      {alt: '[OK]', src: '//tb2.bdstatic.com/tb/editor/images/face/i_f50.png'}
			    ]
			  }];
			
			
			this.editor.customConfig = {
				debug: true,//开启debug调试
				// uploadImgServer: 'http://server.sykiko.cn/kiko/upload',//配置上传图片的接口api
				uploadImgMaxSize: 5 * 1024 * 1024,//图片大小限制为 5M
				uploadImgMaxLength: 1,// 限制一次最多上传 10 张图片
				uploadFileName: 'file',//配置文件参数名（这个参数必需配置，后台用这个值接收图片）
				showLinkImg:false  //隐藏网络图片tab
      };

      // 上传图片
      // this.editor.customConfig.qiniu = true
      // 初始化七牛上传
      // this.uploadInit()


			// this.editor.customConfig.customUploadImg = (file, insert) => {
      // // files 是 input 中选中的文件列表
      // // insert 是获取图片 url 后，插入到编辑器的方法
      //   let param = new FormData(); // 创建form对象
      //   param.append('files', file[0]);
      //   const url = 'qmfx36mhz.hn-bkt.clouddn.com'; // url是上传图片的路径
      //   // 一般项目中都会封装好发送请求得方法,我这为了通用直接用axios
      //   this.$axios.post(url, { bucket: 'sykiko' }).then(res => {
      //     console.log(res.data.data)
      //     // res是上传成功后返回的数据,返回的数据中需要有上传图片的路径,
      //     // 通过insert方法将路径传入,即可将图片在富文本中插入
      //     if (res.status == 200) {
      //     // 我这返回的是JSON数据,需要解析
      //       // const data = JSON.parse(res.data);
      //       const imgUrl = res.data.data[0]; // 上传后的图片路径
      //       // const imgUrl = 'http://server.sykiko.cn/public/images/40bg2.jpg';
      //       // 上传代码返回结果之后，将图片插入到编辑器中
      //       insert(imgUrl);
      //     }
      //   });
      // };


			this.editor.customConfig.uploadImgHooks = {
				success: function (xhr, editor, result) {
					console.log('图片上传并返回结果,图片插入成功')
				},
				fail: function (xhr, editor, result) {
					console.log('图片上传并返回结果，但图片插入错误')
				},
				error: function (xhr, editor) {
					console.log(xhr+'图片上传出错')
				},
				timeout: function (xhr, editor) {
					console.log('图片上传超时')
				},
				customInsert: function (insertImg, result, editor) {
					console.log(' 图片上传并返回结果');
					var url = result.url[0];
					insertImg(url)
				}
			};

			this.editor.create();
					
    },
    methods:{

    }
	}
</script>

<style scoped lang="less">
	.editor{
		overflow: hidden;
		
	}
</style>
