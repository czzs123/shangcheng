<template>
    <div class="container">
        <div class="login">
           <img src="../../assets/login/1.png" alt="">
           <h6  @click="openConfirm">{{text}}</h6>
        </div>
        <div class="order">
              <span>的我订单</span>
              <span>全部订单></span>
        </div>
        <div class="orderchange">
             <div>
                 <span class="iconfont icon-RectangleCopy1"></span>
                 <h6>待付款</h6>
             </div>
             <div>
                 <span class="iconfont icon-RectangleCopy4"></span>
                 <h6>待收货</h6>
             </div>
             <div>
                 <span class="iconfont icon-RectangleCopy5"></span>
                 <h6>退换修</h6>
             </div>
        </div>
        <div style="height:15px; background:rgba(0,0,0,0.1);"></div>
        <ul class="set">
            <li>
                <span class="iconfont icon-RectangleCopy7" ></span>
                <div>会员中心</div>
                <h2>></h2>
            </li>
            <li>
                <span class="iconfont icon-RectangleCopy2" ></span>
                <div>会员优惠</div>
                <h2>></h2>
            </li>
            <div style="height:15px; background:rgba(0,0,0,0.1);"></div>
            <li>
                <span class="iconfont icon-RectangleCopy3" ></span>
                <div>服务中心</div>
                <h2>></h2>
            </li>
            <li>
                <span class="iconfont icon-RectangleCopy4" ></span>
                <div>小米之家</div>
                <h2>></h2>
            </li>
                   <div style="height:15px; background:rgba(0,0,0,0.1);"></div>
            <li>
                <span class="iconfont icon-RectangleCopy5" ></span>
                <div>F码通道</div>
                <h2>></h2>
            </li>
            <li>
                <span class="iconfont icon-RectangleCopy6" ></span>
                <div>设置</div>
                <h2>></h2>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:"注册/登录",
        }
    },
    mounted(){
       var n = sessionStorage.getItem("uname");
       console.log(n);
       if(n){
           this.text="欢迎"+n;
           //方法释放掉
           this.openConfirm=null;
       }
    },
    methods:{
        openConfirm(){
         //确认提示框:确认 取消
         this.$messagebox({
           title:"协议声明",
           message:"《小米商城用户协议》《账号协议》《隐私政策》",
           showConfirmButton:true,
           showCancelButton:true,
         }).then(action=>{
             console.log(action);
             if(action=="confirm"){
               this.$router.push("/login");
             }
         });
         //then回调函数
       
        }
    },
}
</script>
<style scoped>

  .container{
      width:100%;
      background:#F5F5F5 ;
  }
  .container .login{
      width:100%;
      height:100px;
      background:orange;
      position:relative;
  }
  .container .login>img{
      width:50px;
      position: absolute;
      top:26%;
      left:9%;
  }
  .container .login>h6{
      position: absolute;
      color:white;
      font-size:16px;
      top:39%;
      left:23%;
      cursor: pointer;
  }
  .container .order{
        background:white;
        width:100%;
        height:46px;
  }
  .order>span:nth-child(1){
      display:inline-block;
      font-size:22px;
      font-weight: 300;
      margin-top:2%;
      margin-left:7%;
  }
  .order>span:nth-child(2){
      display:inline-block;
      font-size:16px;
      font-weight: 300;
      margin-top:2%;
      margin-left:50%;
  }
  .container .orderchange{
      height:97px;
      background:oldlace;
      display:flex;
      justify-content:space-around;
      align-items: center;
  }
  .set{
      width:100%;
     
      list-style: none;
      padding-left: 0px;
  }
  .set>li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:60px;
      background:white;
  }
  .set>li>div{
      font-size: 20px;
      font-weight: 300;
      margin-left:-40%;
  }
</style>