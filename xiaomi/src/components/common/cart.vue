<template>
    <div class="cart">
         <h1 v-show="hashow==false">请先登录</h1>
        <!--全选按钮-->
         <div  v-show="hashow==true" class="selectAll">
             全选<input type="checkbox" @change="selectAll" >
         </div>
        <!--购物商品信息-->
        <div  v-show="hashow==true" class="cart-item" v-for="(item,index) of list" :key="index">
          <div class="leftImgTxt">
            <input type="checkbox" class="soninput" v-model="item.cb" > 
            <!-- <img :src="'http://127.0.0.1:3000/img/'+item.img" alt="" class="img"> -->
            <img src="../../assets/01.png"  class="img">
            <div>{{item.lname}}</div>
            <div class="rigntImg">
                <span>{{item.price}}</span>
                <span></span>
            </div>
          </div>
          <mt-button @click="delItem" :data-id="item.id">删除</mt-button>
        </div>
        <!--删除选中的商品信息-->
        <div  v-show="hashow==true" class="delAll">
           <mt-button @click="delSelected">删除选中商品</mt-button>
        </div>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],  
            hashow:false,     
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
            //加载购物车数据
        loadMore(){
            //console.log("加载购物车数据")
            if(sessionStorage.getItem("uname")){
                this.hashow=true;
                var url="cart";
                this.axios.get(url).then(result=>{
                console.log(result.data.data);
                //this.list=res.data.data
                //1.获取数组
                var rows = result.data.data;
                //2.创建循环为数组中元素(对象)添加cb属性
                for(var item of rows){
                    item.cb=false; 
                //3.将修改后的数据赋值list
                    this.list=rows;
                }
                console.log(this.list)
            })
          }else{
                this.$toast("请先登录 否则无法购买");
          }

        },
        //全选事件
        selectAll(e){
          //全选框按钮状态 对/错
           var rs = e.target.checked;
           console.log(rs)
             //如果为true  
           if(rs==true){
             for(var item of this.list){
                 item.cb=true;//商品的checked为true
             }
           }else{
             //如果为false  
             for(var item of this.list){
                 item.cb=false;//商品的checked为false
             }
           }
        },
    
        //删除一项数据
        delItem(e){
            //console.log(e.target.dataset); //触发事件对象
            //e.target.dataset.id
            this.$messagebox({
                title:"消息",
                message:"是否删除指定数据",
                showConfrimButton:true,
                showCancelButton:true,
            }).then(res=>{
                console.log(res)
                //如果取消 拜拜
                if(res=="cancel"){return}
                //如果确定 执行以下操作
                else{
                      var id = e.target.dataset.id;          //获取这个商品的id
                      var url = "del";                       //获取url
                      var obj = {id:id};                     //将id放到对象里面
                      this.axios.get("del",{params:obj}).then(result=>{//这里面的result不要和上面的res重名字
                          console.log(result);
                          this.loadMore();
                          this.$toast({
                              title:"消息",
                              message:result.data.msg,
                          });
                          this.loadMore();
                      })
                }
            })
        },
        //删除选中的
        delSelected(){
            //清空购物车所有商品
            //1.创建变量保存空字符串
              var str = "";
            //2.创建循环遍历数组
              for(var item of this.list){
                  console.log(item.id);
                  //3.获取当前元素id拼接字符串
                  //如果item.cb=true
                  if(item.cb==true){
                    str+=item.id+",";
                  }
              }     
            //4.结果 “1,2,3,4.....”
              console.log(str);
              str=str.substring(0,str.length-1);//截取不带最后一个","的字符串 slice(0,-1)
              console.log(str);
            //5.发送ajax请求获取数据
              var url = "delselected";
              var obj = {ids:str};
              this.axios.get(url,{params:obj}).then(result=>{
                  console.log(result);
                  this.$toast("删除成功")
                  this.loadMore();//重新加载
              });
             // this.loadMore();//重新加载
        }
    },
}
</script>
            
<style scoped>
    /*最外层商品容器*/
    .cart-item{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    /*修改左侧图片和文字*/
    .leftImgTxt{
          display:flex;
          justify-content: space-between;
          align-content: center;
    }
    /*左侧图片*/
    .img{
        width:50px;
        height:50px;
    }
    .rightImg{
        display:flex;
        margin-left:25px;
    }
</style>

