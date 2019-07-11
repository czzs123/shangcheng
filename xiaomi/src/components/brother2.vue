<template>
    <div>
              <h1>我是传递过来的{{myid}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
             myid:0 //初始化
        }
    },
    created(){
        var id = this.$route.params.lid;
        console.log(id);
         this.myid=id

         
    },
}
</script>
<style scoped>
  
</style>