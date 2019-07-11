<template>
    <div class="headersearch">
          <!--小米图标-->
          <div class="imgparent">
              <img src="../../../assets/小米.png" alt="" class="img">
          </div>
          <!--搜索框-->
          <div class="search">
              <input type="text" placeholder="搜索您想要的商品">
              <div class="searchimg"><span class="iconfont icon-RectangleCopy" @click="search"></span></div>
          </div>
          <!--我的-->
          <div class="me"><span class="iconfont icon-RectangleCopy7" @click="searchme"></span></div>
    </div>
</template>
<script>
export default {
    name:"header",
    

    data(){
        return{
        }
    },
    methods:{
        search(){
            alert("该功能尚未实现,因为我只是个低级前端")
            //this.$router.push("/home")
        },
        searchme(){
            //this.$router.push("/me")
            console.log(1)
            this.active="me";
           
        }
    }
}
</script>
<style scoped>
/*header*/
   .headersearch{
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:999;
      height:48px;
      width:100%;
      display:flex;
      justify-content: space-between;
      background:rgb(242, 242, 242)
   }
/*图标*/
   .headersearch .imgparent{
       padding:10px 10px;
       width:10%;
   }
   .img{
        margin-top:6px;
       height:20px;
   }
/*搜索*/
   .search{
       margin-top:2%;
       width:80%;
       position:relative;
   }
   .search>input{
       width:100%;
       height:80%;
       border-radius:5px;
       font-size:16px;/*改变光标大小*/
       border:1px solid rgba(0,0,0,0.1);
       padding-left:10px;
   }
   /*搜索图标*/
   .searchimg{
        position:absolute;
        top:2px;
        left:268px;
   }
/*我的*/
   .me{
       width:10%;
       padding:10px;
   }
   .me>span{
       margin-left:11px;
       
   }
</style>
