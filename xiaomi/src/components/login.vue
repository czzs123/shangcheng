<template>
    <div class="container">
        <div class="xiaomilogin">
            <img src="../assets/login/2.png" alt="">
            <h3>小米账号登录</h3>
        </div>
        <mt-field :label="inputName1" :placeholder="accountPlaceholder1"  v-model="uname"></mt-field>
        <mt-field :label="inputName2" :placeholder="accountPlaceholder2"  v-model="upass"> 
            <a href="javascript:;" @click="code" v-show="isUserAccount==true">获取验证码</a>
        </mt-field>

        <div>
        <mt-button size="large" type="primary" class="mybutton" @click="login">立即登录/注册</mt-button>
        <mt-button size="large"  type="primary" class="mybutton" @click="changeLoginMethod" >{{text}}</mt-button>
       </div>
       

        <div class="haha" id="d1" v-show="isUserAccount==false">用户注册</div>
        <div class="haha" v-show="isUserAccount==false">忘记密码</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         inputName1:"手机号",
         inputName2:"验证码",
         accountPlaceholder1:"+86> 请输入手机号",
         accountPlaceholder2:"输入验证码",
         uname:"",
         upass:"",
         text:"用户登录注册",
         //是否是账户登录
         isUserAccount:true
        }
    },
    mounted(){
          var d1 = document.getElementById("d1");
          console.log(d1);
          d1.onclick=function(){

             location.href="http://127.0.0.1:8081/#/resgiter";
          }
    },
    methods:{
        code(){
            alert("该功能尚未实现 请使用用户名密码方式注册登录");
        },
        changeLoginMethod(){
            //alert(1);
            if(this.isUserAccount==true){
                 this.inputName1="账号名";
                 this.inputName2="密码";
                 this.accountPlaceholder1="请输入账号名";
                 this.accountPlaceholder2="输入密码";
                 this.text="手机号登录注册";
            }else{
                 this.inputName1="手机号";
                 this.inputName2="验证码";
                 this.accountPlaceholder1="+86> 请输入手机号";
                 this.accountPlaceholder2="输入验证码";
                 this.text="用户登录注册";
            }
             this.isUserAccount=!this.isUserAccount;
        },
        login(){
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
               this.axios.get("login",{
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
                         message:"登录成功",
                     });
                     //成功将用户名字保存在sessionStorage
                     sessionStorage.setItem("uname",n);
                     this.$router.push("/home");//跳转组件
                     //location.href="http://127.0.0.1:8080/#/";
                   }else{
                     this.$messagebox("消息",res.data.msg)
                   }
                })
            }
          }
        },
       
}
</script>
<style scoped>
    .haha {
        width:50%;
        height:50px;
        /*font-size: 24px;*/
       
    }
  
    a{
        text-decoration:none;
    }
  .container{
      width:100%;
  }
  .container .xiaomilogin{
      height:130px;
      width:100%;
      position:relative;
  }
  .xiaomilogin img{
      width:80px;
      position:absolute;
      top:19%;
      left:39%;
  }
  .xiaomilogin h3{
      position:absolute;
      top:81%;
      left:35%;
  }
  .mybutton{
      margin-top:20px;
      height:50px;
  }
</style>