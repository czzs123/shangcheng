<template>
    <div >
       <!--搜索头-->
      <!--<headersearch></headersearch>-->
       <div style="height:48px;"></div>
       <!--列表头-->
       <headerlist></headerlist>
       <div style="height:35px;"></div>
       <!--轮播图-->
       <swipe></swipe>
       <!--十宫格-->
       <tengrid></tengrid>
       <!--十宫格下面区域-->
       <undergrid></undergrid>
       <!--每日精选-->
       <dayselection></dayselection>
       <div style="height:100px;"></div>
    </div>
</template>
<script>
//import headersearch from './board1/HeaderSearch.vue' //头1
import headerlist from './board1/HeaderList.vue'     //头2
import swipe from './board1/swipe.vue'               //轮播图
import tengrid from './board1/tengrid.vue'           //十宫格
import undergrid from './board1/undergrid.vue'       //十宫格下面
import dayselection from './board1/dayselection.vue' //每日精选
export default {
    prop:{
         focused:false,
    },  
    data(){
        return{}
    },
    components:{
                "swipe":swipe,
                "tengrid":tengrid,
                //"headersearch":headersearch,
                "headerlist":headerlist,
                "undergrid":undergrid,
                "dayselection":dayselection,
               }
}
</script>
<style scoped>
  
</style>
