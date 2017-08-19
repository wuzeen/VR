webpackJsonp([10],{

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(614)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(532),
  /* template */
  __webpack_require__(585),
  /* scopeId */
  "data-v-6ae228a5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 532:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            search: '',
            hostURL: '/VR',
            activePane: 'first',
            encyclopediaList: [{
                id: 1,
                keyword: 'fuuuuuuu',
                type: "",
                changenote: '11111111111111111111111111111111111111',
                firstprop: '2222222222222222'
            }, {
                id: 2,
                keyword: 'ffffffff',
                type: "",
                changenote: '1111111111111111111111111111111111',
                firstprop: '222222222222'
            }],
            pageNum: 1,
            pageTotal: 20,
            pageSize: 1
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
        getEncyclopedia() {
            var self = this;
            self.encyclopediaList = [];
            var searchData = {
                keyword: "",
                pageNum: 1
            };
            searchData.keyword = self.search;
            searchData.pageNum = self.pageNum;
            self.$axios({
                url: '/encyclopediaSearch',
                method: 'post',
                baseURL: self.hostURL,
                data: searchData
            }).then(response => {
                self.encyclopediaList = [];
                self.encyclopediaList = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        handleCurrentChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.pageNum);
            self.getEncyclopedia();
        },
        encyclopediaClick(item) {
            var self = this;
            console.log(item.id);
            self.$router.push('/user/encyclopedia-prop?' + item.id);
        }

    },

    mounted() {
        var self = this;
        self.encyclopediaList = [];
    }
});

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-6ae228a5]{text-decoration:none}.box[data-v-6ae228a5]{height:45px;width:800px;margin:0 auto;margin-top:10px;position:relative}.box input[data-v-6ae228a5]{border:1px solid #e4e4e4;box-sizing:border-box;width:800px;height:45px;font-size:18px;float:left;padding-left:10px;padding-right:10px;overflow:hidden}.link-tit[data-v-6ae228a5]{color:#e9c06c}.submit-btn[data-v-6ae228a5]{width:220px;margin-left:80px}.submit-btn button[data-v-6ae228a5]{width:100%}#show-pedias[data-v-6ae228a5]{max-width:800px;margin:0 auto}.single-item[data-v-6ae228a5]{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}.pagination[data-v-6ae228a5]{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 585:
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
  }), _vm._v(" VR百科")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("百科搜索")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    attrs: {
      "type": "text",
      "placeholder": "search pedias"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.getEncyclopedia()
      }
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "show-pedias"
    }
  }, _vm._l((_vm.encyclopediaList), function(item) {
    return _c('div', {
      staticClass: "single-item",
      on: {
        "click": function($event) {
          _vm.encyclopediaClick(item)
        }
      }
    }, [_c('a', {
      staticClass: "link-tit",
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      }
    }, [_c('h1', [_vm._v(_vm._s(item.keyword))]), _vm._v(" "), _c('article', [_vm._v(_vm._s(item.firstprop))])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageNum,
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        _vm.pageNum = $event
      }
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(552);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("1dc0007d", content, true);

/***/ })

});