webpackJsonp([13],{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(619)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(529),
  /* template */
  __webpack_require__(591),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            compare_data: {
                data: [{
                    type: "ivr",
                    pic_location: "./static/img/img.jpg"

                }, {
                    type: "ivr",
                    pic_location: "./static/img/img.jpg"

                }]
            },
            data: {
                id: 1,
                name: "name1",
                brand: 1,
                salesmodel: 'name',
                productmodel: "name1",
                picLocation: "./static/img/img.jpg",
                //产品配置
                screentype: "22222", //屏幕类型
                monocularresolution: "222222", //分辨率
                weight: 1, //重量
                cpu: 1,
                memory: 1,
                batteryCapacity: 1,
                //安全性
                workingtemperature: 1, //温升/发热
                bluerayirradiance: 1, //蓝光辐照度
                soundpressurelevel: 1, //声压
                maximumoutputvoltage: 1000, //播放器的最大输出电压
                broadbandcharacteristicvoltageofearphone: 5555, //耳机的宽带特征电压
                boundarywarning: "222222222", //边界警示
                // 电磁兼容性
                radiationdisturbance: "./static/img/img.jpg", //辐射骚扰
                electrostaticdischarge: "./static/img/img.jpg", //静电放电
                //性能
                fieldangle: 1, //视场角
                refreshrate: 1, //刷新率
                systemdelay: 1, //系统延迟
                trackingmode: 1, //跟踪模式
                trackingrange: 1, //跟踪范围
                //20min视疲劳
                meanchangeofvisualacuity: 1, //视力变化均值
                ssqmean: 1, //SSQ均值
                cvsmean: 1 //CVS均值
            }
        };
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
            switch (code) {
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

        getData(id) {
            var self = this;
            self.data = {
                id: 1,
                brand: 1,
                salesmodel: 'name',
                productmodel: "name1",
                picLocation: "./static/img/img.jpg",
                //产品配置
                screentype: "22222", //屏幕类型
                monocularresolution: "222222", //单眼分辨率
                weight: 1, //重量
                cpu: 1,
                memory: 1,
                batteryCapacity: 1,
                //安全性
                workingtemperature: 1, //温升/发热
                bluerayirradiance: 1, //蓝光辐照度
                soundpressurelevel: 1, //声压
                maximumoutputvoltage: 1000, //播放器的最大输出电压
                broadbandcharacteristicvoltageofearphone: 5555, //耳机的宽带特征电压
                boundarywarning: "222222222", //边界警示
                // 电磁兼容性
                radiationdisturbance: "./static/img/img.jpg", //辐射骚扰
                electrostaticdischarge: "./static/img/img.jpg", //静电放电
                //性能
                fieldangle: 1, //视场角
                refreshrate: 1, //刷新率
                systemdelay: 1, //系统延迟
                trackingmode: 1, //跟踪模式
                trackingrange: 1, //跟踪范围
                //20min视疲劳
                meanchangeofvisualacuity: 1, //视力变化均值
                ssqmean: 1, //SSQ均值
                cvsmean: 1 //CVS均值
            };
            self.$axios({
                url: '/ivr/' + localStorage.getItem("salesModel"),
                // url:'./static/data.json',
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
                self.data = response.data.payload;
            }).catch(error => {
                console.log(error);
            });
        },
        //更新对比
        refreshCompare() {
            var self = this;
            self.compare_data = JSON.parse(localStorage.getItem('compare_data'));
        },
        //加入对比
        compare() {
            var self = this;
            var t = JSON.parse(localStorage.getItem('compare_data'));
            console.log("compare data: " + t);
            var item = {
                id: localStorage.getItem("salesModel"),
                type: "ivr",
                pic_location: localStorage.getItem("proPic")
            };
            var add = self.checkCompare(localStorage.getItem('salesModel'));
            if (add) {
                if (t.data.length == 0) {
                    t.data.push(item);
                    localStorage.setItem('compare_data', JSON.stringify(t));
                    localStorage.setItem('kind', 'ivr');
                    self.refreshCompare();
                } else {
                    if (t.data.length < 4) {
                        if (item.type == t.data[0].type) {
                            t.data.push(item);
                            localStorage.setItem('compare_data', JSON.stringify(t));
                            localStorage.setItem('kind', 'ivr');
                            self.refreshCompare();
                        } else {
                            self.$message('只有同类产品才能加入对比！');
                        }
                    } else {
                        self.$message('最多只能比较四个产品！');
                    }
                }
            }
        },
        //取消对比
        cancelCompare(index) {
            var t = JSON.parse(localStorage.getItem('compare_data'));
            t.data.splice(index, 1);
            localStorage.setItem('compare_data', JSON.stringify(t));
            this.refreshCompare();
        },
        //防止重复加入对比
        checkCompare: function (id) {
            var t = JSON.parse(localStorage.getItem('compare_data'));
            for (var i = 0; i < t.data.length; i++) {
                if (id == t.data[i].id) {
                    return false;
                }
            }
            return true;
        },
        //跳转至比较结果页面
        toCompareRes() {
            var self = this;
            var t = JSON.parse(localStorage.getItem('compare_data'));
            if (t.data.length != 0) self.$router.push('/user/product-compare');else self.$message("您还没有加入对比的产品");
        }

    },

    mounted() {
        var self = this;
        var arr = location.href.split('?');
        var id = arr[1];
        console.log(id);
        self.getData(id);
        self.refreshCompare();
    }
});

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.bread{font-size:16px}.form-box{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn{width:220px;margin-left:80px}.submit-btn button{width:100%}.product-box{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.box-param{width:100%;margin-top:5px}.param-title{height:40px;border-top:none;border-bottom:1px solid #e6e6e6;text-align:center}.param-title h3{padding:0 20px;font:normal 16px/40px Microsoft YaHei,arial}.param-tab table{table-layout:fixed;width:100%;border-collapse:collapse;border:1px solid #e6e6e6;border-bottom:0 none}.param-tab th{width:118px;padding:15px 0 0 20px;background:#fafafa;border-right:1px solid #e6e6e6;text-align:left;font:700 16px/26px Microsoft YaHei,arial;vertical-align:top}.param-tab td{width:605px;padding:8px 0 6px;vertical-align:top}.tab-content{padding:6px 20px 8px}ul{list-style:none}.category li{position:relative;padding:2px 0 2px 230px;line-height:26px;_zoom:1;word-wrap:break-word;font:14px/26px Microsoft YaHei,arial;color:#666}.para-name{position:absolute;top:2px;left:0;font-weight:700}.para-val{position:relative;color:#666;border-bottom:1px dashed #0a50a1}.img-container{max-width:50%}.img-container img{width:100%}.compare{display:block;width:175px;position:absolute;bottom:300px;z-index:9999;top:128px;left:900px}#compare_box{width:150px;border:1px solid #c0ccda;box-shadow:0 0 10px #c0ccda}#cancel-btn{float:right;width:10px;height:50px;margin-top:40px;margin-left:15px;cursor:pointer}.compare_item{float:left;width:90%;height:100px}.compare_item_img{width:70%;height:80%;margin-left:10px;margin-top:10px}.compare_btn{margin:20px 0 10px 30px}", ""]);

// exports


/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v("产品中心")]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": "/user/product-list"
    }
  }, [_vm._v("产品列表")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("一体机")]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": "/user/ivr-comment"
    }
  }, [_vm._v("产品简介")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("详细参数")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "compare"
  }, [_c('div', {
    attrs: {
      "id": "compare_box"
    }
  }, [_vm._l((_vm.compare_data.data), function(item, index) {
    return _c('div', {
      staticClass: "compare_item"
    }, [_c('div', [_c('img', {
      staticClass: "compare_item_img",
      attrs: {
        "src": item.pic_location
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "el-icon-circle-cross",
      attrs: {
        "id": "cancel_btn"
      },
      on: {
        "click": function($event) {
          _vm.cancelCompare(index)
        }
      }
    })]), _c('br')])
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-button', {
    staticClass: "compare_btn",
    attrs: {
      "plain": true,
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.toCompareRes()
      }
    }
  }, [_vm._v("查看对比")])], 2)]), _vm._v(" "), _c('div', {
    staticClass: "product-box"
  }, [_c('el-button', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "plain": true,
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.compare()
      }
    }
  }, [_vm._v("加入对比")]), _vm._v(" "), _c('div', {
    staticClass: "box-param"
  }, [_c('div', {
    staticClass: "param-title"
  }, [_c('h3', [_vm._v(_vm._s(_vm.data.salesmodel))])]), _vm._v(" "), _c('div', {
    staticClass: "param-tab"
  }, [_c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("产品外观")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('div', {
    staticClass: "img-container"
  }, [_c('img', {
    attrs: {
      "src": _vm.data.picLocation
    }
  })])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("品牌")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.brand))])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("销售型号")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.salesmodel))])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("产品型号")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.productmodel))])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("产品配置")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("屏幕类型")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.screentype))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("单眼分辨率")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.monocularresolution))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("重量(kg)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.weight))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("CPU(GHz)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.cpu))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("内存(GB)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.memory))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("电池容量（mAh)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.batteryCapacity))])])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("安全性")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("工作温度(℃)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.workingtemperature))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("蓝光辐照度(W·m^－2·sr^－1)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.bluerayirradiance))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("声压(dB(A))")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.soundpressurelevel))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("播放器的最大输出电压(mV)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.maximumoutputvoltage))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("耳机的宽带特征电压(mV)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.broadbandcharacteristicvoltageofearphone))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("边界警示")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.boundarywarning))])])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("电磁兼容性")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("辐射骚扰")]), _vm._v(" "), _c('div', {
    staticClass: "img-container"
  }, [_c('img', {
    attrs: {
      "src": _vm.data.radiationdisturbance
    }
  })])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("静电放电")]), _vm._v(" "), _c('div', {
    staticClass: "img-container"
  }, [_c('img', {
    attrs: {
      "src": _vm.data.electrostaticdischarge
    }
  })])])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("性能")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("视场角(°)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.fieldangle))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("刷新率(Hz)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.refreshrate))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("系统延迟(ms)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.systemdelay))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("跟踪模式(m)")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.trackingmode))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("跟踪范围")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.trackingrange))])])])])])])])]), _vm._v(" "), _c('table', [_c('tbody', [_c('tr', [_c('th', [_vm._v("视疲劳(20min)")]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "tab-content"
  }, [_c('ul', {
    staticClass: "category"
  }, [_c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("视力变化均值")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.meanchangeofvisualacuity))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("SSQ均值")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.ssqmean))])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "para-name"
  }, [_vm._v("CVS均值")]), _vm._v(" "), _c('span', {
    staticClass: "para-val"
  }, [_vm._v(_vm._s(_vm.data.cvsmean))])])])])])])])])])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(557);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("405ae80c", content, true);

/***/ })

});