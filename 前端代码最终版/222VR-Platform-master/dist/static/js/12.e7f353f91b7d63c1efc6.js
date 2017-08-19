webpackJsonp([12],{

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(611)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(530),
  /* template */
  __webpack_require__(582),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 530:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function () {
        return {
            activeName2: 'first',
            allowSubmit: true,
            hostURL: "/VR",
            successType: "success",
            cancelType: "primary",

            // uid:'1',
            textarea: "",
            display_hot: false,
            display_new: false,

            compare_data: {
                data: [{
                    type: "ivr",
                    pic_location: "./static/img/img.jpg"

                }, {
                    type: "ivr",
                    pic_location: "./static/img/img.jpg"

                }]
            },

            pro_intro: "",
            intro: {
                pic_location: "",
                pro_name: ""
            },

            pro_thumbs: {
                type: "一体机",
                upvote: 50,
                downvote: 10,
                state: 0
            },
            hot_data: {
                hot_comments: [{
                    id: 1,
                    user: {
                        id: 1,
                        nickname: null
                    },
                    message: "1",
                    upvote: 2,
                    belong: "8",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: 10,
                            nickname: null
                        },
                        messageResponse: "555",
                        releasetime: null
                    }],
                    state: 0
                }]
            },
            new_data: {
                new_comments: [{
                    id: 2,
                    user: {
                        id: 2,
                        nickname: null
                    },
                    message: "2",
                    upvote: 3,
                    belong: "4",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: 11,
                            nickname: null
                        },
                        messageResponse: "5555",
                        releasetime: null
                    }],
                    state: 0
                }]
            },
            hot_reply: {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            },
            new_reply: {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            }
        };
    },
    // computed:{
    //     reversedArr:function(){
    //         var arr={};
    //         arr=this.new_data.new_comments;
    //         return arr.reverse();
    //     },
    // },
    methods: {
        codeParsing(code) {
            var msg = (Title, MessageTitle, Message) => {
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
        //留言
        postTextArea() {
            var self = this;
            self.$axios({
                url: '/MessageLeaving/' + localStorage.getItem('ms_userid'), //{uid}
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    content: self.textarea, //时间在后台取得
                    belong: localStorage.getItem("salesModel")
                }
            }).catch(error => {
                console.log(error);
            });
        },
        refreshNewData() {
            var self = this;
            var text = self.textarea;
            console.log(text);
            if (text != "") {
                self.$message('评论成功！');
                self.postTextArea();
                self.new_data.new_comments.reverse();
                self.new_data.new_comments.push({
                    id: "",
                    user: {
                        id: "",
                        nickname: localStorage.getItem("ms_username")
                    },
                    message: text,
                    upvote: "0",
                    belong: "0",
                    releasetime: "刚刚",
                    // messageResponses:[{
                    //     user:{
                    //         id:"",
                    //         nickname:null,
                    //     },
                    //     messageResponse:"",
                    //     releasetime:null
                    // }],
                    state: 0
                });
                self.new_data.new_comments.reverse();
                // console.log("self id:"+self.hot_data.hot_comments[0].id);
                var len = self.new_data.new_comments.length;
                self.new_reply.replys = [];
                for (var i = 0; i < len; i++) self.new_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
                console.log("textarea=" + self.textarea);
                self.textarea = "";
                console.log("textarea=" + self.textarea);
            }
        },
        //回复-热评
        replyHotClick(item, index) {
            var self = this;
            if (!self.hot_reply.replys[index].appear) {
                self.hot_reply.replys[index].appear = 1;
            } else {
                if (self.hot_reply.replys[index].textarea == '') self.hot_reply.replys[index].appear = 0;else {
                    //发送数据给后台
                    self.$axios({
                        url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
                        method: 'post',
                        baseURL: self.hostURL,
                        data: {
                            content: self.hot_reply.replys[index].textarea,
                            leavingid: item.id
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message('回复成功！');
                    self.hot_data.hot_comments[index].messageResponses.push({
                        user: {
                            id: "",
                            nickname: localStorage.getItem('ms_username')
                        },
                        messageResponse: self.hot_reply.replys[index].textarea,
                        releasetime: "刚刚"
                    });
                    self.hot_reply.replys[index].textarea = '';
                    self.hot_reply.replys[index].appear = 0;
                }
            }
        },
        //回复-最新评价
        replyNewClick(item, index) {
            var self = this;
            if (!self.new_reply.replys[index].appear) {
                self.new_reply.replys[index].appear = 1;
            } else {
                if (self.new_reply.replys[index].textarea == '') self.new_reply.replys[index].appear = 0;else {
                    //发送数据给后台
                    self.$axios({
                        url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
                        method: 'post',
                        baseURL: self.hostURL,
                        data: {
                            content: self.new_reply.replys[index].textarea,
                            leavingid: item.id
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    self.$message('回复成功！');
                    self.new_data.new_comments[index].messageResponses.push({
                        user: {
                            id: "",
                            nickname: localStorage.getItem('ms_username')
                        },
                        messageResponse: self.new_reply.replys[index].textarea,
                        releasetime: "刚刚"
                    });
                    self.new_reply.replys[index].textarea = '';
                    self.new_reply.replys[index].appear = 0;
                }
            }
        },
        /*获得评论*/
        //1.获得热评
        getHotComments() {
            var self = this;
            self.hot_data = {
                hot_comments: [{
                    id: "",
                    user: {
                        id: "",
                        nickname: null
                    },
                    message: "",
                    upvote: "",
                    belong: "",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: "",
                            nickname: null
                        },
                        messageResponse: "",
                        releasetime: null
                    }],
                    state: 0
                }]
            };
            self.hot_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + localStorage.getItem("salesModel") + '&condition=hot',
                method: 'get',
                baseURL: self.hostURL
                // data:{
                // condition:"hot",
                // belong:localStorage.getItem("salesModel")
                // }
            }).then(response => {
                console.log("resp id:" + response.data[0].id);
                console.log("self id:" + self.hot_data.hot_comments[0].id);
                self.display_hot = true;
                self.hot_data.hot_comments = response.data;
                self.hot_data.hot_comments.reverse();
                console.log("self id:" + self.hot_data.hot_comments[0].id);
                var len = self.hot_data.hot_comments.length;
                self.hot_reply.replys = [];
                for (var i = 0; i < len; i++) self.hot_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                console.log(error);
            });
        },
        //2.获得最新评论
        getNewComments() {
            var self = this;
            self.new_data = {
                new_comments: [{
                    id: "",
                    user: {
                        id: "",
                        nickname: null
                    },
                    message: "",
                    upvote: "",
                    belong: "",
                    releasetime: null,
                    messageResponses: [{
                        user: {
                            id: "",
                            nickname: null
                        },
                        messageResponse: "",
                        releasetime: null
                    }],
                    state: 0
                }]
            };
            self.new_reply = {
                replys: [{
                    appear: 0,
                    textarea: ""
                }]
            };
            self.$axios({
                url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + localStorage.getItem("salesModel") + '&condition=time',
                method: 'get',
                baseURL: self.hostURL
                // data:{
                // condition:"time",
                // belong:localStorage.getItem("salesModel")
                // }
            }).then(response => {
                console.log("resp id:" + response.data[0].id);
                console.log("self id:" + self.new_data.new_comments[0].id);
                self.display_new = true;
                self.new_data.new_comments = response.data;
                self.new_data.new_comments.reverse();
                console.log("self id:" + self.new_data.new_comments[0].id);
                var len = self.new_data.new_comments.length;
                self.new_reply.replys = [];
                for (var i = 0; i < len; i++) self.new_reply.replys.push({
                    appear: 0,
                    textarea: ""
                });
            }).catch(error => {
                console.log(error);
            });
        },

        //评论点赞（用于后台存储被点赞的评论）
        postCommLike(item, val) {
            var self = this;
            self.$axios({
                url: '/MessageLeaving/upvote/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    id: item.id,
                    value: val
                }
            }).catch(error => {
                console.log(error);
            });
        },
        commentLikeClick(item) {
            var self = this;
            item.state = item.state == 1 ? 0 : 1;
            var value = item.state == 1 ? 1 : -1;
            item.upvote += value;
            self.postCommLike(item, value);
        },

        //获取产品点赞数
        getProThumbs() {
            var self = this;
            self.pro_thumbs = {
                type: "一体机",
                upvote: 10,
                downvote: 20,
                state: 0
            };
            console.log("proname: " + localStorage.getItem("proName"));
            self.$axios({
                url: '/Thumbs/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    belong: localStorage.getItem("salesModel")
                }
            }).then(response => {
                // self.pro_thumbs={};
                console.log("response.data:upvote " + response.data.upvote);
                console.log("self data:upvote " + self.pro_thumbs.upvote);
                self.pro_thumbs = response.data;
                console.log("self data:upvote " + self.pro_thumbs.upvote);
            }).catch(error => {
                console.log(error);
            });
        },
        //点赞
        postProLike(val) {
            var self = this;
            self.$axios({
                url: '/Thumbs/upvote/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    name: localStorage.getItem("salesModel"),
                    value: val
                }
            }).catch(error => {
                console.log(error);
            });
        },
        proLikeClick() {
            var self = this;
            self.pro_thumbs.state = self.pro_thumbs.state == 1 ? 0 : 1;
            var value = self.pro_thumbs.state == 1 ? 1 : -1;
            self.pro_thumbs.upvote += value;
            console.log(self.pro_thumbs.state + " " + self.pro_thumbs.upvote);
            self.postProLike(value);
        },
        //点踩
        postProUnlike(val) {
            var self = this;
            self.$axios({
                url: '/Thumbs/downvote/' + localStorage.getItem('ms_userid'),
                method: 'post',
                baseURL: self.hostURL,
                data: {
                    name: localStorage.getItem("salesModel"),
                    value: val
                }
            }).catch(error => {
                console.log(error);
            });
        },
        proUnlikeClick() {
            var self = this;
            self.pro_thumbs.state = self.pro_thumbs.state == -1 ? 0 : -1;
            var value = self.pro_thumbs.state == -1 ? 1 : -1;
            self.pro_thumbs.downvote += value;
            console.log(self.pro_thumbs.state + " " + self.pro_thumbs.downvote);
            self.postProUnlike(value);
        },

        //获得产品简介
        getProIntro() {
            var self = this;
            self.pro_intro = {};
            self.$axios({
                url: '/Profile',
                method: 'get',
                baseURL: self.hostURL,
                data: {
                    product: localStorage.getItem("salesModel")
                }
            }).then(response => {
                self.pro_intro = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        //获取进入页面时需要加载的所有数据
        // getData(){
        //     var self=this;
        //     self.getIntro();
        //     self.getProThumbs();
        //     self.getHotComments();
        //     self.getNewComments();
        // },
        //查看详情跳转
        getDetail() {
            var self = this;
            var arr = location.href.split('?');
            var id = arr[1];
            self.$router.push('/user/ivr-comment/ivr?' + id);
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
        },
        getIntro() {
            var self = this;
            self.intro.pic_location = localStorage.getItem("proPic");
            self.intro.pro_name = localStorage.getItem("proName");
        }
    },

    mounted() {
        var self = this;
        self.getProThumbs();
        self.getHotComments();
        self.getNewComments();
        self.refreshCompare();
    },
    created() {
        var self = this;
        self.getIntro();
    }
});

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs{text-decoration:none}.bread{font-size:16px}.form-box{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.product-box{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.intro-box{height:350px;width:100%}.intro-header{text-align:center}.intro-header img{width:200px;height:200px;margin:0 -12% 0 0}.intro-header h3{margin-top:5px;font-size:20px;font-weight:700}.intro-body{margin-top:10px;margin-left:30%;width:40%}.intro-body p{width:100%;font-size:15px;font-weight:lighter}.intro-body .btn{float:right}.product-comment{margin-top:20px;width:100%;text-align:center}.comment{margin:20px;width:100%}.my-comment{float:left;width:80%}.comment-btn{margin-left:10px}.comment-content{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply{width:70%}.user-comment{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content{display:flex}.reply-name{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content{float:right;width:80%}.sub-reply-content{font-size:13px;text-align:left;width:100%}.reply-time{text-align:right;padding:5px 0}.comment-time,.reply-time{color:#666;width:100%;font-size:10px}.comment-time{text-align:left;margin-top:10px}.comment-right{flex:1;padding:10px}.comment-content-btn,.reply-btn{width:100%}.compare{display:block;width:175px;position:absolute;bottom:300px;z-index:9999;top:128px;left:900px}#compare_box{width:150px;border:1px solid #c0ccda;box-shadow:0 0 10px #c0ccda}#cancel-btn{float:right;width:10px;height:50px;margin-top:40px;margin-left:15px;cursor:pointer}.compare_item{float:left;width:90%;height:100px}.compare_item_img{width:70%;height:80%;margin-left:10px;margin-top:10px}.compare_btn{margin:20px 0 10px 30px}", ""]);

// exports


/***/ }),

/***/ 582:
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
  }, [_vm._v("产品列表")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("一体机")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("产品简介")])], 1)], 1), _vm._v(" "), _c('div', {
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
  }, [_c('div', {
    staticClass: "intro-box"
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
    staticClass: "intro-header"
  }, [_c('img', {
    attrs: {
      "src": _vm.intro.pic_location
    }
  }), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.intro.pro_name))])]), _vm._v(" "), _c('div', {
    staticClass: "intro-body"
  }, [_c('p', [_vm._v(_vm._s(_vm.pro_intro))]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.getDetail()
      }
    }
  }, [_vm._v("查看详情")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "product-comment"
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "my-comment"
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入您对该产品的评价",
      "resize": "none"
    },
    model: {
      value: (_vm.textarea),
      callback: function($$v) {
        _vm.textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "textarea"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "comment-btn"
  }, [_c('el-button-group', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "circle-check",
      "size": "small",
      "disabled": _vm.pro_thumbs.state == -1 ? true : false,
      "type": _vm.pro_thumbs.state == 1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proLikeClick()
      }
    }
  }, [_vm._v("\n                                赞" + _vm._s(_vm.pro_thumbs.upvote))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.pro_thumbs.state == 1 ? true : false,
      "type": _vm.pro_thumbs.state == -1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.proUnlikeClick()
      }
    }
  }, [_vm._v("\n                                踩" + _vm._s(_vm.pro_thumbs.downvote)), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.refreshNewData()
      }
    }
  }, [_vm._v("发表评论")])], 1)]), _vm._v(" "), _c('el-tabs', {
    staticStyle: {
      "width": "100%"
    },
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
  }, _vm._l((_vm.hot_data.hot_comments), function(hot, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_hot),
        expression: "display_hot"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(hot.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(hot.message))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.hot_reply.replys[index].appear),
        expression: "hot_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.hot_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.hot_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "hot_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((hot.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": hot.state == 1 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(hot)
        }
      }
    }, [_vm._v("赞" + _vm._s(hot.upvote))]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyHotClick(hot, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(hot.releasetime))])])])
  })), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "最新评论",
      "name": "second"
    }
  }, _vm._l((_vm.new_data.new_comments), function(new_, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_new),
        expression: "display_new"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(new_.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(new_.message))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.new_reply.replys[index].appear),
        expression: "new_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.new_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.new_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "new_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((new_.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": new_.state == 1 ? _vm.successType : _vm.cancelType
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(new_)
        }
      }
    }, [_vm._v("赞" + _vm._s(new_.upvote))]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyNewClick(new_, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(new_.releasetime))])])])
  }))], 1)], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("07a4a52c", content, true);

/***/ })

});