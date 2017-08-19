webpackJsonp([22],{

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(604)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(575),
  /* scopeId */
  "data-v-25da8fb6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 517:
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
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            newsData: {
                id: 3,
                tag: null,
                title: "痛失手机江山的联想，想要在VR热潮中分一杯羹",
                path: "D:\\VR新闻爬虫\\test2",
                last_edit_time: "发布时间：2017-06-11 12:13:35",
                source: "来源：POPPUR",
                upvote: null,
                downvote: null,
                editor_id: null,
                author: "作者：",
                news_abstract: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只",
                content: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只可惜初出茅庐的联想并没有什么经验，无奈在苹果和小米的拉锯战中成为了炮灰。虽然联想在2014年收购了手机界骨灰级元老摩托罗拉，但这条路始终还是没有想象中的那么好走。先是苹果傲视群雄，后来OPPO、vivo崛起，势单力薄的联想手机想要站稳脚跟还是有点难的。根据此前的消息，联想手机业务分支品牌ZUK已经暂停运营了。痛失手机江山之后，联想将落脚点放在了潜力巨大的虚拟现实领域。去年10月，联想与微软进行了合作，未来两者将会在混合现实领域(包括增强现实和虚拟现实)共同谋求发展，开辟新天地。随后联想也很快推出了一款主打入门的混合现实头显，斩获了不少用户的好评。而在最近的CES亚洲展上，联想还推出了首款背包VR PC——Avalon  VR。这款PC外观设计精致，虽然采用了金属机身的设计，但整机的重量也仅有2.5kg(包括电池)。配置方面，Avalon  VR最高支持英特尔酷睿i7处理器，32GB DDR4内存以及512GB PCI-E固态硬盘，同时内置AMD Radeon  RX480/580独立显卡，足以轻松应对市面上所有VR游戏。此外，该电脑还采用了双电池设计，并且支持热插拔，官方称其普通模式下的续航时间可达10小时，即使是在高性能下进行VR体验也能坚持1.5小时。而为了帮助主机散热，该机还配备了水冷散热系统，出风口也设置在了背对背部的位置，避免热风吹向人体。根据联想的介绍，之后张艺谋VR体验店会全线采用Avalon  VR背包电脑，可见联想在VR界的地位还是值得被肯定的。而随着与微软的合作更加深入之后，未来联想还会在增强现实乃至混合现实界混出一片天地。不知道未来的PC市场究竟会变成怎样呢?真是越来越期待了呀。Via：POPPUR",
                pic_location: "http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg",
                is_push: null
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
        getNewsData(id) {
            var self = this;
            self.newsData = {};
            self.$axios({
                url: '/news/' + id,
                method: 'get',
                baseURL: self.hostURL
            }).then(response => {
                self.newsData = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    },

    mounted() {
        var self = this;
        console.log("2222");
        var arr = location.href.split('?');
        var news_id = arr[1];
        console.log(news_id);
        self.getNewsData(news_id);
    }
});

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-25da8fb6]{text-decoration:none}.bread[data-v-25da8fb6]{font-size:16px}.form-box[data-v-25da8fb6]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-25da8fb6]{width:220px;margin-left:80px}.submit-btn button[data-v-25da8fb6]{width:100%}.news-box[data-v-25da8fb6]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-25da8fb6]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-25da8fb6]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-25da8fb6]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-25da8fb6]{color:#666}.article p[data-v-25da8fb6]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-25da8fb6]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-25da8fb6]{text-align:center}.news-comment[data-v-25da8fb6]{margin-top:20px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 575:
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
  }), _vm._v(" "), _c('span', {
    staticClass: "bread"
  }, [_vm._v("VR资讯")])]), _vm._v(" "), _c('el-breadcrumb-item', [_c('span', {
    staticClass: "bread"
  }, [_vm._v("新闻资讯")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "news-box"
  }, [_c('h2', {
    staticClass: "news-title"
  }, [_vm._v(_vm._s(_vm.newsData.title))]), _vm._v(" "), _c('div', {
    staticClass: "borderline clearfix"
  }, [_c('p', {
    staticClass: "artinfo"
  }, [_c('span', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.newsData.source))]), _vm._v(" " + _vm._s(_vm.newsData.last_edit_time))])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('p', [_vm._v("\n            " + _vm._s(_vm.newsData.content) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "news-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.newsData.pic_location
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "news-comment"
  }, [_c('el-button-group', [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "circle-check"
    }
  }, [_vm._v("赞")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("踩"), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1), _vm._v(" "), _c('el-tabs', {
    attrs: {
      "type": "card"
    },
    model: {
      value: (_vm.activeName2),
      callback: function($$v) {
        _vm.activeName2 = $$v
      },
      expression: "activeName2"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "最热评论",
      "name": "first"
    }
  }, [_vm._v("最热评论")]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "最新评论",
      "name": "second"
    }
  }, [_vm._v("最新评论")])], 1)], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(542);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("c062f6a6", content, true);

/***/ })

});