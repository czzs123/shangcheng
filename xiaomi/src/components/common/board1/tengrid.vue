<template>
    <div class="tengrid">
          <div class="item"><img src="../../../assets/grid/1.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/2.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/3.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/4.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/5.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/6.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/7.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/8.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/9.png" alt=""></div>
          <div class="item"><img src="../../../assets/grid/10.png" alt=""></div>  
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
   .tengrid{
       display:flex;
       justify-content: space-between;
       align-items: center;
       flex-flow: wrap;
       width:411px;
   }
   .tengrid .item{
       box-sizing: border-box;
       width:20%;
   }
    .tengrid .item img{
        width:100%;
    }
</style>
