<template>
    <div class="container">
         <img src="../../../assets/dayselection/1.png" alt="">
         <div class="dayslection">
              <div>
                  <img src="../../../assets/dayselection/2.png" alt="">
                  <div>
                      <h6>小米8青春版</h6>
                      <h6>潮流旗舰机器 夜景模式</h6>
                      <h6>¥1999</h6>
                  </div>
              </div>
              <div>
                  <img src="../../../assets/dayselection/2.png" alt="">
                  <div>
                      <h6>小米8青春版</h6>
                      <h6>潮流旗舰机器 夜景模式</h6>
                      <h6>¥1999</h6>
                  </div>
              </div>
              <div>
                  <img src="../../../assets/dayselection/2.png" alt="">
                  <div>
                      <h6>小米8青春版</h6>
                      <h6>潮流旗舰机器 夜景模式</h6>
                      <h6>¥1999</h6>
                  </div>
              </div>
              <div>
                  <img src="../../../assets/dayselection/2.png" alt="">
                  <div>
                      <h6>小米8青春版</h6>
                      <h6>潮流旗舰机器 夜景模式</h6>
                      <h6>¥1999</h6>
                  </div>
              </div>
         </div>
         <div class="more" @click="serach">查看更多产品>>></div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        serach(){
            this.$router.push('/goodlist');
        }
    }
}
</script>
<style scoped>
  .container{
      width:100%;
  }
  .container img{
      width:100%;
  }
  .container .dayslection{
      width:100%;
      display:flex;
      justify-content: space-between;
      flex-flow: wrap;
      align-items: center;
  }
  .dayslection>div{
      box-sizing: border-box;
       width:49%;
  }
  .container .more{
      border-top:1px solid rgba(0,0,0,0.5);
      margin-top:5px;
      padding:10px;
      text-align: center;
      vertical-align: middle;
      font-size: 24px;
      font-weight: 400;
  }
</style>
