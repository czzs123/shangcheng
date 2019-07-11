<template>
    <div> 
             <h1>我是儿子 爸爸已经把值给了我</h1>
             <ul v-for="(item,index) of sonlist" :key="index">
                 <li>{{item}}</li>
             </ul>
             <h1>{{sonstring}}</h1>
             <h3 v-show="sonboolean==true">爸爸给的是true 我显示</h3>
             <h3 v-show="sonboolean==false">爸爸给的是false 我显示</h3>
             <hr>
              <hr>
              <hr>
              <hr>
              <button @click="sonsend">当儿子的 也想给爸爸一些回馈~ </button> 
             
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        sonlist:{
            type:Array,  //["来自爸爸的爱","爸爸给你准备的秋梨膏","儿子你可别坑爹啊"]
            required:true
        },
        sonstring:{ 
            type:String,  //"生命不可承受之重"
            required:true
        },
        sonboolean:{     //true
            type:Boolean,
            required:true
        }
    },
    //保存方法函数的地方
    methods:{
        sonsend:function(){
              // console.log(1)
              //vue的实例 
               this.$emit("sonwanttogive","爸~给我点零花钱");
        }
    }
      
   
}
</script>
<style scoped>
  
</style>