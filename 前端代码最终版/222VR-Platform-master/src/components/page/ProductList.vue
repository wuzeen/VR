<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
                <div class="list-wrap">
                    <el-tabs v-model="activePane" @tab-click="tabClick">
                        <el-tab-pane label="一体机" name="ivr">
                            <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in ivrList" type="primary" @click="ivrClick(item)">
                                            <div class="product-img">
                                                <img :src="item.picLocation"/>
                                            </div>
                                            <h3>{{item.salesmodel}}</h3>
                                            <h3>{{item.productmodel}}</h3>    
                                                <!--<el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="ivrClick(item)"> 
                                                查看详细-->
                                            </el-button>                                  
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleIvrChange"
                                      :current-page.sync="ipageNum"
                                      :page-size="9"
                                      layout="total, prev, pager, next"
                                      :total="ipageTotal">
                                    </el-pagination>
                                    </div>
                            </el-row>   
                        </el-tab-pane>

                        <el-tab-pane label="PC头显" name="svr">
                               <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in svrList" type="primary" @click="svrClick(item)">
                                            <div class="product-img">
                                                <img :src="item.picLocation"/>
                                            </div>
                                            <h3>{{item.salesmodel}}</h3>
                                            <h3>{{item.productmodel}}</h3>    
                                            <!--<el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="svrClick(item)"> 
                                                查看详细
                                            </el-button>                                  -->
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleSvrChange"
                                      :current-page.sync="spageNum"
                                      :page-size="9"
                                      layout="total, prev, pager, next"
                                      :total="spageTotal">
                                    </el-pagination>
                                    </div>
                            </el-row>  
                        </el-tab-pane>
                        <el-tab-pane label="手机盒子" name="evr">
                               <el-row>
                                    <ul class="product-list clearfix">
                                        <li class="product-item" v-for="item in evrList" type="primary" @click="evrClick(item)">
                                            <div class="product-img">
                                                <img :src="item.picLocation"/>
                                            </div>
                                            <h3>{{item.salesmodel}}</h3>
                                            <h3>{{item.productmodel}}</h3>   
                                            <!--<el-button type="success" @click="compare(item)" :type="comparedState[item.id]?cancelType:shareType" > 
                                                 {{comparedState[item.id]?cancelMsg:shareMsg}}   
                                                </el-button> 
                                            <el-button type="primary" @click="evrClick(item)"> 
                                                查看详细
                                            </el-button>                                  -->
                                        </li>
                                    </ul>
                                    </el-row>
                                <el-row>
                                    <div class="pagination">
                                        <el-pagination
                                      @current-change="handleEvrChange"
                                      :current-page.sync="epageNum"
                                      :page-size="9"
                                      layout="total, prev, pager, next"
                                      :total="epageTotal">
                                    </el-pagination>
                                    </div>
                            </el-row>  
                        </el-tab-pane>
                    </el-tabs>
                </div>
        </el-row>

    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                hostURL:'/VR',
                ivrURL:'/products/ivr', 
                svrURL:'/products/svr', 
                evrURL:'/products/evr',
                activePane: 'ivr',
                selected:1, //1== yitiji  2==PCtou xian  3==shou ji he zi
                comparedNum:0,//number of compared products
                ajaxData:{
                    list:[
                        {
                            id:1,
                            salesmodel:'name1',
                            productmodel:'name1.1',
                            picLocation:'111dd',
                        }
                    ]
                },
                ivrList:[
                    {
                        id:1,
                        salesmodel:'name1',
                        productmodel:'name1.1',
                        picLocation:'111dd',
                    }
                ],//ji cheng
                svrList:[],//wai ke 
                evrList:[],//wai jie
                ipageNum:1,
                ipageTotal:9,
                ipageSize:1,
                epageNum:1,
                epageTotal:9,
                epageSize:1,
                spageNum:1,
                spageTotal:9,
                spageSize:1
            }
        },
        methods:{
            tabClick(val){
                var self= this;
                self.comparedNum = 0;
                switch(val.index){
                    case "0":
                        self.getivrList();
                        break;
                    case "1":
                        self.getsvrList();
                        break;
                    case "2":
                        self.getevrList();
                        break;
                    default:
                        break;
                }
            },
            ////////////////////////////////
            handleIvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.ipageNum);
                self.getivrList();
                
            },
            handleSvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.spageNum);
                self.getsvrList();
                
            },
            handleEvrChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.epageNum);
                self.getevrList();

            },
            ///////////////////////////
            getivrList(){
                var self=this;
                var _url = self.ivrURL+'/'+self.ipageNum;   //跳转url
                self.$axios({
                    url:_url,
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.ivrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.ivrList[i] = self.ajaxData.payload[i];
                    }
                    self.ipageTotal=self.ajaxData.code;
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            getsvrList(){
                var self=this;
                var _url = self.svrURL+'/'+self.spageNum;
                self.$axios({
                    url:_url,
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.svrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.svrList[i] = self.ajaxData.payload[i];
                    }
                    self.spageTotal=self.ajaxData.code;
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            getevrList(){
                var self=this;
                var _url = self.evrURL+'/'+self.epageNum;
                self.$axios({
                    url:_url,
                    methods:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.evrList = [];
                    self.ajaxData = response.data.data;
                    for(let i=0;i<self.ajaxData.payload.length;i++){
                        self.evrList[i] = self.ajaxData.payload[i];
                    }
                    self.epageTotal=self.ajaxData.code;
                }).catch((error)=>{
                    this.$message({
                        type:'info',
                        message:'connection fail,press F12 to see the error in console'
                    });
                    console.log("ERROR:");
                    console.log(error);
                });
            },
            ivrClick(item){
                var self=this;
                self.selected = 1;
                localStorage.setItem("salesModel",item.id);
                localStorage.setItem("proName",item.salesmodel);
                localStorage.setItem("proPic",item.picLocation);
                self.$router.push('/user/ivr-comment?'+item.id); //跳转至产品简介及评论页面
            },
            svrClick(item){
                var self=this;
                self.selected = 2;
                localStorage.setItem("salesModel",item.id); //覆盖之前的
                localStorage.setItem("proName",item.salesmodel);
                localStorage.setItem("proPic",item.picLocation);
                self.$router.push('/user/svr-comment?'+item.id);
            },
            evrClick(item){
                var self=this;
                self.selected = 3;
                localStorage.setItem("salesModel",item.id); //覆盖之前的
                localStorage.setItem("proName",item.salesmodel);
                localStorage.setItem("proPic",item.picLocation);
                self.$router.push('/user/evr-comment?'+item.id); 
            },

        },
        mounted(){
            var self = this;
            self.getivrList();
            // localStorage.clear();
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
/*.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%; 
}*/

/*=======================================*/
ul {
    list-style: none;
    display: block;

}
li {
    list-style-type:none;
    width:100%;
    border:1px solid #ccc;
}
a {
    text-decoration: none;
}
a:hover, a:visited {
    text-decoration: none;
}
.product-list{
    width:1000px;
}
.product-item{
    cursor: pointer;
    float:left;
    width:240px;
    height:260px;
    padding: 30px 20px 20px 20px;
    text-align: center;

}
.product-img{
    width:200px;
    height:200px;
    margin:0 auto;
}
.product-img img{
    width:100%;
}
.product-item h3{
    margin-top:12px;
    margin-bottom:12px;
    font-size: 20px;
    font-weight: lighter;
}

.pagination{
    margin-left:50px;
}

</style>