<template>
    <div>
           <todoinput></todoinput>
           <todolist></todolist>
    </div>
</template>
<script>
import todoinput from './todoinput.vue' 
import todolist from './todolist.vue' 
export default {
    data(){
        return{}
    },
    components:{
            "todoinput":todoinput,
            "todolist":todolist,
      }
}
 
</script>
<style scoped>
  
</style>
