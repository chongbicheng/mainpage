<template>
	<div class="publish-block">
    <div class="punlish">
      <div class="board">
        <div class="title">发布</div>
        <div class="content">Publish</div>
      </div>
      <div class="content container animated fadeInUp">
        <div class="details">
          <!--    标题    -->
          <div class="label">标题 Title</div>
          <Input v-model="post.title" size="large" show-word-limit
                  placeholder="Input Title" :maxlength="100" />
          <!--    分类    -->
          <div class="label">分类 Category</div>
          <Select size="large" v-model="post.category">
            <Option v-for="item in categories" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <!--    标签    -->
          <div class="label">标签 Tags</div>
          <Tag v-for="tag in tags" :key="tag" size="large" :name="tag" closable @on-close="tagDelete">{{tag}}</Tag>
          <Input size="large" @on-search="tagAdd" search enter-button="Add"
                  placeholder="Add Tag" />
          <!--    推图    -->
          <!-- <div class="label">推图 Image</div>
          <Upload class="post_image"
            action="http://server.sykiko.cn/kiko/upload"
            :on-success="postImageUploadSuccess"
          >
            <Button type="primary" >选择封面</Button>
            <img :src="post.image">
          </Upload> -->
          <!-- <div style="margin-left:10px;">
            <input ref="imgLocal" class="input-loc-img" name="imgLocal" id="imgLocal" type='file' accept="image/*">
            <button @click="updateer">上传</button>
          </div> -->

          <!--    简介    -->
          <div class="label">简介 Description</div>
          <Input v-model="post.description" type="textarea" size="large" show-word-limit
                  placeholder="Input Description" :maxlength="1000" :autosize="{minRows: 8}" />
          <!--    正文    -->
          <div class="label">正文 Content</div>
          <Editor ref="editor"></Editor>
          <Button type="primary" long class="publish" size="large" v-on:click="publishPost">发布 Publish</Button>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	import Editor from "./Editor.vue";
	export default{
		data(){
			return{
				isshow:false,
				categories:[
					{
					  label: "程序人生",
					  value: "程序人生"
					},
					{
					  label: "日常琐事",
					  value: "日常琐事"
					},
					{
					  label: "闲谈",
					  value: "闲谈"
					}
				],
				tags: [],
				post:{
					title:'',
					category:'程序人生',
					tag1:'',
					tag2:'',
					tag3:'',
					image: "https://c-ssl.duitang.com/uploads/item/201604/23/20160423093539_JfyH2.thumb.1000_0.jpeg",
					description: "",
					content: ""
				}
			}
		},
		components:{
			Editor
		},
		methods:{
			// 标签赋值
			toEachTag(){
				this.post.tag1='';
				this.post.tag2='';
				this.post.tag3='';
				if(this.tags.length>=1){
				  this.post.tag1=this.tags[0]
				  if(this.tags.length>=2){
					  this.post.tag2=this.tags[1]
					  if(this.tags.length>=3){
						  this.post.tag3=this.tags[2]
					  }
				  }
				}
			},
			// 添加标签
			tagAdd(value) {
			  console.log(value);
			  if (value === "") {
			    return
			  }
			  if (!this.tags.length) {
			    this.tags = []
			  }
			  if (this.tags.length >= 3) {
			    this.$Message.warning("标签数量已满三个，无法添加。");
			  } else if (this.tags.indexOf(value) > -1) {
			    this.$Message.warning("此标签已存在，无法添加。");
			  } else {
			    this.tags.push(value);
			  }
			  this.toEachTag();
			  // console.log(this.tags)
			},
			
			// 删除标签
			tagDelete(event, name) {
			  const index = this.tags.indexOf(name);
			  this.tags.splice(index, 1);
			  this.toEachTag();
			},
			
			// 上传图片
			postImageUploadSuccess(res, file) {
			  // console.log(res);
			  // console.log(file);
			  if (res.errno === 0) {
			    this.post.image = res.data[0];
			    this.$Message.success("推图上传成功");
			  } else {
			    this.$Message.error("推图上传失败");
			  }
			},
			
			// 发布文章
			publishPost() {
			  // eslint-disable-next-line no-debugger
			  this.post.content = this.$refs.editor.editor.txt.html();
			  console.log(this.post.content)
			  this.$axios.post('http://server.sykiko.cn/kiko/publish', this.post).then(response => {
			    this.$Message.success("发布成功");
			    // console.log(response);
			  }).catch(function (error) {
			    console.log(error);
			  });
      },
      
      //url 七牛部署的地址
      // bucket参数为七牛的空间名 
      // this.$refs.imgLocal.files[0] 为上传的图片的名包含路径
      // res返回数据为一个key,通过key可以获取上传到七牛上的图片地址 
      // 图片上传凭证
      updateer() {
      //  bucket:‘public-image’(可直接拼接图片地址)
        this.$axios.post('http://qmfx36mhz.hn-bkt.clouddn.com/', { bucket: 'sykiko' }).then((res) => {
          console.log(res)
          const uploadToken = res.data.upToken;
          var data = new FormData();
          data.append('token', uploadToken);
          data.append('file', this.$refs.imgLocal.files[0]);
          this.$axios({
            method: 'POST',
            url: 'http://qmfx36mhz.hn-bkt.clouddn.com/',
            data: data,
            onUploadProgress: function (progressEvent) {
              var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            },
          }).then((res) => {
            //  `http://publicimage.xq5.com/${response.data.key}`; （若bucket 参数为public-image则不需要下一步的图片地址获取可直接使用http://publicimage.xq5.com/ + ‘res.data.key’，拼接图片地址）
            console.log(res.data.key)
          })
        });
      },

		}
	}
</script>

<style scoped lang="less">
	.publish-block{
		padding: 0;
		.punlish{		
			.board{
				height: 36vh;
				color: white;
				margin: 0 auto;
				background-image: url(https://sykiko-mainpage.oss-cn-hangzhou.aliyuncs.com/mainpage/bbb.jpg);
				background-position: center;
				background-size: cover;
				background-attachment: fixed;
				text-align: center;
				text-shadow: 0 0 10px white;
				padding-top: 14vh;
				.title {
				  font-size: 2.5rem;
				  font-weight: bold;
				}
				.content {
				  font-size: 1.5rem;
				}
			}
			&>.content{
				margin: 2rem auto;
				padding: 1rem;
				text-align: left;
				box-shadow: 0px 0px 5px rgb(205,207,212);
				.details{
					.label{
						margin: 0.5rem 0;
						font-size: 1rem;
					}
					.post_image{
						width: 100%;
						img{
							margin-top: 1rem;
							width: 100%;
						}
					}
				}
			}
		}
	}
	
</style>
