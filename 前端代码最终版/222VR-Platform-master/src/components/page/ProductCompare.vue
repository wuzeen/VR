<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>产品中心</el-breadcrumb-item>
                <el-breadcrumb-item>产品对比</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main-left">
               <el-menu default-active="#/1" class="el-menu-vertical-demo" :router="true" theme="light" >
                <el-menu-item  class="menu-item" index='#/1':class="{'isActive': active}"  @click='parameter()'>产品参数</el-menu-item>
                <el-menu-item  class="menu-item" index='#/2':class="{'isActive': !active}"  @click='security()'>安全性</el-menu-item>
                <el-menu-item  class="menu-item" index='#/3':class="{'isActive': !active}"  @click='compatibility()'>电磁兼容性</el-menu-item>
                <el-menu-item  class="menu-item" index='#/4':class="{'isActive': !active}"  @click='properties()'>性能</el-menu-item>
                <el-menu-item  class="menu-item" index='#/5':class="{'isActive': !active}"  @click='asthenopia()'>视疲劳</el-menu-item>
              </el-menu> 
              
        </div>
        <div class='compare-box'>
        <table class='compare-table' v-if="show1">
            <tbody>
                <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.picLocation">
                            </div>
                        </td>
                    </tr>
                     <tr class="param-list">
                        <th class="cate-title"><strong>
                            品牌
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.brand}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            销售型号
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.salesmodel}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            产品型号
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.productmodel}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            屏幕类型
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.screentype}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            单眼分辨率
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.monocularresolution}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            重量(kg)
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.weight}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                           CPU(GHz)
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.cpu}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            内存(GB)
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.memory}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            电池容量（mAh)
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.batteryCapacity}}</span>
                            </div>
                        </td>
                    </tr>
            </tbody>
        </table>

        <table class='compare-table' v-if="show2">
            <tbody>
                <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.picLocation">
                            </div>
                        </td>
                </tr>
                <tr class="param-list">
                        <th class="cate-title"><strong>
                            工作温度(℃)<img :src="pic_hint" style="{width:25px; height:25px;}" title='工作温度小于55℃表示正常'>
                        </strong>
                        <br>
                        </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.workingtemperature}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            蓝光辐照度(W·m^－2·sr^－1)<img :src="pic_hint" style="{width:25px; height:25px;}" title='声压小于100dB表示正常'>
                         </strong>
                         <br>
                         <br>
                         
                         </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.bluerayirradiance}}</span>
                            </div>
                        </td>
                    </tr>
                     <tr class="param-list">
                        <th class="cate-title"><strong>
                            声压(dB(A))<img :src="pic_hint" style="{width:25px; height:25px;}" title='声压小于100dB表示正常'>
                        </strong>
                        </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.soundpressurelevel}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            播放器最大输出电压(mV)<img :src="pic_hint" style="{width:25px; height:25px;}" title='最大输出电压小于150mV表示正常'>
                        </strong>
                        <br>

                        </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.maximumoutputvoltage}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            耳机的宽带特征电压(mV)<img :src="pic_hint" style="{width:25px; height:25px;}" title='特征电压大于75mV表示正常'>
                        </strong>
                        <br>
                    
                         </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.broadbandcharacteristicvoltageofearphone}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            边界警示
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.boundarywarning}}</span>
                            </div>
                        </td>
                    </tr>
            </tbody>
        </table>

        <table class='compare-table' v-if="show3">
            <tbody>
                <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.picLocation">
                            </div>
                        </td>
                </tr>
                <tr class="param-list">
                        <th class="cate-title"><strong>
                            辐射骚扰
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.radiationdisturbance">
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            静电放电
                         </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.electrostaticdischarge">
                            </div>
                        </td>
                    </tr>
            </tbody>
        </table>

        <table class='compare-table' v-if="show4">
            <tbody>
                <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.picLocation">
                            </div>
                        </td>
                </tr>
                <tr class="param-list">
                        <th class="cate-title"><strong>
                            视场角(°)<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong>
                        </th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.fieldangle}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            刷新率(Hz)<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.refreshrate}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            系统延迟(ms)<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.systemdelay}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            跟踪模式(m)
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data. trackingmode}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            跟踪范围
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span>{{data.trackingrange}}</span>
                            </div>
                        </td>
                    </tr>
                
            </tbody>
        </table>

        <table class='compare-table' v-if="show5">
            <tbody>
                <tr class="cate-tr">
                        <td class="cate-title">
                            <strong>产品外观</strong>
                        </td>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <img :src="data.picLocation">
                            </div>
                        </td>
                </tr>
                 <tr class="param-list">
                        <th class="cate-title"><strong>
                            视力变化均值<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.meanchangeofvisualacuity}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            SSQ均值<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.ssqmean}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="param-list">
                        <th class="cate-title"><strong>
                            CVS均值<img :src="pic_hint" style="{width:25px; height:25px;}" title='级别划分：一级：000-010，二级：010-020，三级：020-030'>
                        </strong></th>
                        <td v-for="data in datas">
                            <div class="param-content">
                                <span class='safety' >{{data.cvsmean}}</span>
                            </div>
                        </td>
                    </tr>
                
                
            </tbody>
        </table>
        </div>     
    </div>
</template>

<script>
import hint from '../../assets/hint.png';    
    export default {
        data: function(){
            return {
                show1:true,
                show2:false,
                show3:false,
                show4:false,
                show5:false,
                // show:[true,false,false,false,false],
                pic_hint:hint,
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                datas:[{
                    id:1,
                    brand:1,
                    salesmodel:'name',
                    productmodel:"name1",
                    picLocation:"./static/img/img.jpg",
                    //产品配置
                    screentype:"22222",//屏幕类型
                    monocularresolution:"222222",//单眼分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    batteryCapacity:1,
                    //安全性
                    workingtemperature:1,//温升/发热
                    bluerayirradiance:1,//蓝光辐照度
                    soundpressurelevel:1,//声压
                    maximumoutputvoltage:'110,  ≤150mv',//播放器的最大输出电压
                    broadbandcharacteristicvoltageofearphone:5555,//耳机的宽带特征电压
                    boundarywarning:"222222222",//边界警示
                    // 电磁兼容性
                    radiationdisturbance:"./static/img/img.jpg",//辐射骚扰
                    electrostaticdischarge:"./static/img/img.jpg",//静电放电
                    //性能
                    fieldangle:1,//视场角
                    refreshrate:1,//刷新率
                    systemdelay:1,//系统延迟
                    trackingmode:1,//跟踪模式
                    trackingrange:1,//跟踪范围
                    //20min视疲劳
                    meanchangeofvisualacuity:1,//视力变化均值
                    ssqmean:1,//SSQ均值
                    cvsmean:1 //CVS均值
                    
                },
                {
                    id:1,
                    brand:1,
                    salesmodel:'name',
                    productmodel:"name1",
                    picLocation:"./static/img/img.jpg",
                    //产品配置
                    screentype:"22222",//屏幕类型
                    monocularresolution:"222222",//单眼分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    batteryCapacity:1,
                    //安全性
                    workingtemperature:1,//温升/发热
                    bluerayirradiance:1,//蓝光辐照度
                    soundpressurelevel:1,//声压
                    maximumoutputvoltage:1000,//播放器的最大输出电压
                    broadbandcharacteristicvoltageofearphone:5555,//耳机的宽带特征电压
                    boundarywarning:"222222222",//边界警示
                    // 电磁兼容性
                    radiationdisturbance:"./static/img/img.jpg",//辐射骚扰
                    electrostaticdischarge:"./static/img/img.jpg",//静电放电
                    //性能
                    fieldangle:1,//视场角
                    refreshrate:1,//刷新率
                    systemdelay:1,//系统延迟
                    trackingmode:1,//跟踪模式
                    trackingrange:1,//跟踪范围
                    //20min视疲劳
                    meanchangeofvisualacuity:1,//视力变化均值
                    ssqmean:1,//SSQ均值
                    cvsmean:1, //CVS均值
                },
                {
                    id:1,
                    brand:1,
                    salesmodel:'name',
                    productmodel:"name1",
                    picLocation:"./static/img/img.jpg",
                    //产品配置
                    screentype:"22222",//屏幕类型
                    monocularresolution:"222222",//单眼分辨率
                    weight:1,//重量
                    cpu:1,
                    memory:1,
                    batteryCapacity:1,
                    //安全性
                    workingtemperature:1,//温升/发热
                    bluerayirradiance:1,//蓝光辐照度
                    soundpressurelevel:1,//声压
                    maximumoutputvoltage:1000,//播放器的最大输出电压
                    broadbandcharacteristicvoltageofearphone:5555,//耳机的宽带特征电压
                    boundarywarning:"222222222",//边界警示
                    // 电磁兼容性
                    radiationdisturbance:"./static/img/img.jpg",//辐射骚扰
                    electrostaticdischarge:"./static/img/img.jpg",//静电放电
                    //性能
                    fieldangle:1,//视场角
                    refreshrate:1,//刷新率
                    systemdelay:1,//系统延迟
                    trackingmode:1,//跟踪模式
                    trackingrange:1,//跟踪范围
                    //20min视疲劳
                    meanchangeofvisualacuity:1,//视力变化均值
                    ssqmean:1,//SSQ均值
                    cvsmean:1, //CVS均值
                }]

            }//return end
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

            getData(){
                var self = this;
                var postId = {
                    idList:[]
                };
                var _url = "";
                // var str = localStorage.getItem('store');
                // var arr = str.split(',');
                // for(let i = 0;i<arr.length;i++){
                //     arr[i] = parseInt(arr[i]);
                // }
                var t=JSON.parse(localStorage.getItem('compare_data'));
                for(var i=0;i<t.data.length;i++)
                    postId.idList.push(t.data[i].id);
                var kind = localStorage.getItem('kind');
                if(kind=="ivr"){
                    _url = '/ivrCompare';
                }
                else if(kind=="svr"){
                    _url = '/svrCompare';
                }
                else if(kind=="evr"){
                    _url = '/evrCompare';
                }
                self.datas = {};
                self.$axios({
                    url:_url,
                    // url:'./static/ivr.json',
                    method:'post',
                    data:postId,
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.datas= response.data.data.payload;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            // getInfo(id){
            //     for(var i=0;i<5;i++)
            //     {
            //         if(this.show[i]==true)
            //         {
                        
            //             this.show[i]=false;
            //         }

            //     }
            //     this.show[id]=true;
            //     for(var i=0;i<5;i++)
            //     {
            //         // if(this.show[i]==true)
            //         // {
                        
            //         //     this.show[i]=false;
            //         // }
            //         console.log(this.show[i]);
            //     }
            // },
            parameter(){
                
                this.show1 = true;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = false;
            },
            security(){
                this.show1 = false;this.show2 = true;this.show3 = false;this.show4 = false;this.show5 = false;
            },
            compatibility(){
                this.show1 = false;this.show2 = false;this.show3 = true;this.show4 = false;this.show5 = false;
            },
            properties(){
                this.show1 = false;this.show2 = false;this.show3 = false;this.show4 = true;this.show5 = false;
            },
            asthenopia(){
                this.show1 = false;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = true;

            }

           
            
        },
        
        mounted(){
            var self= this;
            self.getData();
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
.compare-box{
    padding: 28px;
    width: 880px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    margin-left:200px;
}
.compare-table{
    border-collapse: collapse;
    width: 800px;
    margin-left: 40px;
    
}
.compare-table .cate-title{
    text-align: left;
    height: 35px;
    border: 1px solid #e6e6e6;
    padding-left: 10px;
    background: #fafafa;
}
.compare-table td{
    width: 218px;
    padding: 8px 0;
    zoom: 1;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
    border: 1px solid #e6e6e6;
}
.cate-title strong{
    position: relative;
    display: block;
    padding-left: 17px;
    height: 20px;
    font: 16px/20px 'Microsoft YaHei',arial;
    background-position: -87px 2px;
    color: #333;
    font-weight: bold;
}
.compare-table th{
    padding: 8px 10px;
    width: 102px;
    border: 1px solid #e6e6e6;
    background: #fafafa;
    font-weight: normal;
    text-align: right;
    line-height: 18px;
    font-size: 14px
}
.param-content{
    width: 200px;
    white-space: nowrap;
}
.param-content img{
    width:100%;
    margin-left: 7px;
}
.main-left{
    text-align: center;
    width: 200px;
    float: left;
}
/*.safety{
    cursor:help;
}*/

</style>