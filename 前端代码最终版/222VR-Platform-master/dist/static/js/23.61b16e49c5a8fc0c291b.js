webpackJsonp([23],{

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(625)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(515),
  /* template */
  __webpack_require__(597),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 515:
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


/* harmony default export */ __webpack_exports__["default"] = ({

  data: function () {
    return {
      msg: '',
      message: "",
      pageNum: 1,
      hostURL: '/VR',
      id: '1',
      prop_id: "0",
      keyword: "",
      prop_keyword: 'VR资讯',
      content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
      changenote: "a",
      encyclopedia_propchangerequrire: [{
        requireid: "1",
        id: '1',
        prop_id: "0",
        keyword: "",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      }, {
        requireid: "2",
        id: '1',
        prop_id: "1",
        keyword: "",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      }]
    };
  },

  methods: {
    handleRowHandle(row, event, column) {
      console.log(row.content);
      this.message = row.content;
      this.id = row.id;
      this.prop_id = row.prop_id;
      this.keyword = row.keyword;
      this.prop_keyword = row.prop_keyword;
      this.content = row.content;
      this.changenote = row.changenote;
    },
    open1() //通过按钮
    {
      var self = this;
      var updatedata = {
        id: '1',
        prop_id: "0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      };
      updatedata.id = self.id;
      updatedata.prop_id = self.prop_id;
      updatedata.prop_keyword = self.prop_keyword;
      updatedata.content = self.content;
      updatedata.changenote = self.changenote;
      self.$axios({
        url: '/encyclopedia-propRequireOpen1',
        method: 'post',
        baseURL: self.hostURL,
        data: updatedata
      }).then(response => {
        var state = response.data;
        if (state == 1) {
          self.$message({
            type: 'info',
            message: '修改成功'
          });
        } else {
          self.$message({
            type: 'info',
            message: '修改失败'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },
    open2() //不通过按钮
    {
      var self = this;
      var updatedata = {
        id: '1',
        prop_id: "0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote: "a"
      };
      updatedata.id = self.id;
      updatedata.prop_id = self.prop_id;
      updatedata.prop_keyword = self.prop_keyword;
      updatedata.content = self.content;
      updatedata.changenote = self.changenote;
      self.$axios({
        url: '/encyclopedia-propRequireOpen2',
        method: 'post',
        baseURL: self.hostURL,
        data: updatedata
      }).then(response => {
        var state = response.data;
        if (state == 1) {
          self.$message({
            type: 'info',
            message: '删除成功'
          });
        } else {
          self.$message({
            type: 'info',
            message: '删除失败'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },
    /*
            .then(() => {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            }
      */
    getRequireList() {
      var self = this;
      var page = self.pageNum;
      self.encyclopedia_propchangerequrire = [];
      self.$axios({
        url: '/encyclopedia-propRequire/' + page,
        method: 'get',
        baseURL: self.hostURL
      }).then(response => {
        self.encyclopedia_propchangerequrire = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    var self = this;
    self.getRequireList();
  }

});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, "h1{text-align:center;text-transform:uppercase;color:#a7c942}p{text-indent:50px;text-align:justify;letter-spacing:3px}.pagination{margin-left:50px}", ""]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-edit"
  }), _vm._v(" 管理员")]), _vm._v(" "), _c('el-breadcrumb-item', [_vm._v("百科管理")])], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.encyclopedia_propchangerequrire,
      "border": "",
      "height": "300"
    },
    on: {
      "row-click": _vm.handleRowHandle
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "requireid",
      "label": "请求号",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "keyword",
      "label": "词条名",
      "width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "prop_keyword",
      "label": "词条属性"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": _vm.handleClick
          }
        }, [_vm._v("查看")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
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
  })], 1), _vm._v(" "), _c('h1', [_vm._v("  内容概述   ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.open1
    }
  }, [_vm._v("通过")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.open2
    }
  }, [_vm._v("不通过")])]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(563);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("44fe47c8", content, true);

/***/ })

});