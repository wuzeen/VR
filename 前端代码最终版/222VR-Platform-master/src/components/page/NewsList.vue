<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>VR资讯</el-breadcrumb-item>
                <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
            <el-col :span='20'>
                <div class="list-wrap">
                    <el-tabs v-model="activePane" @tab-click="handleClick">
                        <el-tab-pane label="VR新闻" name="first">
                            <ul class="news-list">
                                <li class="news-item" v-for="news in newsList" @click="newsClick(news)">
                                    <a href="javascript:void(0);" class="link-tit" title="">
                                        <img :src="news.pic_location">
                                        <span class="news-title">{{news.title}}</span>
                                        <span class="news-desc">{{news.news_abstract}}</span>
                                    </a>
                                </li>
                            </ul>
                            
                            <div class="pagination">
                                <el-pagination
                              @current-change="handleCurrentChange"
                              :current-page.sync="pageNum"
                              layout="prev, next">
                            </el-pagination>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="拓展1" name="second">222222222</el-tab-pane>
                        <el-tab-pane label="拓展2" name="third">3333333</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                hostURL:'/VR',
                activePane: 'first',
                newsList:[
                    {
                        id:1,
                        title:'fuuuuuuu',
                        news_abstract:'11111111111111111111111111111111111111',
                        pic_location:'./static/img/img.jpg',
                    },
                    {
                        id:2,
                        title:'fxxxxxxuu',
                        news_abstract:'22222222222222222222222222222222222222222',
                        pic_location:'./static/img/img.jpg',
                    }
                ],
                pageNum:1,
                pageTotal:20,
                pageSize:1
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
            handleClick(){
                // operate the tab
            },
            getNews(str){
                var self = this;
                self.newsList=[];
                self.$axios({
                    url:'/news_list/'+str,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.newsList = [];
                    self.newsList = response.data;
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.pageNum);
                self.getNews(self.pageNum);
            },
            newsClick(news){
                var self=this;
                console.log("11111111");
                console.log(news);
                self.$router.push('/user/news?'+news.id);
            }

        },
        mounted(){
            var self = this;
            self.getNews(self.pageNum);
        }
    }
</script>

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
    height: 124px;
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

</style>