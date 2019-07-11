<template>
    <div class="container">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field label="密码"  placeholder="请输入密码"  v-model="upass"> </mt-field>
            <mt-button size="large" @click="resgiter">注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upass:"",
        }
    },
    methods:{
        resgiter(){
             //获取用户名和密码
             var n = this.uname;
             var p = this.upass;
             console.log(this.axios.defaults.baseURL);
             //定义正则对象
             var nreg =/^[\u4e00-\u9fa5\w]{2,8}$/;
             var preg =/^[\w]{3,12}$/;
             //先判断格式
             if(!nreg.test(n)||!preg.test(p))
              {
                this.$toast({
                  message:"格式错误 用户名保持2到8位 密码保证3到12位",
                })
              }
              //合适没问题发送
             if(nreg.test(n)&&preg.test(p)){
               this.axios.get("resgiter",{
                  params:{ 
                       uname:n,
                       upass:p
                    }
                }).then(res=>{
                   console.log(res);
                   //下面的才是真正返回的结果
                   console.log(res.data);
                   if(res.data.code==1){
                     this.$toast({
                         message:"注册成功",
                     });
                     //成功将用户名字保存在sessionStorage
                     sessionStorage.setItem("uname",n);
                     this.$router.push("/home");//跳转组件

                     //location.href="http://127.0.0.1:8080/#/";
                   }
                   else{
                     this.$messagebox("消息",res.data.msg)
                   }
                })
            }
          }
        },
    
  
 }
</script>
<style scoped>
  
</style>
