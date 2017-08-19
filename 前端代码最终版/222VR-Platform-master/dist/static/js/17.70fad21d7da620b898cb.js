webpackJsonp([17],{

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(618)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(524),
  /* template */
  __webpack_require__(589),
  /* scopeId */
  "data-v-737264e5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 524:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        var checkNick = (rule, value, callback) => {
            var vm = this.$data;
            var reg = /[^\w\u4E00-\u9fa5]/;
            if (!value) {
                vm.allowSubmit = true;
                return callback(new Error('昵称不能为空'));
            } else if (value.gblen() < 4 || value.gblen() > 16) {
                vm.allowSubmit = true;
                return callback(new Error('长度为4 - 16个字节'));
            } else if (value.match(reg)) {
                vm.allowSubmit = true;
                return callback(new Error('昵称只能有汉字、英文、数字组成'));
            } else {
                vm.allowSubmit = false;
            }
        };
        return {
            allowSubmit: true,
            hostUrl: "/VR",
            ruleForm: {
                nickName: ''
            },
            rules: {
                // name:[
                //     { required:true, message: '昵称不能为空',trigger:'blur'},
                //     {min:4, max:5,message:'长度为4 - 15个字符',trigger:'blur'}

                // ]
                nickName: [{ validator: checkNick, trigger: 'change' }]
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
        submitForm: function () {
            var vm = this;
            console.log(vm.ruleForm);

            this.$confirm('确定要修改昵称？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios({
                    url: '/user/changeNickName',
                    method: 'post',
                    baseURL: vm.hostUrl,
                    data: vm.ruleForm
                }).then(response => {
                    if (response.data.code == "200") {
                        this.$message({
                            type: 'success',
                            message: '修改成功'
                        });
                        localStorage.setItem('ms_username', vm.ruleForm.nickName);
                    } else {
                        console.log(response.data.code);
                        vm.codeParsing(response.data.code);
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }).catch(error => {
                    console.log("Error:", error);
                    this.$message({
                        type: 'warning',
                        message: '网络无连接'
                    });
                    localStorage.setItem('ms_username', vm.ruleForm.nickName);
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        }
    }
});

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-737264e5]{text-decoration:none}.form-box[data-v-737264e5]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-737264e5]{width:220px;margin-left:80px}.submit-btn button[data-v-737264e5]{width:100%}", ""]);

// exports


/***/ }),

/***/ 589:
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
  }), _vm._v(" 个人信息管理")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("修改昵称")])], 1)], 1), _vm._v(" "), _c('div', {
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
      "label": "新昵称",
      "prop": "nickName"
    }
  }, [_c('el-input', {
    ref: "abc",
    on: {
      "keyup": function($event) {}
    },
    model: {
      value: (_vm.ruleForm.nickName),
      callback: function($$v) {
        _vm.ruleForm.nickName = $$v
      },
      expression: "ruleForm.nickName"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "submit-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "disabled": _vm.allowSubmit
    },
    on: {
      "click": function($event) {
        _vm.submitForm('ruleForm')
      }
    }
  }, [_vm._v("确认")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(556);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("1eed0b90", content, true);

/***/ })

});