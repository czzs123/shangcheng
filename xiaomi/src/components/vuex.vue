<template>
    <div>
               <h1>{{myCount}}</h1>
               <button @click="handleClick">点我</button>
               <button @click="handleClickAsyn">异步处理</button>
    </div>
</template>
<script>
export default {
    computed:{
          myCount:function(){
              console.log(this.$store.getters.count);
              return this.$store.getters.count;
          }
    },
    created(){
        //console.log(this.$store.get.count);
    },
    data(){
        return{
          
        }
    },
    methods:{
        handleClickAsyn(){
            //通过action进行异步的操作数据仓库的数据
            this.$store.dispatch("modityDelay");
        },
        handleClick(){
            //this.count++;
            this.$store.commit("modityCount");
        }
    }
}
</script>
<style scoped>
  
</style>
