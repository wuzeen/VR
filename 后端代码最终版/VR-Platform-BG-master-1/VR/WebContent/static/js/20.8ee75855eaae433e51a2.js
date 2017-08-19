webpackJsonp([20],{

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(622)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(520),
  /* template */
  __webpack_require__(594),
  /* scopeId */
  "data-v-ae5f766a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 520:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            hostURL: '/VR',
            ivrURL: '/products/ivr',
            svrURL: '/products/svr',
            evrURL: '/products/evr',
            activePane: 'ivr',
            selected: 1, //1== yitiji  2==PCtou xian  3==shou ji he zi
            comparedNum: 0, //number of compared products
            ajaxData: {
                list: [{
                    id: 1,
                    salesmodel: 'name1',
                    productmodel: 'name1.1',
                    picLocation: '111dd'
                }]
            },
            ivrList: [{
                id: 1,
                salesmodel: 'name1',
                productmodel: 'name1.1',
                picLocation: '111dd'
            }], //ji cheng
            svrList: [], //wai ke 
            evrList: [], //wai jie
            ipageNum: 1,
            ipageTotal: 9,
            ipageSize: 1,
            epageNum: 1,
            epageTotal: 9,
            epageSize: 1,
            spageNum: 1,
            spageTotal: 9,
            spageSize: 1
        };
    },
    methods: {
        tabClick(val) {
            var self = this;
            self.comparedNum = 0;
            switch (val.index) {
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
        handleIvrChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.ipageNum);
            self.getivrList();
        },
        handleSvrChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.spageNum);
            self.getsvrList();
        },
        handleEvrChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.epageNum);
            self.getevrList();
        },
        ///////////////////////////
        getivrList() {
            var self = this;
            var _url = self.ivrURL + '/' + self.ipageNum; //跳转url
            self.$axios({
                url: _url,
                methods: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.ivrList = [];
                self.ajaxData = response.data.data;
                for (let i = 0; i < self.ajaxData.payload.length; i++) {
                    self.ivrList[i] = self.ajaxData.payload[i];
                }
                self.ipageTotal = self.ajaxData.code;
            }).catch(error => {
                this.$message({
                    type: 'info',
                    message: 'connection fail,press F12 to see the error in console'
                });
                console.log("ERROR:");
                console.log(error);
            });
        },
        getsvrList() {
            var self = this;
            var _url = self.svrURL + '/' + self.spageNum;
            self.$axios({
                url: _url,
                methods: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.svrList = [];
                self.ajaxData = response.data.data;
                for (let i = 0; i < self.ajaxData.payload.length; i++) {
                    self.svrList[i] = self.ajaxData.payload[i];
                }
                self.spageTotal = self.ajaxData.code;
            }).catch(error => {
                this.$message({
                    type: 'info',
                    message: 'connection fail,press F12 to see the error in console'
                });
                console.log("ERROR:");
                console.log(error);
            });
        },
        getevrList() {
            var self = this;
            var _url = self.evrURL + '/' + self.epageNum;
            self.$axios({
                url: _url,
                methods: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.evrList = [];
                self.ajaxData = response.data.data;
                for (let i = 0; i < self.ajaxData.payload.length; i++) {
                    self.evrList[i] = self.ajaxData.payload[i];
                }
                self.epageTotal = self.ajaxData.code;
            }).catch(error => {
                this.$message({
                    type: 'info',
                    message: 'connection fail,press F12 to see the error in console'
                });
                console.log("ERROR:");
                console.log(error);
            });
        },
        ivrClick(item) {
            var self = this;
            self.selected = 1;
            localStorage.setItem("salesModel", item.id);
            localStorage.setItem("proName", item.salesmodel);
            localStorage.setItem("proPic", item.picLocation);
            self.$router.push('/user/ivr-comment?' + item.id); //跳转至产品简介及评论页面
        },
        svrClick(item) {
            var self = this;
            self.selected = 2;
            localStorage.setItem("salesModel", item.id); //覆盖之前的
            localStorage.setItem("proName", item.salesmodel);
            localStorage.setItem("proPic", item.picLocation);
            self.$router.push('/user/svr-comment?' + item.id);
        },
        evrClick(item) {
            var self = this;
            self.selected = 3;
            localStorage.setItem("salesModel", item.id); //覆盖之前的
            localStorage.setItem("proName", item.salesmodel);
            localStorage.setItem("proPic", item.picLocation);
            self.$router.push('/user/evr-comment?' + item.id);
        }

    },
    mounted() {
        var self = this;
        self.getivrList();
        // localStorage.clear();
    }
});

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-ae5f766a]{text-decoration:none}.form-box[data-v-ae5f766a]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}ul[data-v-ae5f766a]{list-style:none;display:block}li[data-v-ae5f766a]{list-style-type:none;width:100%;border:1px solid #ccc}a[data-v-ae5f766a],a[data-v-ae5f766a]:hover,a[data-v-ae5f766a]:visited{text-decoration:none}.product-list[data-v-ae5f766a]{width:1000px}.product-item[data-v-ae5f766a]{cursor:pointer;float:left;width:240px;height:260px;padding:30px 20px 20px;text-align:center}.product-img[data-v-ae5f766a]{width:200px;height:200px;margin:0 auto}.product-img img[data-v-ae5f766a]{width:100%}.product-item h3[data-v-ae5f766a]{margin-top:12px;margin-bottom:12px;font-size:20px;font-weight:lighter}.pagination[data-v-ae5f766a]{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 594:
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
  }), _vm._v("产品中心")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("产品列表")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "list-wrap"
  }, [_c('el-tabs', {
    on: {
      "tab-click": _vm.tabClick
    },
    model: {
      value: (_vm.activePane),
      callback: function($$v) {
        _vm.activePane = $$v
      },
      expression: "activePane"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "一体机",
      "name": "ivr"
    }
  }, [_c('el-row', [_c('ul', {
    staticClass: "product-list clearfix"
  }, _vm._l((_vm.ivrList), function(item) {
    return _c('li', {
      staticClass: "product-item",
      attrs: {
        "type": "primary"
      },
      on: {
        "click": function($event) {
          _vm.ivrClick(item)
        }
      }
    }, [_c('div', {
      staticClass: "product-img"
    }, [_c('img', {
      attrs: {
        "src": item.picLocation
      }
    })]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.salesmodel))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.productmodel))])])
  }))]), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.ipageNum,
      "page-size": 9,
      "layout": "total, prev, pager, next",
      "total": _vm.ipageTotal
    },
    on: {
      "current-change": _vm.handleIvrChange,
      "update:currentPage": function($event) {
        _vm.ipageNum = $event
      }
    }
  })], 1)])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "PC头显",
      "name": "svr"
    }
  }, [_c('el-row', [_c('ul', {
    staticClass: "product-list clearfix"
  }, _vm._l((_vm.svrList), function(item) {
    return _c('li', {
      staticClass: "product-item",
      attrs: {
        "type": "primary"
      },
      on: {
        "click": function($event) {
          _vm.svrClick(item)
        }
      }
    }, [_c('div', {
      staticClass: "product-img"
    }, [_c('img', {
      attrs: {
        "src": item.picLocation
      }
    })]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.salesmodel))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.productmodel))])])
  }))]), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.spageNum,
      "page-size": 9,
      "layout": "total, prev, pager, next",
      "total": _vm.spageTotal
    },
    on: {
      "current-change": _vm.handleSvrChange,
      "update:currentPage": function($event) {
        _vm.spageNum = $event
      }
    }
  })], 1)])], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "手机盒子",
      "name": "evr"
    }
  }, [_c('el-row', [_c('ul', {
    staticClass: "product-list clearfix"
  }, _vm._l((_vm.evrList), function(item) {
    return _c('li', {
      staticClass: "product-item",
      attrs: {
        "type": "primary"
      },
      on: {
        "click": function($event) {
          _vm.evrClick(item)
        }
      }
    }, [_c('div', {
      staticClass: "product-img"
    }, [_c('img', {
      attrs: {
        "src": item.picLocation
      }
    })]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.salesmodel))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(item.productmodel))])])
  }))]), _vm._v(" "), _c('el-row', [_c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.epageNum,
      "page-size": 9,
      "layout": "total, prev, pager, next",
      "total": _vm.epageTotal
    },
    on: {
      "current-change": _vm.handleEvrChange,
      "update:currentPage": function($event) {
        _vm.epageNum = $event
      }
    }
  })], 1)])], 1)], 1)], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(560);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("d1aca5ec", content, true);

/***/ })

});