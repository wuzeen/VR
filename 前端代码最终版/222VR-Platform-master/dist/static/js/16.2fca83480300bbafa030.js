webpackJsonp([16],{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(615)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(525),
  /* template */
  __webpack_require__(586),
  /* scopeId */
  "data-v-6f07e71d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 525:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        //这里存在重用性问题 框架提供的自定义规则无法修改？
        var checkOldPassword = (rule, value, callback) => {
            var vm = this.$data;
            var reg = /^[a-zA-Z0-9]+$/;
            if (!value) {
                vm.check1 = true;
                return callback(new Error('密码不能为空'));
            } else if (value.gblen() < 6 || value.gblen() > 16) {
                vm.check1 = true;
                return callback(new Error('密码长度为6 - 16个字符'));
            } else if (!value.match(reg)) {
                vm.check2 = true;
                return callback(new Error('密码仅可由数字与字母组成'));
            } else {
                vm.check1 = false;
            }
        };
        var checkNewPassword = (rule, value, callback) => {
            var vm = this.$data;
            var reg = /^[a-zA-Z0-9]+$/;
            if (!value) {
                vm.check2 = true;
                return callback(new Error('密码不能为空'));
            } else if (value.gblen() < 6 || value.gblen() > 16) {
                vm.check2 = true;
                return callback(new Error('密码长度为6 - 16个字符'));
            } else if (!value.match(reg)) {
                vm.check2 = true;
                return callback(new Error('密码仅可由数字与字母组成'));
            } else {
                vm.check2 = false;
            }
        };
        var checkPassword = (rule, value, callback) => {
            var vm = this.$data;
            var reg = /^[a-zA-Z0-9]+$/;
            if (!value) {
                vm.check3 = true;
                return callback(new Error('密码不能为空'));
            } else if (value.gblen() < 6 || value.gblen() > 16) {
                vm.check3 = true;
                return callback(new Error('密码长度为6 - 16个字符'));
            } else if (!value.match(reg)) {
                vm.check3 = true;
                return callback(new Error('密码仅可由数字与字母组成'));
            } else {
                vm.check3 = false;
            }
        };
        return {
            hostUrl: "/VR",
            check1: true,
            check2: true,
            check3: true,
            ruleForm: {
                oldPassword: '',
                newPassword: '',
                checkNewPassword: ''
            },
            rules: {
                // name:[
                //     { required:true, message: '昵称不能为空',trigger:'blur'},
                //     {min:4, max:5,message:'长度为4 - 15个字符',trigger:'blur'}

                // ]
                oldPassword: [{ validator: checkOldPassword, trigger: 'change' }, { validator: checkOldPassword, trigger: 'blur' }],
                newPassword: [{ validator: checkNewPassword, trigger: 'change' }, { validator: checkNewPassword, trigger: 'blur' }],
                checkNewPassword: [{ validator: checkPassword, trigger: 'change' }, { validator: checkPassword, trigger: 'blur' }]
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
        handleClick: function () {},
        checkAllow: function () {
            var vm = this;
            return vm.check1 || vm.check2 || vm.check3;
        },
        submitForm: function () {
            var vm = this;
            console.log(vm.ruleForm);
            if (vm.ruleForm.oldPassword == vm.ruleForm.newPassword) {
                this.$message({
                    type: 'info',
                    message: '新旧密码不能一样'
                });
            } else if (vm.ruleForm.newPassword != vm.ruleForm.checkNewPassword) {
                this.$message({
                    type: 'info',
                    message: '确认密码不一致'
                });
            } else {
                this.$confirm('确定要修改密码？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var postData = {
                        oldPassword: "",
                        newPassword: ""
                    };
                    postData.oldPassword = vm.ruleForm.oldPassword;
                    postData.newPassword = vm.ruleForm.newPassword;
                    this.$axios({
                        url: '/user/changePassword',
                        method: 'post',
                        baseURL: vm.hostUrl,
                        data: postData
                    }).then(response => {
                        if (response.data.code == "200") {
                            this.$message({
                                type: 'success',
                                message: '修改成功'
                            });
                        } else {
                            console.log(response.data.code);
                            vm.codeParsing(response.data.code);
                        }
                    }).catch(error => {
                        console.log("Error:", error);
                        this.$message({
                            type: 'warning',
                            message: 'AJAX FAIL'
                        });
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        }
    }
});

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-6f07e71d]{text-decoration:none}.form-box[data-v-6f07e71d]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 20px}.submit-btn[data-v-6f07e71d]{width:220px;margin-left:80px}.submit-btn button[data-v-6f07e71d]{width:100%}", ""]);

// exports


/***/ }),

/***/ 586:
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
  }), _vm._v(" 个人信息管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("修改密码")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-box"
  }, [_c('el-form', {
    ref: "ruleForm",
    attrs: {
      "label-position": "right",
      "label-width": "80px",
      "model": _vm.ruleForm,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "旧密码",
      "prop": "oldPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "icon": "search",
      "type": "password",
      "on-icon-click": _vm.handleClick()
    },
    on: {
      "keyup": function($event) {}
    },
    model: {
      value: (_vm.ruleForm.oldPassword),
      callback: function($$v) {
        _vm.ruleForm.oldPassword = $$v
      },
      expression: "ruleForm.oldPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新密码",
      "prop": "newPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "icon": "search",
      "type": "password"
    },
    on: {
      "keyup": function($event) {}
    },
    model: {
      value: (_vm.ruleForm.newPassword),
      callback: function($$v) {
        _vm.ruleForm.newPassword = $$v
      },
      expression: "ruleForm.newPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "确认密码",
      "prop": "checkNewPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "icon": "search",
      "type": "password"
    },
    on: {
      "keyup": function($event) {}
    },
    model: {
      value: (_vm.ruleForm.checkNewPassword),
      callback: function($$v) {
        _vm.ruleForm.checkNewPassword = $$v
      },
      expression: "ruleForm.checkNewPassword"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "submit-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.check1 || _vm.check2 || _vm.check3
    },
    on: {
      "click": function($event) {
        _vm.submitForm('ruleForm')
      }
    }
  }, [_vm._v("确认")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(553);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("2ae014af", content, true);

/***/ })

});