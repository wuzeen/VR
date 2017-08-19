webpackJsonp([21],{

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(620)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(518),
  /* template */
  __webpack_require__(592),
  /* scopeId */
  "data-v-9d9a813a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 518:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            hostURL: '/VR',
            activePane: 'first',
            newsList: [{
                id: 1,
                title: 'fuuuuuuu',
                news_abstract: '11111111111111111111111111111111111111',
                pic_location: './static/img/img.jpg'
            }, {
                id: 2,
                title: 'fxxxxxxuu',
                news_abstract: '22222222222222222222222222222222222222222',
                pic_location: './static/img/img.jpg'
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
        handleClick() {
            // operate the tab
        },
        getNews(str) {
            var self = this;
            self.newsList = [];
            self.$axios({
                url: '/news_list/' + str,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.newsList = [];
                self.newsList = response.data;
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
            self.getNews(self.pageNum);
        },
        newsClick(news) {
            var self = this;
            console.log("11111111");
            console.log(news);
            self.$router.push('/user/news?' + news.id);
        }

    },
    mounted() {
        var self = this;
        self.getNews(self.pageNum);
    }
});

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-9d9a813a]{text-decoration:none}.form-box[data-v-9d9a813a]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-9d9a813a]{width:220px;margin-left:80px}.submit-btn button[data-v-9d9a813a]{width:100%}ul[data-v-9d9a813a]{list-style:none;display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px}li[data-v-9d9a813a]{list-style-type:none;padding-bottom:10px;border-bottom:1px solid #ccc}a[data-v-9d9a813a],a[data-v-9d9a813a]:hover,a[data-v-9d9a813a]:visited{text-decoration:none}.news-item[data-v-9d9a813a]{height:124px;margin-bottom:24px;overflow:hidden}.news-list .news-item .link-tit[data-v-9d9a813a]{color:#e9c06c}.news-list .news-item img[data-v-9d9a813a]{display:block;float:left;margin-right:20px;width:200px}.news-list .news-item .news-title[data-v-9d9a813a]{display:block;font-size:22px;font-weight:lighter;color:#3e3e3e;line-height:50px;height:50px;overflow:hidden}.news-list .news-desc[data-v-9d9a813a]{display:block;height:60px;overflow:hidden;font-size:14px;color:#898989;line-height:1.5}.pagination[data-v-9d9a813a]{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 592:
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
  }), _vm._v("VR资讯")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("新闻资讯")])], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "list-wrap"
  }, [_c('el-tabs', {
    on: {
      "tab-click": _vm.handleClick
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
      "label": "VR新闻",
      "name": "first"
    }
  }, [_c('ul', {
    staticClass: "news-list"
  }, _vm._l((_vm.newsList), function(news) {
    return _c('li', {
      staticClass: "news-item",
      on: {
        "click": function($event) {
          _vm.newsClick(news)
        }
      }
    }, [_c('a', {
      staticClass: "link-tit",
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      }
    }, [_c('img', {
      attrs: {
        "src": news.pic_location
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "news-title"
    }, [_vm._v(_vm._s(news.title))]), _vm._v(" "), _c('span', {
      staticClass: "news-desc"
    }, [_vm._v(_vm._s(news.news_abstract))])])])
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
  })], 1)]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "拓展1",
      "name": "second"
    }
  }, [_vm._v("222222222")]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "拓展2",
      "name": "third"
    }
  }, [_vm._v("3333333")])], 1)], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(558);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("203fb307", content, true);

/***/ })

});