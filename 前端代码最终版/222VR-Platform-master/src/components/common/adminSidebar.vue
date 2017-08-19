<template>
    <div class="sidebar">
         <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hello:"hahahaha",
                items: [
                    // {
                    //     icon: 'el-icon-menu',
                    //     index: '/admin/administrator',
                    //     title: '用户管理'
                    // },
                    
                    {
                        icon: 'el-icon-menu',
                        index: '111',
                        title: '新闻模块管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '111',
                        title: '产品模块管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '111',
                        title: '论坛模块管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/Encyclopedia',
                        title: '百科模块管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '111',
                        title: '评价模块管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '111',
                        title: '媒体自评测模块管理'
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                // return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: -5px;
        top: 70px;
        bottom:0;
        background: #3241f;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
