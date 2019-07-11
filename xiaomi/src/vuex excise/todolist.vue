<template>
    <ul>
        <todoitem 
        :index="index"
        :content="item"  
        v-for="(item,index) of mylist" :key="index"
        ></todoitem>    
    </ul>
</template>
<script>
import todoitem from './todoitem.vue' 
export default {
    computed:{
        //接收store里面的list的数据
        mylist:function(){
            return this.$store.getters.list
        }
    },
    data(){
        return{}
    },
    components:{
        "todoitem":todoitem
    }
}
</script>
<style scoped>
  
</style>
