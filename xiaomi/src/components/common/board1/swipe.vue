<template>
    <div class="swipe">
         <mt-swipe :auto="4000" :show-indicators="true" > 
            <mt-swipe-item>
                <img src="../../../assets/banner/banner1.png" alt="">
            </mt-swipe-item> 
            <mt-swipe-item>
                <img src="../../../assets/banner/banner2.png" alt="">
            </mt-swipe-item> 
            <mt-swipe-item>   
                <img src="../../../assets/banner/banner3.png" alt="">
            </mt-swipe-item> 
           
        </mt-swipe>     
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
    .swipe .mint-swipe{
       height:205px;
       z-index: 1;
    }
    .swipe img{
        width:411px;
        height:205px;
    }
</style>
