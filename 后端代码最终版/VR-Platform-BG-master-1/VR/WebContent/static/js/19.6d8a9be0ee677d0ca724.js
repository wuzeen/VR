webpackJsonp([19],{

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(599)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(521),
  /* template */
  __webpack_require__(570),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 521:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            hostURL: "/VR",
            uid: "1",

            data: {
                statistic: [{
                    question: "1.你是谁？",
                    onePercentage: "66.67",
                    twoPercentage: "33.33"
                }, {
                    question: "2.我是谁？",
                    onePercentage: "50.00",
                    twoPercentage: "50.00"
                }]
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
        getData() {
            var self = this;
            self.data = {
                statistic: [{
                    question: "1.你是谁？",
                    onePercentage: "66.67",
                    twoPercentage: "33.33"
                }, {
                    question: "2.我是谁？",
                    onePercentage: "50.00",
                    twoPercentage: "50.00"
                }]
            };
            self.$axios({
                url: 'Answer/statistic',
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
                self.data.statistic = response.data;
            }).catch(error => {
                console.log(error);
            });
        }

    },
    mounted() {
        var self = this;
        // var arr = location.href.split('?');
        // var id = arr[1];
        // console.log(id);
        self.getData();
    }
});

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.bread{font-size:16px}#questions{margin-left:30px}.questionaire p{font-size:18px;margin-top:30px}.questionaire hr{width:72.7%}.submit_btn{margin-left:180px;margin-top:30px}.questionbox{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1);margin-top:20px}.answer{width:100%;padding-left:15px}.radio{width:100%;display:flex}.text{width:20px}.percent{flex:1}", ""]);

// exports


/***/ }),

/***/ 570:
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
      "to": "/user/questionaire"
    }
  }, [_vm._v("问卷填写")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("问卷结果")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "questionaire"
  }, [_c('p', [_vm._v("问卷结果统计")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "questionbox"
  }, [_c('form', {
    attrs: {
      "id": "questions"
    }
  }, _vm._l((_vm.data.statistic), function(a) {
    return _c('div', {
      staticClass: "single_question"
    }, [_c('p', {
      staticStyle: {
        "margin-bottom": "10px"
      }
    }, [_vm._v(_vm._s(a.question))]), _vm._v(" "), _c('div', {
      staticClass: "answer"
    }, [_c('div', {
      staticClass: "radio"
    }, [_c('div', {
      staticClass: "text"
    }, [_vm._v("是")]), _vm._v(" "), _c('div', {
      staticClass: "percent"
    }, [_c('el-progress', {
      attrs: {
        "text-inside": true,
        "stroke-width": 18,
        "percentage": a.onePercentage
      }
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "radio"
    }, [_c('div', {
      staticClass: "text"
    }, [_vm._v("否")]), _vm._v(" "), _c('div', {
      staticClass: "percent"
    }, [_c('el-progress', {
      attrs: {
        "text-inside": true,
        "stroke-width": 18,
        "percentage": a.twoPercentage,
        "status": "exception"
      }
    })], 1)])])])
  }))])])])
},staticRenderFns: []}

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("3d81df40", content, true);

/***/ })

});