<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>问卷填写</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="questionaire">
            <p>问卷</p>
            <hr>
            <div class="selector">
                <div class="protype_selector">
                    <el-select v-model="pro_type.value" placeholder="请选择产品类型" @change="sendProType()">
                        <el-option v-for="item in pro_type.opts" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="prosales_selector" >
                    <el-select v-model="pro_sales.value" placeholder="请选择产品型号" :disabled="pro_sales_disable">
                        <el-option v-for="item in pro_sales.opts" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class='questionbox'>
                <form id="questions">
                    <div class="single_question" v-for="(a,index) in answ_data.answers">
                        <p style="margin-bottom:10px">{{a.question}}</p>
                        <div class="answer" v-if="ques_data.questions[index].questiontype=='single'">
                            <label class="left_radio"><el-radio class="radio" v-model="a.answer" label="1">是</el-radio></label>
                            <el-radio class="radio" v-model="a.answer" label="2">否 </el-radio>
                        </div>
                        <div class="essay-answer" v-else-if="ques_data.questions[index].questiontype=='essay'">
                            <el-input type="textarea" :row="3" placeholder="请输入内容" v-model="a.answer" resize=none></el-input>
                        </div>
                    </div>
                </form>
                <div class="submit_btn">
                    <el-button type="primary" @click="sendQuestionaire()">提交问卷</el-button>
                </div>
            </div>
        </div>
     
         
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                uid:"1",

                ques_data:{
                    questions:[{
                        id:1,
                        question:"1.你是谁？",
                        questiontype:"single"
                    },{
                        id:3,
                        question:"3.你对某个产品有什么建议？",
                        questiontype:"essay"
                    }]
                },
                answ_data:{
                    answers:[{
                        question:1,
                        user:self.uid,
                        answer:"1",
                        producttype:"",
                        productname:""
                    },{
                        question:3,
                        user:self.uid,
                        answer:"",
                        producttype:"",
                        productname:""
                    }]
                },

                pro_type:{
                    opts: [{
                        value: 'AllInOnePc',
                        label: '一体机'
                        }, {
                        value: 'PcheadSet',
                        label: 'PC头显'
                        }, {
                        value: 'MobileBox',
                        label: '手机盒子'
                        }], 
                        value: ''
                },
                pro_sales:{
                    opts: [{
                        value: '',
                        label: ''
                        }],
                        value: ''
                },
                pro_sales_disable:true
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
            getData(id){
                var self = this;
                self.ques_data = {
                    questions:[{
                        id:1,
                        question:"1.你是谁？",
                        questiontype:"single"
                    },{
                        id:2,
                        question:"2.我是谁？",
                        questiontype:"single"
                    },{
                        id:3,
                        question:"3.你对某个产品有什么建议？",
                        questiontype:"essay"
                    }]
                };
                self.answ_data={
                    answers:[{
                        question:"1.你是谁？",
                        user:self.uid,
                        answer:"1",
                        producttype:"",
                        productname:""
                    },{
                        question:"2.我是谁？",
                        user:self.uid,
                        answer:"2",
                        producttype:"",
                        productname:""
                    },{
                        question:"3.你对某个产品有什么建议？",
                        user:self.uid,
                        answer:"",
                        producttype:"",
                        productname:""
                    }]
                };
                self.$axios({
                    url:'/Question',
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.ques_data.questions= response.data;
                    self.answ_data.answers=[];
                    for(var i=0;i<self.ques_data.questions.length;i++){
                        self.answ_data.answers.push({
                            question:self.ques_data.questions[i].question,
                            user:localStorage.getItem('ms_userid'),
                            answer:"",
                            producttype:"",
                            productname:""
                        })
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            },
            sendQuestionaire(){
                var self = this;
                var send=true;
                for(var i=0;i<self.answ_data.answers.length;i++){
                    if(self.answ_data.answers[i].answer==""){
                        send=false;
                        break;
                    }
                }
                if(send&&self.pro_sales.value!=""&&self.pro_type.value!=""){
                    for(var i=0;i<self.answ_data.answers.length;i++){
                        self.answ_data.answers[i].producttype=self.pro_type.value;
                        self.answ_data.answers[i].productname=self.pro_sales.value;
                    }
                    
                    self.$axios({
                        url:'/Answer',
                        method:'post',
                        baseURL: self.hostURL,
                        data: self.answ_data.answers
                    }).catch((error)=>{
                        console.log(error);
                    });
                    //发送数据后跳转
                    self.$router.push('/user/questionaire/statistic');
                }else{
                    self.$message('还有内容未填写！');
                }
                
            },
            sendProType(){
                var self=this;
                // self.pro_type={
                //     opts: [{
                //         value: 'AllInOnePc',
                //         label: '一体机'
                //         }, {
                //         value: 'PcheadSet',
                //         label: 'PC头显'
                //         }, {
                //         value: 'MobileBox',
                //         label: '手机盒子'
                //         }], 
                //     value: ''
                // };
                self.pro_sales={
                    opts: [{
                        value: '',
                        label: ''
                        }],
                    value: ''
                };
                console.log("type");
                self.$axios({
                    url:'/Question/type?type='+self.pro_type.value,
                    method:'get',
                    baseURL:self.hostURL
                }).then(response=>{
                    for(var i=0;i<response.data.length;i++){
                        self.pro_sales.opts.push({value:response.data[i],label:response.data[i]});
                    }
                    self.pro_sales_disable=false;
                });
            }

        },
        mounted(){
            var self= this;
            // var arr = location.href.split('?');
            // var id = arr[1];
            // console.log(id);
            self.getData();
        }
    }
</script>

<style>
.crumbs{
    text-decoration: none;
}
.bread{
    font-size: 16px;
}
#questions{
    margin-left: 30px;
}
.questionaire p{
    font-size: 18px;
    margin-top: 30px;
}
.questionaire hr{
    width: 72.7%;
}
.left_radio{
    margin-right: 200px;
    margin-left: 30px;
}
.essay-answer{
    width: 400px;
    /*font-size: 15px;*/
}
.submit_btn{
    margin-left: 180px;
    margin-top: 30px
}
.selector{
    width:700px;
    margin-top: 20px;
    display: flex;
}
.protype_selector{
    margin-left: 50px;
    float:left;
}
.prosales_selector{
    margin-left: 40px;
    flex: 1;
}
.questionbox{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    margin-top: 20px;
}
</style>