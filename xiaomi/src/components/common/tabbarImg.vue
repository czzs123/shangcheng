<template>
    <div class="tabbar">
          <img :src="focused==true?selectedImg:normalImg" alt="" class="imgstyle">
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
     //子组件三个属性
       props:{
           focused:false,
           normalImg:{default:""},
           selectedImg:{default:""}
       }
   
}
</script>
<style scoped>
  .imgstyle{
      width:30px;
      height:30px;
  }
</style>
