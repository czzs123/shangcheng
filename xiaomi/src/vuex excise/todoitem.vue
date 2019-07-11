<template>
    <li>
          <span>{{content}}</span>
          <button @click="deletefromlist">删除</button>
    </li>
</template>
<script>
export default {
    props:['content','index'],
    data(){
        return{}
    },
    methods:{
        deletefromlist:function(){
            this.$store.commit("delete",this.index)
        }
    }
}
</script>
<style scoped>
  
</style>
