webpackJsonp([18],{

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(623)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(522),
  /* template */
  __webpack_require__(595),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 522:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            uid: "1",

            ques_data: {
                questions: [{
                    id: 1,
                    question: "1.你是谁？",
                    questiontype: "single"
                }, {
                    id: 3,
                    question: "3.你对某个产品有什么建议？",
                    questiontype: "essay"
                }]
            },
            answ_data: {
                answers: [{
                    question: 1,
                    user: self.uid,
                    answer: "1",
                    producttype: "",
                    productname: ""
                }, {
                    question: 3,
                    user: self.uid,
                    answer: "",
                    producttype: "",
                    productname: ""
                }]
            },

            pro_type: {
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
            pro_sales: {
                opts: [{
                    value: '',
                    label: ''
                }],
                value: ''
            },
            pro_sales_disable: true
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
            self.ques_data = {
                questions: [{
                    id: 1,
                    question: "1.你是谁？",
                    questiontype: "single"
                }, {
                    id: 2,
                    question: "2.我是谁？",
                    questiontype: "single"
                }, {
                    id: 3,
                    question: "3.你对某个产品有什么建议？",
                    questiontype: "essay"
                }]
            };
            self.answ_data = {
                answers: [{
                    question: "1.你是谁？",
                    user: self.uid,
                    answer: "1",
                    producttype: "",
                    productname: ""
                }, {
                    question: "2.我是谁？",
                    user: self.uid,
                    answer: "2",
                    producttype: "",
                    productname: ""
                }, {
                    question: "3.你对某个产品有什么建议？",
                    user: self.uid,
                    answer: "",
                    producttype: "",
                    productname: ""
                }]
            };
            self.$axios({
                url: '/Question',
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                console.log(response.data);
                self.ques_data.questions = response.data;
                self.answ_data.answers = [];
                for (var i = 0; i < self.ques_data.questions.length; i++) {
                    self.answ_data.answers.push({
                        question: self.ques_data.questions[i].question,
                        user: localStorage.getItem('ms_userid'),
                        answer: "",
                        producttype: "",
                        productname: ""
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        sendQuestionaire() {
            var self = this;
            var send = true;
            for (var i = 0; i < self.answ_data.answers.length; i++) {
                if (self.answ_data.answers[i].answer == "") {
                    send = false;
                    break;
                }
            }
            if (send && self.pro_sales.value != "" && self.pro_type.value != "") {
                for (var i = 0; i < self.answ_data.answers.length; i++) {
                    self.answ_data.answers[i].producttype = self.pro_type.value;
                    self.answ_data.answers[i].productname = self.pro_sales.value;
                }

                self.$axios({
                    url: '/Answer',
                    method: 'post',
                    baseURL: self.hostURL,
                    data: self.answ_data.answers
                }).catch(error => {
                    console.log(error);
                });
                //发送数据后跳转
                self.$router.push('/user/questionaire/statistic');
            } else {
                self.$message('还有内容未填写！');
            }
        },
        sendProType() {
            var self = this;
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
            self.pro_sales = {
                opts: [{
                    value: '',
                    label: ''
                }],
                value: ''
            };
            console.log("type");
            self.$axios({
                url: '/Question/type?type=' + self.pro_type.value,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    self.pro_sales.opts.push({ value: response.data[i], label: response.data[i] });
                }
                self.pro_sales_disable = false;
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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.bread{font-size:16px}#questions{margin-left:30px}.questionaire p{font-size:18px;margin-top:30px}.questionaire hr{width:72.7%}.left_radio{margin-right:200px;margin-left:30px}.essay-answer{width:400px}.submit_btn{margin-left:180px;margin-top:30px}.selector{width:700px;margin-top:20px;display:flex}.protype_selector{margin-left:50px;float:left}.prosales_selector{margin-left:40px;flex:1}.questionbox{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1);margin-top:20px}", ""]);

// exports


/***/ }),

/***/ 595:
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
  }), _vm._v("产品中心")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("问卷填写")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "questionaire"
  }, [_c('p', [_vm._v("问卷")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "selector"
  }, [_c('div', {
    staticClass: "protype_selector"
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择产品类型"
    },
    on: {
      "change": function($event) {
        _vm.sendProType()
      }
    },
    model: {
      value: (_vm.pro_type.value),
      callback: function($$v) {
        _vm.pro_type.value = $$v
      },
      expression: "pro_type.value"
    }
  }, _vm._l((_vm.pro_type.opts), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "prosales_selector"
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择产品型号",
      "disabled": _vm.pro_sales_disable
    },
    model: {
      value: (_vm.pro_sales.value),
      callback: function($$v) {
        _vm.pro_sales.value = $$v
      },
      expression: "pro_sales.value"
    }
  }, _vm._l((_vm.pro_sales.opts), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "questionbox"
  }, [_c('form', {
    attrs: {
      "id": "questions"
    }
  }, _vm._l((_vm.answ_data.answers), function(a, index) {
    return _c('div', {
      staticClass: "single_question"
    }, [_c('p', {
      staticStyle: {
        "margin-bottom": "10px"
      }
    }, [_vm._v(_vm._s(a.question))]), _vm._v(" "), (_vm.ques_data.questions[index].questiontype == 'single') ? _c('div', {
      staticClass: "answer"
    }, [_c('label', {
      staticClass: "left_radio"
    }, [_c('el-radio', {
      staticClass: "radio",
      attrs: {
        "label": "1"
      },
      model: {
        value: (a.answer),
        callback: function($$v) {
          a.answer = $$v
        },
        expression: "a.answer"
      }
    }, [_vm._v("是")])], 1), _vm._v(" "), _c('el-radio', {
      staticClass: "radio",
      attrs: {
        "label": "2"
      },
      model: {
        value: (a.answer),
        callback: function($$v) {
          a.answer = $$v
        },
        expression: "a.answer"
      }
    }, [_vm._v("否 ")])], 1) : (_vm.ques_data.questions[index].questiontype == 'essay') ? _c('div', {
      staticClass: "essay-answer"
    }, [_c('el-input', {
      attrs: {
        "type": "textarea",
        "row": 3,
        "placeholder": "请输入内容",
        "resize": "none"
      },
      model: {
        value: (a.answer),
        callback: function($$v) {
          a.answer = $$v
        },
        expression: "a.answer"
      }
    })], 1) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    staticClass: "submit_btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.sendQuestionaire()
      }
    }
  }, [_vm._v("提交问卷")])], 1)])])])
},staticRenderFns: []}

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(561);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("2d798323", content, true);

/***/ })

});