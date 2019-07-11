<template>
    <div class="container">
        <div class="undergrid">
          <div class="son1">
              <img src="../../../assets/undergrid/1.png" alt="" class="img1">
          </div>
          <div class="son2">
             <img src="../../../assets/undergrid/2.png" alt="" class="img2">
             <img src="../../../assets/undergrid/3.png" alt="" class="img3"> 
          </div>
        </div>    
        <div class="son3"><img src="../../../assets/undergrid/4.png" alt=""></div>
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
  .container{
      width:100%;
  }
  .container .undergrid{
      width:100%;
      display:flex;
      justify-content:space-between;
      align-items: center;
  }
  .undergrid div{
      width:50%;
      box-sizing: border-box;
  }
  .son1>img,.son2>img{
      width:100%;
  }
  .container .son3,.container .son3>img{
      width:100%;
  }
</style>
