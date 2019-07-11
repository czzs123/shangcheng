<template>
  <div class="container">
    <!--<h1>商品详情</h1>-->
    <div class="goods-item" v-for="(item,index) of list" :key="index">
        <img src="../assets/01.png" alt="" >
        <h6 style="background:white;" class="title">{{item.lname}}</h6>
        <div class="info">
          <span class="now">¥{{item.price}}</span>
          <!--冒泡绑定-->
          <div  @click="parent" class="parent">
              <button :data-id="item.lid">-</button>
              <span style="font-size:18px;">{{item.count}}</span>
              <button :data-id="item.lid+0.5">+</button> 
          </div>
         <!--@click="count" :data-id="item.lid"-->
          <!-- <span class="cart"  >添加到购物车</span> -->
        </div>
    </div>
    <div style="height:5px;background:white;color:white;width:100%;"></div>
    <mt-button size="large" type="primary" @click="loadMore" >加载更多</mt-button>
    <div style="width:100%;height:80px;background:white;"></div>
        <div  v-show="hascart==true" class="shoping" id="d1" @click="gocart">前往购物车{{finalcount}}</div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
              list:[],     //保存服务器数据
              pno:0,       //页码
              pageSize:4,   //页大小
              hasMore:true,
              hascart:false,
              finalcount:0,
              //sendlist:[], //数组
              item:{}      //每个商品数据的对象
            }
        },
        created(){
            this.loadMore();
        },
        
        methods:{
            //加载第1/2/3...页的数据
            loadMore(){
                //如果没有更多数据
                if(this.hasMore==false){
                   this.$toast("没有更多的数据了...");
                   return;
                }
                //console.log(123)
                //1.获取页码+1 这样可保证每次都是加载下一页
                this.pno++
                //2.创建url baseUrl="http://127.0.0.1:3000/"
                //发送请求 之前是这样写的var url="http://127.0.0.1:3000/delM?ids="+ids;
                var url="product"
                //3.传感参数对象
                var obj={pno:this.pno,pageSize:this.pageSize}
                //4.发送ajax
                this.axios.get(url,{
                     params:obj
                 }).then(res=>{
                 //5.接收服务器返回数据
                    console.log(res.data.data);
                    console.log(typeof(res.data.data));
                    //给请求的数组对象加个count属性为0;countadd为1 countsub为-1
                    for (var item of res.data.data ){
                        item.count=0;
                        item.countadd=1;
                        item.countsub=-1;
                    }
                 //6.保存到list
                    this.list=this.list.concat(res.data.data);
                    console.log(this.list);
                    //7.如果没有数据了 显示已经到底了
                      if(this.pno >= res.data.pageCount){
                              this.hasMore = false;
                      }
                })    
            },
            //添加购物车
             /*count(e){
                //alert(1);
                this.hascart=true;
                //获取商品id+用户id+商品数量
                if(e.target.nodeName=="FONT"){
                       console.log(e.target.parentNode.parentNode.dataset.id);
                        var n = e.target.parentNode.parentNode.dataset.id-1;
                         console.log(this.list[n]);
                        console.log(this.list[n].count);
                      
                
                }else{
                        console.log(e.target.dataset.id);
                        var n = e.target.dataset.id-1;
                        console.log(this.list[n]);
                        console.log(this.list[n].count);
                      
                }
               
                
              // this.finalcount+=this.list[n].count;
                //console.log(this.finalcount);
            },*/
            //左右按钮添加购物车事件
            parent(e){
             if(sessionStorage.getItem("uname")){
                //显示购物车
                
                this.hascart=true;
                console.log(e.target);
                console.log(e.target.dataset.id);
                //这是获取商品lid
                var lid = Math.floor(e.target.dataset.id);
               
                //这个n是用来做list的下标的   之所以减去1 是因为下标从零开始
                var n = Math.floor(e.target.dataset.id)-1;
                //获取这个商品的lid值
                var p = this.list[n].lid;
               
                   //如果这个按钮等于这个商品lid  说明是左按钮 list的count--
                    if(e.target.dataset.id==p){
                        //不能小于0
                        if(this.list[n].count>0){
                         //list的count减少 购物车数量也减少
                         this.list[n].count--;
                         console.log( this.list[n].count);
                         this.finalcount--;  
                          //把每个商品数据放到对象里面
                          this.item.lid = lid;
                          this.item.count = this.list[n].countsub;
                          this.item.price = this.list[n].price;
                           this.item.name =this.list[n].lname;
                          console.log(this.item);

                          //用户每点击一次发送ajax请求
                          this.axios.get("productdata",{
                               params:{ 
                                   lid: this.item.lid,
                                   count:this.item.count,
                                   price:this.item.price,
                                   name:this.item.name
                               }
                            }).then(res=>{
                                  console.log("传输成功")
                          })
                        }
                     //反之 右按钮 list的count++;        
                    }else if(e.target.dataset.id>p){
                        //list的count增加 购物车数量也增加
                         this.list[n].count++;
                         console.log( this.list[n].count);
                         this.finalcount++;
                          //把每个商品数据放到对象里面
                          this.item.lid = lid;
                          this.item.count = this.list[n].countadd;
                           this.item.price = this.list[n].price;
                           this.item.name =this.list[n].lname;
                          console.log(this.item);

                          //用户每点击一次发送ajax请求
                           this.axios.get("productdata",{
                               params:{ 
                                   lid: this.item.lid,
                                   count:this.item.count,
                                    price:this.item.price,
                                     name:this.item.name
                               }
                            }).then(res=>{
                                  console.log(res.data)
                          })
                    }
             }else{
                 this.$toast("请先登录");
             }
            },
            gocart(){
                this.$router.push("/cart")
            }
        },
        /*watch:{
           finalcount:function(){
                   var n = 0;
                   n++;
                   d1.innerHTML="前往购物车"+ n;
           }
        }*/
    }
</script>
<style scoped>
    .shoping{
        width:100%;
        height:80px;
        background:lightblue;
        position:fixed;
        left:0px;
        right:0px;
        bottom:0px;
        font-size: 24px;
    }
    *{
      margin:0 !important;
      padding:0 !important;
    }
    .container{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        /*padding:2px !important;/*右边和下边的补丁不生效*/
        background:#ccc;
    }
    .goods-item{
        width:50%;
        display:flex;
        flex-direction:column;
        border:1px solid #ccc;
         background:white;
        /*margin:2px;*/
        /*padding:2px;*/
        box-sizing:border-box;
        border-radius:5px;
        min-height:247px; 
    }
    .goods-item>img{
        width:100%;
    }
    .info{
       background:white;
       display:flex;
       justify-content: space-between;
       align-content: center;
       height: 50px;
    }
    .now{
       background:white;
        height: 100%;
        font-size:12px;
    }
    .parent{
        width:50%;
    }
    .parent>button{
         width:33%;
    }
    .cart{
       color:indianred;
        height: 100%;
        font-size:16px;
        /*vertical-align: middle;*/
       background:lightblue;
       border-radius:10px;

    }
    .title{
        height:30%;
        text-overflow: ellipsis;
    }
   /* p{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }*/
</style>