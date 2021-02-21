import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerIndex:1,
		loading:true,
		display:false,
		bgArr:null,
		cTop:0
  },
  mutations: {
    changeRouterIndex(state,index) {
			state.routerIndex = index
		},
		changeLoading(state,isLoading){
			state.loading = isLoading
		},
		changeDisplay(state,isDisplay){
			state.display = isDisplay
		},
		changeBgArr(state,newBgArr){
			state.bgArr = newBgArr
		},
		changecTop(state,newcTop){
			state.cTop = newcTop
		}
  },
  actions: {
  },
  modules: {
  }
})
