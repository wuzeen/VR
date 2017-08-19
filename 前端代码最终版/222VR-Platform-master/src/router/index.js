import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/admin/administratorLogin'
        },
        {
            path:'/nologin',
            component: resolve => require(['../components/page/noLogin.vue'],resolve)
        },
        {
            path: '/user',
            component: resolve => require(['../components/common/userHome.vue'], resolve),
            children:[
                {
                    path: '/user/change-nick',
                    component: resolve => require(['../components/page/changeNick.vue'],resolve)
                },
                {
                    path: '/user/change-password',
                    component: resolve => require(['../components/page/changePassword.vue'],resolve)
                },
                {
                    path: '/user/news-list',
                    component: resolve => require(['../components/page/NewsList.vue'],resolve)
                },
                {
                    path: '/user/news',
                    component: resolve => require(['../components/page/News.vue'],resolve)
                },
                {
                    path: '/user/product-list',
                    component: resolve => require(['../components/page/ProductList.vue'],resolve)
                },
                {
                    path: '/user/product-compare',
                    component: resolve => require(['../components/page/ProductCompare.vue'],resolve)
                },
                {
                    path: '/user/questionaire',
                    component: resolve => require(['../components/page/Questionaire.vue'],resolve)
                },
                {
                    path: '/user/questionaire/statistic',
                    component: resolve => require(['../components/page/QStatistic.vue'],resolve)
                },
                {
                    path: '/user/ivr-comment',
                    component: resolve => require(['../components/page/ivrComment.vue'],resolve),
                },
                {
                    path: '/user/svr-comment',
                    component: resolve => require(['../components/page/svrComment.vue'],resolve)
                },
                {
                    path: '/user/evr-comment',
                    component: resolve => require(['../components/page/evrComment.vue'],resolve)
                },
                {
                    path: '/user/ivr-comment/ivr',
                    component: resolve => require(['../components/page/ivr.vue'],resolve)
                },
                {
                    path: '/user/svr-comment/svr',
                    component: resolve => require(['../components/page/svr.vue'],resolve)
                },
                {
                    path: '/user/evr-comment/evr',
                    component: resolve => require(['../components/page/evr.vue'],resolve)
                },
                {
                    path: '/user/UploadFile',
                    component: resolve => require(['../components/page/UploadFile.vue'],resolve)
                },
                {
                    path: '/user/pedia',
                    component: resolve => require(['../components/page/pedia.vue'],resolve)
                },
                {
                    path: '/user/pedia2',
                    component: resolve => require(['../components/page/pedia2.vue'],resolve)
                },
                {
                    path: '/user/encyclopedia-prop',
                    component: resolve => require(['../components/page/encyclopedia-prop.vue'],resolve)
                }

            ]
        },
        {
            // 管理员入口
            path: '/admin',
            component: resolve => require(['../components/common/adminHome.vue'], resolve),
            children: [
                {
                    path: '/admin/administrator',
                    component: resolve => require(['../components/page/Administrator.vue'], resolve)
                },
                {
                     path: '/admin/administratorLogin',
                    component: resolve => require(['../components/page/AdministratorLogin.vue'], resolve)
                },
                {
                    path: '/admin/UploadFile',
                    component: resolve => require(['../components/page/UploadFile.vue'],resolve)
                },
                {
                    path: '/admin/Encyclopedia',
                    component: resolve => require(['../components/page/AdminstratorEncyclopedia.vue'],resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
