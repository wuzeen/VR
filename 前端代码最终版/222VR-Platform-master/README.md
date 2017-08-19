# VR-Platform
# 虚拟现实产品质量管理评估平台页面

Vue.js+element UI打造的一个门户网站+后台管理页面，实现了浏览新闻、查看产品、产品对比、个人中心、后台管理等功能。

## 源代码
源代码地址：http://git.oschina.net/tayshin/VRplatform

## 技术栈
* **Vue2.0**：前端页面展示。
* **Element UI**：一套基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。
* **vue-router**：页面路由切换
* **axios**：一个基于 `Promise` 的 HTTP 库，向后端发起请求。
* **Express**：vue-cli生成的项目是基于**express**的
* **ES6**、**ES7**：采用ES6语法，这是以后的趋势。箭头函数、Promise等等语法很好用。
* **localStorage**、**sessionStorage**：HTML5提供的缓存，用于保存用户信息。
* **Webpack**：vue-cli自带Webpack，但是需要自己改造一下，比如要对需要安装sass相关loader，vue-cli已经配置好了webpack，你只需要安装依赖就可以，使用的时候只需要`<style lang="scss"></style>`。需要添加JQ也是在配置文件中添加Plugins即可。

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- bus.js               // 组件间通信中转站
	|           |-- userHeader.vue       // 用户头部
	|           |-- adminHeader.vue      // 管理员头部
	|           |-- userHome.vue         // 用户路由入口
	|           |-- adminHome.vue      	 // 管理员路由入口
	|           |-- userSidebar.vue      // 用户导航栏
	|           |-- adminSidebar.vue     // 管理员导航栏
	|		|-- page                   	 // 主要路由页面
	|           |-- Administrator.vue    // 管理员页面（未完成）
	|           |-- Login.vue            // 公共登录页面
	|           |-- News.vue             // 新闻内容页面
	|           |-- NewsList.vue         // 新闻列表页面
	|           |-- ProductList.vue      // 产品列表页面
	|           |-- ProductCompare.vue   // 产品对比页面
	|           |-- changeNick.vue       // 用户修改个人昵称页面
	|           |-- changePassword.vue   // 用户修改个人密码页面
	|           |-- ivr.vue              // 一体机（集成式）页面
	|           |-- svr.vue              // PC头显（外接式）页面
	|           |-- evr.vue              // 用户修改个人密码页面
	|           |-- noLogin.vue          // 未登录用户被阻止后跳转的页面
    |   |-- router                       // 路由目录，控制页面URL对应组件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 静态文件目录
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- emailValid.html                  // 激活页面
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明

## 安装步骤 ##
    git clone https://git.oschina.net/tayshin/VRplatform.git //下载至本地
    cd VRplatform
    npm install //安装项目依赖

## 本地开发 ##
    //开启开发服务器
    npm run dev
    
## 构建生产 ##
    //执行构建命令，生成的dist文件夹放在服务器即可访问
    npm run build
    
