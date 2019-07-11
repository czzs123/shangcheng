<template>
    <div>
         <h1>代做事项列表</h1>
         <input type="text" placeholder="请输入代做事项" v-model="myvalue">
         <button @click="addtodolist">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myvalue:"",

        }
    },
    methods:{
        addtodolist:function(){
            //通知数据仓库 触发add这个函数
            //this.$store.commit("add",this.myvalue);
               this.$store.dispatch("modityH",this.myvalue);
        }
    }
}
</script>
<style scoped>
  
</style>
