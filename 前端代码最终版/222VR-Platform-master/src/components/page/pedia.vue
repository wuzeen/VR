<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> VR百科</el-breadcrumb-item>
                <el-breadcrumb-item>百科搜索</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
           <input type="text" v-model="search" placeholder="search pedias" />
           <!--<button class="search-btn" @click="search()">search</button>-->
           <el-button type="primary" @click="getEncyclopedia()">搜索</el-button>
        </div>
        <div id="show-pedias">
            <div v-for="item in encyclopediaList" class="single-item" @click="encyclopediaClick(item)">
                 <a href="javascript:void(0);" class="link-tit" title="">
                 <h1>{{item.keyword}}</h1>
                 <article>{{item.firstprop}}</article>
            </div>
        </div>

        


        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="pageNum"
                layout="prev, next">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                search:'',
                hostURL:'/VR',
                activePane: 'first',
                encyclopediaList:[
                    {
                        id:1,
                        keyword:'fuuuuuuu',
                        type:"",
                        changenote:'11111111111111111111111111111111111111',
                        firstprop:'2222222222222222',
                    },
                    {
                        id:2,
                        keyword:'ffffffff',
                        type:"",
                        changenote:'1111111111111111111111111111111111',
                        firstprop:'222222222222',
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
            getEncyclopedia(){
                var self = this;
                self.encyclopediaList=[];
                var searchData = {
                    keyword:"",
                    pageNum:1
                };
                searchData.keyword=self.search;
                searchData.pageNum=self.pageNum;
                self.$axios({
                    url:'/encyclopediaSearch',
                    method:'post',
                    baseURL:self.hostURL,
                    data:searchData
                }).then((response)=>{
                    self.encyclopediaList = [];
                    self.encyclopediaList = response.data;
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
                self.getEncyclopedia();
            },
            encyclopediaClick(item){
                var self=this;
                console.log(item.id);
                self.$router.push('/user/encyclopedia-prop?'+item.id);

            }

        },
        
        mounted(){
            var self = this;
           self.encyclopediaList=[];
        }
    }
</script>

<style scoped>
#show-pedias{
  max-width:800px;
  margin:0 auto;
}
.crumbs{
    text-decoration: none;
}

.box {
    height: 45px;
    width: 800px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}
.box input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 800px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
}
.link-tit{
    color: #e9c06c;
}
.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%;
}
#show-pedias{
  max-width:800px;
  margin:0 auto;
}
.single-item{
  padding:20px;
  margin:20px 0;
  box-sizing:border-box;
  background:#eee;
}
.pagination{
    margin-left:50px;
}
</style>
