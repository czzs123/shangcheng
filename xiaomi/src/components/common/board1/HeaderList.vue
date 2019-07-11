<template>

    <div class="headerlist">
          <div class="button"><div id="d1"><span class="iconfont icon-RectangleCopy1" style="display:block;"></span></div></div>
          <!--展开列表-->
          <div class="openlist" id="d2">
            <div style="width:100px;height:30px;margin-top:10px;margin-left:10px;">全部</div>
            <div class="allList">
                  <div>推荐</div>
                  <div>小米</div>
                  <div>手机</div>
                  <div>智能</div>
                  <div>电视</div>
                  <div>笔记</div>
                  <div>家电</div>
                  <div>生活周边</div>
            </div>
          </div>
           <!--有overflow-x:auto的列表-->
          <div class="list">
               <ul>
                  <li>推荐</li>
                  <li>小米618</li>
                  <li>手机</li>
                  <li>智能</li>
                  <li>电视</li>
                  <li>笔记</li>
                  <li>家电</li>
                  <li>生活周边</li>
              </ul>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    mounted(){
               //1.交表的旋转切换
               var d1 = document.getElementById("d1")
               //2.openlist出现/消失
               var d2 = document.getElementById("d2") 
              
               d1.addEventListener("click",function(){
                    //点击切换类名
                    d1.classList.toggle( "rotate" );
                    d2.classList.toggle("show");
               })       
    },
    methods:{
       
    }
}
</script>
<style scoped>
   .headerlist{
       width:100%;
       position:fixed;
       top:48px;
       left:0px;
       right:0px;
       z-index:999;
       
   }
   /*1.list*/
   .headerlist .list{
       z-index:1;
       width:100%;
       height:35px;
       overflow-x: auto;
       white-space: nowrap;
       position: absolute;
       top:-2px;
       left:-52px;
       background:rgb(242, 242, 242);
   }
   .list>ul{
       list-style-type: none;
       padding-left:0px;
       width:600px;
   }
   .list>ul>li{
       float: left;
       margin-top:3px;
       margin-right:25px;
   }
   /*推荐*/
   .list>ul>li:first-child{
       margin-left:60px;
   }
   /*2.下拉上拉按钮*/
   .button{
       /*display:none;*/
       z-index:999;
       height:35px;
       width:54px;
       position:absolute;
       top:-2px;
       left:359px;
       background:rgb(242, 242, 242);
   }
   /*旋转*/
   .icon-RectangleCopy1{
     margin-left:11px;
   }
   #d1{
       transition:all .5s;
   }
   .rotate{
        transform-origin:50% 50%;
        transform:rotate(180deg);
   }
   /*3.全部列表*/
   .show{
     display:block !important; 
     
   }
    .headerlist .openlist{
        display:none; 
        width:100%;
        height:140px;
        background:rgb(242, 242, 242);
        position:absolute;
        top:-3px;
        z-index:5;
   }
   .headerlist .allList{
       display:flex;
       justify-content: space-around;
       align-items: center;
       flex-flow: wrap;
   }
   .headerlist .allList>div{
       width:70px;
       height:30px;
       margin-right:16px;
       margin-top:10px;
       border-radius:5px;
       background:white;
       line-height:30px;
       text-align: center;
   }
   .headerlist .allList>div:hover{
        border:1px solid rgb(233, 128, 7);
        color:rgb(233, 128, 7);
        background:rgba(247, 152, 10, 0.3);
        cursor: pointer;
   }
</style>

