webpackJsonp([9],{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(602)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(533),
  /* template */
  __webpack_require__(573),
  /* scopeId */
  "data-v-1d0ad546",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 533:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            pageNum: 1,
            pageTotal: 20,
            pageSize: 1,
            hostURL: '/VR',
            items: [{
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
            type: '',
            typeList: ['a', 'b', 'c', 'd', 'e', 'f']
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
        getTypes() {
            var self = this;
            self.typeList = [];
            self.$axios({
                url: '/encyclopediaDir',
                method: 'post',
                baseURL: self.hostURL,
                data: "notype"
            }).then(response => {
                self.typeList = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        search(onetype, pageNum) {
            var self = this;
            self.items = [];
            var dirtype = {
                type: "",
                pageNum: 1
            };
            dirtype.type = onetype;
            dirtype.pageNum = pageNum;
            self.$axios({
                url: '/encyclopediaTypeDir',
                method: 'post',
                baseURL: self.hostURL,
                data: dirtype
            }).then(response => {
                self.items = response.data;
            }).catch(error => {
                self.$message({
                    type: 'info',
                    message: 'connect fail'
                });
            });
        },
        selected(onetype) {
            var self = this;
            self.type = onetype;
            self.search(onetype, 1);
        },
        handleCurrentChange() {
            var self = this;
            console.log("current-Page:");
            console.log(self.pageNum);
            var type = self.type;
            var pageNum = self.pageNum;
            self.search(type, pageNum);
        },
        encyclopediaClick(item) {
            var self = this;
            console.log(item.id);
            self.$router.push('/user/encyclopedia-prop?' + item.id);
        }
    },

    mounted() {
        var self = this;
        self.getTypes();
        self.selected("type1");
    }
});

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-1d0ad546]{text-decoration:none}#show-pedias[data-v-1d0ad546]{max-width:600px;margin:0 auto}#navigation[data-v-1d0ad546]{float:left;width:200px;font-family:Arial}#navigation ul[data-v-1d0ad546]{list-style-type:none;margin:0;padding:0}#navigation li[data-v-1d0ad546]{border-bottom:1px solid #ed9f9f;display:block;padding:5px 5px 5px .5em;text-decoration:none;border-left:12px solid #eee;border-right:1px solid #711515;background-color:#789;color:#fff}#navigation li[data-v-1d0ad546]:link,#navigation li a[data-v-1d0ad546]:visited{background-color:#c11136;color:#fff}#navigation li [data-v-1d0ad546]:hover{background-color:#990020;color:#ff0}.single-item[data-v-1d0ad546]{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}.pagination[data-v-1d0ad546]{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 573:
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
  }), _vm._v("VR百科 ")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("目录浏览")])], 1)], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "navigation"
    }
  }, [_c('div', {
    staticClass: "collection"
  }, [_c('ul', _vm._l((_vm.typeList), function(onetype) {
    return _c('a', {
      staticClass: "collection-item",
      class: {
        active: _vm.type == onetype
      },
      attrs: {
        "href": "#/user/pedia2"
      },
      on: {
        "click": function($event) {
          _vm.selected(onetype)
        }
      }
    }, [_c('li', [_vm._v(_vm._s(onetype))])])
  }))])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "show-pedias"
    }
  }, _vm._l((_vm.items), function(item) {
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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(540);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("0d31310a", content, true);

/***/ })

});