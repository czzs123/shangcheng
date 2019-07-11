import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储数据
  state: {
      count:1,
      list:[]
  },
  //
  getters:{
    count:function(state){
      return state.count;
    },
    list:function(state){
      return state.list;
    }
  },
  //修改状态 仓库里面的值(同步)
  mutations: {
    modityCount:(state)=>{
      state.count++;
    },
    add:(state,value)=>{
      console.log(state);
      console.log("准备添加"+value);
      state.list.push(value);
      console.log(state.list);
    },
    delete:(state,index)=>{
      console.log("准备从数组删除一个数据");
      state.list.splice(index,1);

    },
  },
  //异步调用
  actions: {
    modityDelay:(context)=>{
      setTimeout(()=>{
         context.commit("modityCount");
      },2000)
    },
    modityH:(context,value)=>{
      setTimeout(()=>{
        context.commit("add",value);
      },2000)
    }
  }
})
