<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>VR百科 </el-breadcrumb-item>
                <el-breadcrumb-item>目录浏览</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div id="navigation">
            <div class="collection">
              <ul>
               <a href="#/user/pedia2" class="collection-item"
                    v-for="onetype in typeList"
                    @click="selected(onetype)"
                    :class="{active: type == onetype}"><li>{{onetype}}</li></a>
              </ul>
            </div>
        </div>
        <div id="show-pedias">
            <div v-for="item in items" class="single-item" @click="encyclopediaClick(item)">
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
                pageNum:1,
                pageTotal:20,
                pageSize:1,
                hostURL:'/VR',
                items:[
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
                type:'',
                typeList: ['a', 'b', 'c', 'd', 'e','f']
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
            getTypes(){
              var self=this;
              self.typeList=[];
              self.$axios({
                    url:'/encyclopediaDir',
                    method:'post',
                    baseURL:self.hostURL,
                    data:"notype"
                }).then((response)=>{
                    self.typeList = response.data;
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });

            },
            search(onetype,pageNum){
              var self=this;
              self.items=[];
              var dirtype={
                type:"",
                pageNum:1
              };
              dirtype.type=onetype;
              dirtype.pageNum=pageNum;
              self.$axios({
                    url:'/encyclopediaTypeDir',
                    method:'post',
                    baseURL:self.hostURL,
                    data:dirtype
                }).then((response)=>{
                    self.items = response.data;
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });

            },
            selected(onetype){
              var self=this;
              self.type=onetype;
              self.search(onetype,1);
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.pageNum);
                var type=self.type;
                var pageNum=self.pageNum;
                self.search(type,pageNum);
            },
            encyclopediaClick(item){
                var self=this;
                console.log(item.id);
                self.$router.push('/user/encyclopedia-prop?'+item.id);
            }
        },
        
        mounted(){
            var self = this;
           self.getTypes();
           self.selected("type1");
        }
    }
</script>
<style scoped>
.crumbs{
    text-decoration: none;
}
#show-pedias{
  max-width:600px;
  margin:0 auto;

}
#navigation{
  float:left;
  width:200px;
  font-family:Arial;
}
#navigation ul {
list-style-type:none; /* 不显示项目符号 */
margin:0px;
padding:0px;
}
#navigation li {
border-bottom:1px solid #ED9F9F; /* 添加下划线 */
}
#navigation li{
display:block; /* 区块显示 */
padding:5px 5px 5px 0.5em;
text-decoration:none;
border-left:12px solid #eee; /* 左边的粗红边 */
border-right:1px solid #711515; /* 右侧阴影 */
background-color:#778899;
color:#FFFFFF;
}
#navigation li:link, #navigation li a:visited{
background-color:#c11136;
color:#FFFFFF;
}
#navigation li :hover{ /* 鼠标经过时 */
background-color:#990020; /* 改变背景色 */
color:#ffff00; /* 改变文字颜色 */
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
