<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="Rindex>6 ? 'nav-shadow' : Rindex==1 ? '':'hasbg' ">
			<div class="container-fluid">
				<div class="site-branding">
					<router-link to="/Home">
						<a class="nav-link" href="/Home">Mizuhara Kiko</a>
					</router-link>
				</div>
				<button
					ref="toggle"
					@click="changeShow"
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<!-- 导航 -->
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto" :class="Rindex==1 ? 'fontwhite' : '' " @click="closeCollapse">
						<li class="nav-item nav-home">
							<router-link to="/Home"><a class="nav-link" href="/Home">首页</a></router-link>
						</li>
						<li class="nav-item nav-projects">
							<router-link to="/Projects"><a class="nav-link" href="/Projects">项目</a></router-link>
						</li>
						<li class="nav-item nav-notes">
							<router-link to="/Notes"><a class="nav-link" href="/Notes">笔记</a></router-link>
						</li>
						<li class="nav-item nav-about">
							<router-link to="/About"><a class="nav-link" href="/About">关于我</a></router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default {
	data() {
		return {
      isShow: false,
		};
  },
  computed:{
    Rindex(){
      return this.$store.state.routerIndex
    }
  },
  mounted(){
    
  },
	methods: {
		// 迷你导航栏点击后才允许收起
		changeShow() {
			this.isShow = true;
		},
		// 收起导航栏
		closeCollapse() {
			if (this.isShow) {
				this.$refs.toggle.click();
			}
			this.isShow = false;
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}
};
</script>

<style scoped lang="less">
.nav-shadow{
  box-shadow: 0px -5px 15px rgb(170, 169, 169);
  .navbar-nav{
    & > li{
      &:hover {
				a{
          color: rgb(77, 77, 77) !important;
				}
			}
    }
  }
}

.hasbg{
  @media screen and (min-width: 526px) {
    background-color: rgba(255,255,255,0.3);
  }
}

.navbar {
	margin: 0;
	padding: 2px 30px;
	@media screen and (max-width: 525px) {
    background-color: rgba(255,255,255,0.3);
    padding: 10px;
  }
	@media screen and (max-width: 525px) {
		
  }
  
	.site-branding {
		font-size: 1.4rem;		
		a{
			color: white;
			text-shadow: 0 0 2px black;
		}
	}
	.navbar-nav {
    
		& > li {
			display: inline-block;
			text-align: center;
			position: relative;
      margin: 0 2px;
      
			&::after {
				position: absolute;
				content: '';
				height: 2px;
				width: 90%;
				bottom: 0;
				background: #FFFFFF;
				left: 50%;
				transform: translate(-50%) scaleX(0);
				transition: 0.2s ease-out;
				opacity: 0;
			}
			&:hover {
				&::after {
					opacity: 1;
					transform: translate(-50%) scaleX(1);
				}
				a{
					color: white;
					text-shadow: 0 0 8px white;
				}
			}
			a {
				font-size: 16px;
        text-decoration: none;
        color: rgba(35,31,28,0.6);
        @media screen and (max-width: 525px) {
          color: rgba(35,31,28,0.7) !important;
        }
			}
		}
  }
  .fontwhite{
    @media screen and (min-width: 526px) {
      & > li {
        &:hover {
          &::after {
            opacity: 1;
            transform: translate(-50%) scaleX(1);
          }
          a{
            color: white !important;
            text-shadow: none;
          }
        }
        a{
          font-size: 16px;
          text-decoration: none;
          color: rgba(225,225,225,0.8) !important;
        }
      }
    }
  }
}
</style>
