<template>
    <div class="login-wrap">
        <div class="background">
            <div class="background-img">
             <!--<img src="../assets/LoginWallpaper.jpg">-->
             <img :src="pic_location" style="width:100%">
            </div>        
            <div class="title-wrap">    
                <div class="ms-title">管理员登陆界面</div>
                
            </div>
            <div class="ms-login">
                <el-tabs v-model="activePane">
                    <el-tab-pane label="登录" name="login">
                        <el-form :model="login" :rules="loginRules" ref="login" label-width="0px" >
                            <el-form-item prop="adminname">
                                <el-input v-model="login.adminname" placeholder="用户名"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" placeholder="密码" v-model="login.password"></el-input>
                            </el-form-item>
                            <el-form :model="login" :rules="loginRules" ref="login" label-width="0px">
                                <el-form-item prop="verCode">
                                    <el-popover
                                        ref="a"
                                        placement="right-end"
                                        trigger="hover">
                                            <img :src="imgUrl" alt="验证码图片" width="200px" @click="getVerCode">
                                    </el-popover>
                                    <el-input 
                                        v-popover:a
                                        placeholder="验证码" 
                                        v-model="login.verCode" 
                                        @keyup.enter.native="loginForm('login')">
                                    </el-input>
                                </el-form-item>
                            </el-form>
                            <div class="login-btn">
                                <el-button type="primary" @click="loginForm('login')">登录</el-button>
                            </div>
                           
                        </el-form>
                    </el-tab-pane>

            
                </el-tabs>    
            </div>
        </div>
        <h1 class="model-header" >功能介绍</h1>
        <div class="model" >
            <div class="container">
                <el-card :body-style="{ padding: '0px' }">
                    <!--<i class="el-icon-document"></i>-->
                    <img class="model-img" :src="pic_news">
                    <div class="model-content">
                        <h2 class="model-title">新 闻</h2>
                        <div class="model-intro">
                            带你了解最热，最新的VR新闻资讯
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="container">
                <el-card :body-style="{ padding: '0px' }" >
                    <!--<i class="el-icon-document"></i>-->
                    <img class="model-img" :src="pic_product">
                    <div class="model-content">
                        <h2 class="model-title">产 品</h2>
                        <div class="model-intro">
                            专业机构，专业指标，全面了解VR产品
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="container">
                <el-card :body-style="{ padding: '0px' }">
                    <!--<i class="el-icon-document"></i>-->
                    <img class="model-img" :src="pic_chat">
                    <div class="model-content">
                        <h2 class="model-title">论 坛</h2>
                        <div class="model-intro">
                           认识志同道合的VR小伙伴
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="container">
                <el-card :body-style="{ padding: '0px' }" >
                    <!--<i class="el-icon-document"></i>-->
                    <img class="model-img" :src="pic_wiki">
                    <div class="model-content">
                        <h2 class="model-title">百 科</h2>
                        <div class="model-intro">
                            广阔的VR知识库，帮你解疑排惑
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="container">
                <el-card :body-style="{ padding: '0px' }" >
                    <!--<i class="el-icon-document"></i>-->
                    <img class="model-img" :src="pic_comment">
                    <div class="model-content">
                        <h2 class="model-title">评 价</h2>
                        <div class="model-intro">
                            一键对比，突出产品特色
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="footer">
            <p style="margin-top:10px;">&copy 2017 虚拟现实产品质量评估平台 &nbsp &nbsp &nbsp 如有问题，请联系管理员<span id="help">10086@qq.com</span></p>
        </div>
    </div>
</template>

<script>
import loginImg from '../../assets/LoginWallpaper.jpg';
import news from '../../assets/news.png';
import product from '../../assets/product.png';
import chat from '../../assets/chat.png';
import wiki from '../../assets/wiki.png';
import comment from '../../assets/comment.png';

    export default {
        data: function(){
            var checkPwd = (rule, value, callback) => {
                // console.log(value, this.register.password);
                if (value === '') {
                    // consolef.log(value, this.register.password);
                    callback(new Error('请再次输入密码!'));
                } else if (value !== this.register.password) {
                    // console.log(value, this.register.password);
                    callback(new Error('两次密码不相同!'));
                } else {
                    // console.log(value, this.register.password);
                    callback();
                }
            };

            var checkWord = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9]+$/;
                if (value.match(reg)) {
                    callback();
                } else {
                    callback(new Error('密码仅可由数字与字母组成'));
                }
            };

            var checkName = (rule, value, callback) => {
                // console.log(value.gblen());
                var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\\\\]");
                if (value.indexOf(" ") >= 0) {
                    callback(new Error('请不要包含空格'));
                } else if (value.match(reg)) {
                    callback(new Error('请不要输入特殊字符'));
                } else if (value.gblen() < 4 || value.gblen() > 16) {
                    callback(new Error('请输入4-16位字符'));
                } else {
                    callback();
                }
            };

            // var getPic=new Vue({
            //     el:'#getPic',
            //     data:{
            //         pic_location:"../../dist/static/img/LoginWallpaper.jpg"
            //     }
            // });

            return {
                activePane: 'login',
                hostUrl: '/VR', // IP
                imgUrl: '/VR/checkcode',
                pic_location:loginImg,
                pic_news:news,
                pic_product:product,
                pic_chat:chat,
                pic_wiki:wiki,
                pic_comment:comment,
                code:0,
                // backgroundDiv:{
                //     backgroundImage: 'url('+require('./static/LoginWallpaper.jpg')+')'
                // },
                // hostUrl: '',
                login: {
                    adminname: '',
                    password: '',
                    verCode: ''
                },
                loginRules: {
                    adminname: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    verCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur'}
                    ]
                },
                
                
            }
        },
        created() {
            this.getVerCode();
        },
        methods: {
            codeParsing(code) {
                var msg = (Title, Message) => {
                    this.$message({
                        title: Title,
                        message: Message,
                        type: 'error'
                    });
                };
                switch(code) {
                    
                    default:
                         msg('登录失败', '用户名或密码错误');
                         break;
                }
            },
            // getBackgroundDiv(){
            //     var self=this;
            //     this,$http.get("/api/imgData").then((response)=>{
            //         response=response.body;
            //         console.log(response.data);
            //     })
            // },

            changeUrl() {
                var url = this.imgUrl;

                var timeStamp = (new Date()).valueOf();
                url = url.substring(0, 45);
                if ((url.indexOf('&') >= 0)) {
                    url = url + 'xtamp=' + timeStamp;
                } else {
                    url = url + '?timestamp=' + timeStamp;
                }

                return url;
            },

            loginForm(formName) {
                const self = this;
                // sessionStorage.setItem('ms_type',2);
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                       this.$axios({
                            url: '/admin/login',
                            method: 'post',
                            baseURL: this.hostUrl,
                            data: {
                                
                                adminname: this.login.adminname,
                                password: this.login.password,
                                checkcode: this.login.verCode
                            }
                        })
                        .then((response) => {
                            self.code = response.data.data;
                             if (self.code === 200) {       
                                    localStorage.setItem('ms_username', response.data.adminname);
                                    sessionStorage.setItem('ms_type', response.data.type);
                                    self.$router.push('/admin/UploadFile');

                            } else {
                                // console.log(response);
                                console.log('code', self.code);
                                self.codeParsing(self.code);
                                
                            }
                        })
                        .catch((error) => {
                            console.log("【Error】:", error);
                            this.$message({
                                title: '网络请求错误',
                                message: '请检查网络并重试',
                                type: 'error'
                            });
                        });
                    } else {
                        console.log('error login!!');
                        this.$message({
                            title: '格式错误',
                            message: '请检查输入域是否正确',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },

          

            getVerCode() {
                var self = this;
                self.imgUrl = self.changeUrl();
                // this.$axios({
                //     url: '/checkcode',
                //     method: 'get',
                //     baseURL: this.hostUrl
                // })
                // .then((response) => {
                //     // fixed
                //     this.login.imgUrl = response;
                // })
                // .catch((error) => {
                //     console.log("【Error】:", error);
                // });
            },
           
        }
    }
</script>

<style>
  
    #login {
        color: #fff;
        font-weight: bold;
        cursor: help;
        text-decoration: underline;        
    }
    #help {
        text-decoration: underline;
        cursor: help;
    }
    .ms-login img {
        float: right;
        height: 34px;
        width: 100%;
        font-size: inherit;
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        cursor: pointer;
    }
    .login-btn span{
        text-decoration: none;
    }
    .ms-login .el-tabs__item {
        padding: 0 60px;
        /*text-align: center;*/
        /*width: 50%;*/
    }
    .login-wrap{
        position: absolute;
        width:100%;
        height:100%;
        overflow-y: scroll;
       
    }
    .background{
        position:relative;
        width: 100%;
        height: 600px;
    }
    .background-img{
        /*background-image: url(../assets/LoginWallpaper.jpg);
        background: no-repeat center top;
        background-size: contain;*/
        position: absolute;
        width: 100%;
        height:600px;
    }
    .title-wrap{
        position: absolute;
        display: inline-block;
        width:60%;
        height: 600px;
        margin-top: 0 auto;
        color: #fff;

    }
    .ms-title{
        position: absolute;
        margin-top: 200px;
        width:100%;
        text-align: center;
        font-size:35px;
    }
    .ms-intro{
        position: absolute;
        width:100%;
        margin: 270px auto;
        text-align: center;
        font-size:16px;

    }
    .ms-login{
        position: absolute;
        display: inline-block;
        left:75%;
        top:50%;
        width:300px;
        height:300px;
        margin:-220px 0 0 -190px;
        padding: 40px;
        border-radius: 5px;
        /*background: #fff;*/
    }
    .footer {
        cursor: pointer;
        position: absolute;
        /*bottom: 5px;*/
        /*left: 50%;*/
        width:100%;
        height: 30px;
        background-color: #324157;
        /*margin: 0 0 0 -190px;*/
        text-align: center;
        font-size:10px;
        color: rgb(153, 153, 153);     
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    .model-header{
        position: relative;
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: #fff;
        font-size: 30px;
        color: #324157;
        padding: 20px 0;
        font-family: "微软雅黑";
        /*background-color: #ECECEC;*/
    }
    .model{
        position: relative;
        width: 100%;
        height: 400px;
        background-color: #fff;
        padding-bottom: 30px;
    }
    .container{
        float: left;
        width: 20%;
        height: 400px;
        text-align: center;
    }
    .model-img{
        margin: 20% auto 10% auto;
        /*align-content: center;*/
        width: 100px;
        height: 100px;
    }
    .el-card{
        border-left-color: #fff;
        border-top-color: #fff;
        border-bottom-color: #fff;
        box-shadow: 0 0 0 0;
        height: 400px;
        color: #324157;
        border-radius: 0;
    }
    .model-content{
        margin: 0 auto;
        /*text-align: center;*/
    }
    .model-title{
        text-align: center;
    }
    .model-intro{
        width: 70%;
        margin: 10px auto;
    }
    .content{
        padding:0;
        width: 94%;
        left:100px;
    }

</style>