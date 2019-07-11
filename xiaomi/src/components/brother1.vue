<template>
    <div>
              <ul >
                  <li @click="jump(id)" 
                  v-for="(id,index) of idlist" :key="index">id值:{{id}} 点我brother1传到brother2兄弟组件</li>
                  
              </ul>
          
    </div>
</template>
<script>
export default {
    data(){
        return{
            //每个商品id
            idlist:[1,2,3,4,5]
            
        }
    },
    methods:{
        jump(e){
            console.log(e);

                              //'/brother2/:lid'
            this.$router.push(`/brother2/${e}`)
        }
    }
}
</script>
<style scoped>
  
</style>