

<template>

    

    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> <span class="bread">VR百科</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="bread">百科知识</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="sidebar" v-if="seen">
            <el-input placeholder="" v-model="keyword"></el-input>
            <el-input placeholder="" v-model="prop_keyword"></el-input>
            <el-input placeholder="" v-model="content"></el-input>
            <el-button type="primary" @click="submit()">提交</el-button>
            <el-button type="primary" @click="close()">关闭</el-button>
        </div>

        <div class="news-box">
            <h2 class="news-title">{{keyword}}</h2>
            <div class="borderline clearfix">
                <p class="artinfo"><span class="author"></span> </p>
            </div>
            <div class="article">
                <ul class="news-list">
                    <li class="news-item" v-for="encyclopedia_prop in encyclopedia_propData">
                        <a href="javascript:void(0);" class="link-tit" title="">
                        <span class="news-title">{{encyclopedia_prop.prop_keyword}}</span>
                        <span class="news-desc">{{encyclopedia_prop.content}}</span>
                        </a>
                        <el-button type="primary" @click="edit(encyclopedia_prop)">编辑</el-button>
                    </li>
                </ul> 
            </div>
           

             <div class="news-comment">
                <el-button-group>
                  <el-button type="primary" icon="circle-check">赞</el-button>
                  <el-button type="primary">踩<i class="el-icon-circle-cross el-icon--right"></i></el-button>
                </el-button-group>

                
            </div>
        </div>
       
         
    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                seen:false,
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                id:"1",
                prop_id:"1",
                keyword:"",
                prop_keyword:"",
                content:"a",
                changenote:"a1",
                encyclopedia_propData:[
                    {
                        id:"1",
                        prop_id:"1",
                        keyword:"",
                        prop_keyword:"",
                        content:"a",
                        changenote:"a1",

                    },
                    {
                        id:"2",
                        prop_id:"2",
                        keyword:"",
                        prop_keyword:"",
                        content:"b",
                        changenote:"b1",

                    }
                ]
            }
        },
        methods:{
            codeParsing(code) {
                var msg = (Title, Message) => {
                    this.$message({
                        title: Title,
                        message: Message,
                        type: 'error'
                    });
                };
                switch(code) {
                    case -1:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 201:
                        msg('输入域错误', '验证码错误');
                        break;
                    case 300:
                        msg('输入域错误', '邮箱或密码错误');
                        break;
                    case 301:
                        msg('权限问题', '用户已禁用，请联系管理员');
                        break;
                    case 302:
                        msg('权限问题', '用户未激活，请去邮箱激活用户');
                        break;
                    case 303:
                        msg('注册问题', '邮箱已占用，请更改邮箱');
                        break;
                    case 304:
                        msg('注册问题', '昵称已占用，请更改昵称');
                        break;
                    case 400:
                        msg('权限问题', '用户未登录，请重新登录');
                        break;
                    case 401:
                        msg('权限问题', '用户无权访问，请联系管理员');
                        break;
                    case 402:
                        msg('操作错误', '删除错误,请刷新重试');
                        break;
                    case 500:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 600:
                        msg('TIME_OUT', '访问超时，请检查网络连接');
                        break;
                    case 700:
                        msg('激活错误', '非法激活链接，请联系管理员');
                        break;
                    case 800:
                        msg('激活错误', '用户已被激活，请直接登录');
                        break;
                    default:
                        break;
                }
            },
            getEncyclopedia_propData(id){
                var self = this;
                self.encyclopedia_propData = [];
                self.$axios({
                    url:'/encyclopedia-prop/'+id,
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    self.encyclopedia_propData = response.data;
                    
                    console.log(encyclopedia_propData);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            edit(encyclopedia_prop){
                var self=this;
                self.seen=true;
                self.id=encyclopedia_prop.id;
                self.keyword=encyclopedia_prop.keyword;
                self.prop_id=encyclopedia_prop.prop_id;
                self.prop_keyword=encyclopedia_prop.prop_keyword;
                self.content=encyclopedia_prop.content;
                self.changenote=self.changenote;
                


            },
            close(){
                var self=this;
                self.seen=false;
            },
            submit(){
                var self=this;
                var submitdata={
                    id:"1",
                    prop_id:"1",
                    keyword:"",
                    prop_keyword:"",
                    content:"a",
                    changenote:"a1",
                };
                submitdata.id=self.id;
                submitdata.prop_id=self.prop_id;
                submitdata.keyword=self.keyword;
                submitdata.prop_keyword=self.prop_keyword;
                submitdata.content=self.content;
                submitdata.changenote=localStorage.getItem('ms_username');
                self.$axios({
                    url:'/encyclopedia-propChange',
                    method:'post',
                    baseURL: self.hostURL,
                    data:submitdata
                }).then((response)=>{                    
                    var state=response.data;
                    if(state==1){
                        self.$message({
                        type:'info',
                        message:'提交成功'
                        });
                    }
                    else if(state==0){
                        self.$message({
                        type:'info',
                        message:'提交失败，您已对该词条属性提出修改请求'
                        });
                    }
                }).catch((error)=>{
                    console.log(error);
                });

            }
        },
        
        mounted(){
            var self= this;
            self.encyclopedia_propData=[];
            console.log("2222");
            var arr = location.href.split('?');
            console.log(arr[1]);
            var encyclopedia_id = arr[1];
            console.log(encyclopedia_id);
            self.getEncyclopedia_propData(encyclopedia_id);  


        }
    }
</script>

<style scoped>
.crumbs{
    text-decoration: none;
}
.bread{
    font-size: 16px;
}
.form-box{
    width:300px;
    margin-top:50px;
    margin-left:0px;
    box-shadow:0 0 8px 0
        rgba(232,237,250,.9),0 2px 4px 0
        rgba(232,237,250,.9);
    padding:50px 50px 50px 10px;  
}
.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%; 
}
.news-box{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
}
.news-title{
        font-size: 22px;
    color: #287D7C;
    line-height: 50px;
    font-weight: normal;
        display: block;
}
.borderline{
    border-bottom: 1px dotted #BFBFBF;
}
.artinfo{
    float: left;
    padding-bottom: 5px;
    color: #999;
        margin: 0;
    padding: 0;
    display: block;
}
.author{
    color: #666;
}
.article p{
    padding: 30px 0 50px;
    font-size: 18px;
    color: #333;
    line-height: 200%;
    text-indent:2em;
}
.article {
    display: inline-block;
    line-height: 26px;
    padding-bottom: 25px;
}
.news-img{
    text-align: center;
}
.news-comment{
    margin-top: 20px;
    text-align: center;
}
</style>

<style scoped>
.crumbs{
    text-decoration: none;
}
.form-box{
    width:300px;
    margin-top:50px;
    margin-left:0px;
    box-shadow:0 0 8px 0
        rgba(232,237,250,.9),0 2px 4px 0
        rgba(232,237,250,.9);
    padding:50px 50px 50px 10px;  
}
.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%; 
}

/*=======================================*/
ul {
    list-style: none;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}
li {
    list-style-type:none;
    padding-bottom:10px;
    border-bottom: 1px solid #ccc;
}
a {
    text-decoration: none;
}
a:hover, a:visited {
    text-decoration: none;
}
.news-item{
    margin-bottom: 24px;
    overflow: hidden;
}
.news-list .news-item .link-tit {
    color: #e9c06c;
}
.news-list .news-item img{
    display: block;
    float:left;
    margin-right: 20px;
    width:200px;

}
.news-list .news-item .news-title{
    display: block;
    font-size: 22px;
    font-weight: lighter;
    color: #3e3e3e;
    line-height: 50px;
    height: 50px;
    overflow: hidden;
}
.news-list .news-desc {
    display: block;
    height: 60px;
    overflow: hidden;
    font-size: 14px;
    color: #898989;
    line-height: 1.5;
}

.pagination{
    margin-left:50px;
}
.sidebar{
    display: block;
    position: absolute;
    width: 400px;
    right: 0;
    top: 0;
    bottom:0;
    background: #2E363F;
}
.sidebar > ul {
    height:100%;
}

</style>
