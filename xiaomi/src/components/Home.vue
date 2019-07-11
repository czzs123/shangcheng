<template>
    <div class="home">
       

       <!--2.面板 引入组件-->
       <mt-tab-container class="page-tabbar-container" v-model ="active">
         <!--首页面板-->
         <mt-tab-container-item id="index">
            <div class="headersearch">
          <!--小米图标-->
          <div class="imgparent">
              <img src="../assets/小米.png" alt="" class="img">
          </div>
          <!--搜索框-->
          <div class="search">
              <input type="text" placeholder="搜索您想要的商品">
              <div class="searchimg"><span class="iconfont icon-RectangleCopy" ></span></div>
          </div>
          <!--我的-->
          <div class="me"><span class="iconfont icon-RectangleCopy7" @click="change(3)"></span></div>
         </div>
             <!--引入首页组件-->
            <board1></board1>
         </mt-tab-container-item>
         <!--购物车面板-->
         <mt-tab-container-item id="cart">
            <!--引入购物车组件-->
            <cart></cart>
         </mt-tab-container-item>
         <!--分类面板-->
         <mt-tab-container-item id="class">
            <h1>分类尚未实现</h1>
         </mt-tab-container-item>
         <!--我的面板-->
         <mt-tab-container-item id="me">
           <me></me>
         </mt-tab-container-item>
       
       </mt-tab-container>
      
       <!--3.底部导航栏 引入组件-->
       <mt-tabbar v-model="active" fixed><!--fixed 除了top 其他都是0px-->
            <!--首页-->
            <mt-tab-item id="index" @click.native="changeState(0)">
               <tabbarimg
                   :normalImg="require('../assets/tabbar/1-normal.png')"
                   :selectedImg="require('../assets/tabbar/1-selected.png')"
                   :focused="currentIndex[0].isSelect"
               ></tabbarimg>
               <div>首页</div>
            </mt-tab-item>

            <!--购物车-->
            <mt-tab-item id="cart" @click.native="changeState(1)">
               <tabbarimg
                   :normalImg="require('../assets/tabbar/2-normal.png')"
                   :selectedImg="require('../assets/tabbar/2-selected.png')"
                   :focused="currentIndex[1].isSelect"
               ></tabbarimg>
               <div>购物车</div>
            </mt-tab-item>

            <!--分类-->
            <mt-tab-item id="class" @click.native="changeState(2)">
               <tabbarimg
                   :normalImg="require('../assets/tabbar/3-normal.png')"
                   :selectedImg="require('../assets/tabbar/3-selected.png')"
                   :focused="currentIndex[2].isSelect"
               ></tabbarimg>
               <div>分类</div>
            </mt-tab-item>

            <!--我的-->
            <mt-tab-item id="me" @click.native="changeState(3)">
               <tabbarimg
                   :normalImg="require('../assets/tabbar/4-normal.png')"
                   :selectedImg="require('../assets/tabbar/4-selected.png')"
                   :focused="currentIndex[3].isSelect"
               ></tabbarimg>
               <div>我的</div>
            </mt-tab-item>
       </mt-tabbar>
    </div>
</template>
<script>
//引入子组件
import board1 from './common/board1.vue' //面板1
import cart from './common/cart.vue' //面板1
import tabbarImg from './common/tabbarImg.vue' //底部导航栏
import me from './common/me.vue' //底部导航栏
export default {
    //数据
    data(){
        return{
              //面板中显示子面板的id值
              active:"index",
              //创建数组 保存图片焦点状态
              currentIndex:[
                 {isSelect:true},
                 {isSelect:false},
                 {isSelect:false},
                 {isSelect:false}
               ]
        }
    },
    //方法
    methods:{
       change(i){
           this.active="me";
           for (let index = 0; index < this.currentIndex.length; index++) {
               //判断参数下标和数组下标是否一致 一致的话
               if(index==i){
                  this.currentIndex[i].isSelect=true;
               }else{
               //否则其他的全部为false
               this.currentIndex[index].isSelect=false;
               }
           }
       },
       changeState(i){
            console.log(this.active)
             for (let index = 0; index < this.currentIndex.length; index++) {
               //判断参数下标和数组下标是否一致 一致的话
               if(index==i){
                  this.currentIndex[i].isSelect=true;
               }else{
               //否则其他的全部为false
               this.currentIndex[index].isSelect=false;
               }
             }
       }
    },
    //注册组件
    components:{
            
                "board1":board1,
                "tabbarimg":tabbarImg,
                "cart":cart,
                "me":me,
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
