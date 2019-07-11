<template>
    <div>
          <h1>我是父组件 我要给子组件传值</h1>
          <son
            :sonlist="fatherlist"
            :sonstring="fatherstring"
            :sonboolean="fatherboolean"
            v-on:sonwanttogive="show"
          ></son> 
           <h1>来自儿子的反馈:{{songive}}</h1> 
    </div>
</template>
<script>
//引入子组件 相对于父组件路径
import son from './son'
export default {
    data(){
        return{
            fatherlist:["来自爸爸的爱","爸爸给你准备的秋梨膏","儿子你可别坑爹啊"],
            fatherstring:"生命不可承受之重",
            fatherboolean:true,
            songive:""
        }
    },
    methods:{
         show:function(data){
           console.log(data)
           this.songive=data
          
         }
    },
    components:{
         "son":son
    }
}
</script>
<style scoped>
  
</style>