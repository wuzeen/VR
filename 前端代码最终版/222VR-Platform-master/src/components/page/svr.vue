<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item to="/user/product-list">产品列表</el-breadcrumb-item>
                <el-breadcrumb-item>PC头显</el-breadcrumb-item>
                <el-breadcrumb-item to='/user/svr-comment'>产品简介</el-breadcrumb-item>
                <el-breadcrumb-item>详细参数</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="compare" >
            <div id="compare_box">
                <div class="compare_item" v-for="(item,index) in compare_data.data">
                    <div>
                        <img :src="item.pic_location" class="compare_item_img">
                        <div class="el-icon-circle-cross" id="cancel_btn" @click="cancelCompare(index)"></div>
                    </div><br>
                </div>
                <br>
                <el-button class="compare_btn" :plain="true" type="warning" @click="toCompareRes()">查看对比</el-button>
            </div>
        </div>
        <div class="product-box">
            <el-button :plain="true" type="warning" style="float:right" @click="compare()">加入对比</el-button>
            <div class="box-param">
                <div class="param-title">
                    <h3>{{data.salesmodel}}</h3>
                </div>
                <div class="param-tab">
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>产品外观</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <div class="img-container">
                                                <img :src="data.picLocation">
                                            </div>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>品牌</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <span class="para-val">{{data.brand}}</span>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>销售型号（名）</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <span class="para-val">{{data.salesmodel}}</span>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>产品型号</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <span class="para-val">{{data.productmodel}}</span>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>产品配置</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">屏幕类型</span>
                                                <span class="para-val">{{data.screentype}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">单眼分辨率</span>
                                                <span class="para-val">{{data.monocularresolution}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">重量(kg)</span>
                                                <span class="para-val">{{data.weight}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>安全性</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">工作温度(℃)</span>
                                                <span class="para-val">{{data.workingtemperature}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">蓝光辐照度（W·m^-2·sr^-1）</span>
                                                <span class="para-val">{{data.bluerayirradiance}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">声压级（dB(A)）</span>
                                                <span class="para-val">{{data.soundpressurelevel}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">播放器最大输出电压（mV）</span>
                                                <span class="para-val">{{data.maximumoutputvoltage}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">耳机的宽带特征电压（mV）</span>
                                                <span class="para-val">{{data.broadbandcharacteristicvoltageofearphone}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">边界警示</span>
                                                <span class="para-val">{{data.boundarywarning}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>电磁兼容性</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">辐射骚扰</span>
                                                <div class="img-container">
                                                    <img :src="data.radiationdisturbance">
                                                </div>
                                            </li>
                                            <li>
                                                <span class="para-name">静电放电</span>
                                                <div class="img-container">
                                                    <img :src="data.electrostaticdischarge">
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                 <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>性能</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">视场角（°）</span>
                                                <span class="para-val">{{data.fieldangle}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">刷新率（Hz）</span>
                                                <span class="para-val">{{data.refreshrate}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">系统延迟(ms)</span>
                                                <span class="para-val">{{data.systemdelay}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">跟踪模式</span>
                                                <span class="para-val">{{data.trackingmode}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">跟踪范围（m）</span>
                                                <span class="para-val">{{data.trackingrange}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- ========================================= -->
                    <table>
                        <tbody>
                            <tr>
                                <th>视疲劳（20min）</th>
                                <td>
                                    <div class="tab-content">
                                        <ul class="category">
                                            <li>
                                                <span class="para-name">视力变化均值</span>
                                                <span class="para-val">{{data.meanchangeofvisualacuity}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">SSQ均值</span>
                                                <span class="para-val">{{data.ssqmean}}</span>
                                            </li>
                                            <li>
                                                <span class="para-name">CVS均值</span>
                                                <span class="para-val">{{data.cvsmean}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

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
                radio1:'yes',
                radio2:'yes',
                display1:true,
                display2:true,
                display3:true,
                compare_data:{
                    data:[{
                       type:"svr",
                       pic_location:"./static/img/img.jpg"
                       
                    }]
                },
                data:{
                    id:1,
                    remark:"remark",
                    brand:"HTC",
                    salesmodel:"salesmodel1", //销售型号
                    productmodel:"productmodel1",
                    screentype:"screentype",
                    monocularresolution:"monocaluarresolution",
                    weight:1,
                    workingtemperature:"workingtemperature",
                    bluerayirradiance:"bluerayirradiance",
                    soundpressurelevel:"soundpressurelevel",
                    maximumoutputvoltage:"maximumoutputvoltage",
                    broadbandcharacteristicvoltageofearphone:"bbcvop",
                    boundarywarning:"bw",
                    radiationdisturbance:"/static/img/img.jpg",
                    electrostaticdischarge:"/static/img/img.jpg",
                    fieldangle:"fieldangle",
                    refreshrate:"rsr",
                    systemdelay:"smy",
                    trackingmode:"tm",
                    trackingrange:"tr",
                    meanchangeofvisualacuity:"mcova",
                    ssqmean:"ssqmean",
                    cvsmean:"cvsmean",
                    picLocation:"/static/img/img.jpg",
                },
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
                self.data={
                    id:1,
                    remark:"remark",
                    brand:"HTC",
                    salesmodel:"salesmodel1", //销售型号
                    productmodel:"productmodel1",
                    screentype:"screentype",
                    monocularresolution:"monocaluarresolution",
                    weight:1,
                    workingtemperature:"workingtemperature",
                    bluerayirradiance:"bluerayirradiance",
                    soundpressurelevel:"soundpressurelevel",
                    maximumoutputvoltage:"maximumoutputvoltage",
                    broadbandcharacteristicvoltageofearphone:"bbcvop",
                    boundarywarning:"bw",
                    radiationdisturbance:"/static/img/img.jpg",
                    electrostaticdischarge:"/static/img/img.jpg",
                    fieldangle:"fieldangle",
                    refreshrate:"rsr",
                    systemdelay:"smy",
                    trackingmode:"tm",
                    trackingrange:"tr",
                    meanchangeofvisualacuity:"mcova",
                    ssqmean:"ssqmean",
                    cvsmean:"cvsmean",
                    picLocation:"/static/img/img.jpg",
                };
                self.$axios({
                    url:'/svr/'+localStorage.getItem("salesModel"),
                    // url:'./static/data.json',
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.data= response.data.payload;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            //更新对比
            refreshCompare(){
                var self=this;
                self.compare_data=JSON.parse(localStorage.getItem('compare_data'));
            },
            //加入对比
            compare(){
                var self=this;
                var t=JSON.parse(localStorage.getItem('compare_data'));
                console.log("compare data: "+t);
                var item={
                    id:localStorage.getItem("salesModel"),
                    type:"svr",
                    pic_location:localStorage.getItem("proPic")
                };
                var add=self.checkCompare(localStorage.getItem('salesModel'));
                if(add){
                    if(t.data.length==0){
                        t.data.push(item);
                        localStorage.setItem('compare_data',JSON.stringify(t));
                        localStorage.setItem('kind','svr');
                        self.refreshCompare();
                    }else{
                        if(t.data.length<4){
                            if(item.type==t.data[0].type){
                                t.data.push(item);
                                localStorage.setItem('compare_data',JSON.stringify(t));
                                localStorage.setItem('kind','svr');
                                self.refreshCompare();
                            }else{
                                self.$message('只有同类产品才能加入对比！');
                            }
                        }else{
                            self.$message('最多只能比较四个产品！');
                        }
                    }   
                }  
            },
            //取消对比
            cancelCompare(index){
                var t=JSON.parse(localStorage.getItem('compare_data'));
                t.data.splice(index,1);
                localStorage.setItem('compare_data',JSON.stringify(t));
                this.refreshCompare();
            },
            //防止重复加入对比
            checkCompare:function(id){
                var t=JSON.parse(localStorage.getItem('compare_data'));
                for(var i=0;i<t.data.length;i++){
                    if(id==t.data[i].id){
                        return false;
                    }
                }
                return true;
            },
            //跳转至比较结果页面
            toCompareRes(){
                var self=this;
                var t=JSON.parse(localStorage.getItem('compare_data'));
                if(t.data.length!=0)
                    self.$router.push('/user/product-compare');
                else self.$message("您还没有加入对比的产品");
            }

        },
        
        mounted(){
            var self= this;
            console.log("2222");
            var arr = location.href.split('?');
            var id = arr[1];
            console.log(id);
            self.getData(id);  
            self.refreshCompare();
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
.product-box{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
}
.box-param{
    width:100%;
    margin-top:5px;
}
.param-title{
    height: 40px; 
    border-top:none;
    border-bottom: 1px solid #e6e6e6;
    text-align: center;
}
.param-title h3{
    padding:0 20px;
    font: normal 16px/40px 'Microsoft YaHei',arial;
}
.param-tab table{
    table-layout: fixed; 
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e6e6e6;
    border-bottom: 0 none;
}
.param-tab th{
    width: 118px;
    padding: 15px 0 0 20px;
    background: #fafafa;
    border-right: 1px solid #e6e6e6;
    text-align: left;
    font: bold 16px/26px "Microsoft YaHei",arial;
    vertical-align: top;
}
.param-tab td{
    width: 605px;
    padding: 8px 0 6px;
    vertical-align: top;
}
.tab-content{
    padding: 6px 20px 8px 20px;
}
ul{
    list-style: none;    
}
.category li{
    position: relative;
    padding: 2px 0 2px 230px;
    line-height: 26px;
    _zoom: 1;
    word-wrap: break-word;
    font: 14px/26px 'Microsoft YaHei',arial;
    color: #666;
}
.para-name{
    position: absolute;
    top: 2px;
    left:0;
    font-weight: bold;
}
.para-val{
    position: relative;
    color: #666;
    border-bottom: 1px dashed #0a50a1;
}
.img-container{
    max-width: 50%;
}
.img-container img{
    width: 100%;
}
.text{
    width: 400px;
    font-size: 15px;
}

.btn{
    margin-left: 180px;
    margin-top: 30px
}
.compare{
    display:block;
    width:175px;
    /*height:246px;*/
    position:absolute;
    bottom: 300px;
    /*left:180px;*/
    z-index:9999;
    top:128px;
    left:900px;
}
#compare_box{
    width: 150px;
    /*height: 450px;*/
    border: 1px solid #C0CCDA;
    /*margin-top: 150px;
    margin-right: 80px;*/
    box-shadow: 0 0 10px #C0CCDA;
    /*cursor: move;*/
}
#cancel-btn{
    float: right;
    width: 10px;
    height: 50px;
    margin-top: 40px;
    margin-left: 15px;
    cursor:pointer;
}
.compare_item{
    float: left;
    width: 90%;
    height: 100px;
}
.compare_item_img{
    width: 70%;
    height: 80%;
    margin-left: 10px;
    margin-top: 10px;
   
}
.compare_btn{
  margin: 20px 0 10px 30px;
  /*top:300px;*/
}
</style>