import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HI from "@/components/HI";
import HI1 from "@/components/HI1";
// import Menu from "@/components/Menu";
import Main from "@/components/Main";
// import Params from "@/components/Params";
import Error from "@/components/Error";
import Count from "@/components/Count";
import Dashboard from "@/components/DashBoard";

Vue.use(Router);
// console.log('1')
export default new Router({
  // mode history 正常url , hash 带#
  mode: "history",
  routes: [
    {
      path: "/login",
      component: ()=>import('@/components/Login')
    },
    {
      path: "/",
      hidden: true,
      component: Main,
      children: [
        {
          path: "/",
          component: Dashboard,
          name: "首页"
        }
      ]
    },
    {
      path: "/system",
      name: "系统中心",
      component: Main,
      iconCls: "fa fa-address-card",
      children: [
        {
          path: "/system/contract",
          component: Count,
          iconCls: "fa fa-address-card",
          name: "联系人管理"
        },
        {
          path: "/HI1",
          component: HI1,
          name: "HI1",
          xx: "xx"
        }
      ]
    },
    {
      path: "/",
      component: HI,
      name: "params",
      component: Main,
      leaf: true,
      iconCls: "fa fa-address-card",
      children: [
        {
          path: "/HI",
          component: HI,
          name: "联系人管理"
        }
      ]
    },
    // {
    //   path: "/params/:id/:content",
    //   name: "params",
    //   component: Params,
    //   beforeEnter: (to, from, next) => {
    //     console.log('我进入了params模板');
    //     console.log(to);
    //     console.log(from); //to from 都是对象
    //     next(); //next(false) 或者 不写 则不进入本页面。 next() 或者 next(true) 进入下一步
    //   }
    // },
    // {
    //   path: "/goHome",
    //   redirect: '/'
    // },
    // {
    //   path: "/goParams/:id/:content",
    //   redirect: '/params/:id/:content',
    //   alias: '/aliasParams/:id/:content'
    // },
    {
      path: "*",
      component: Error
    }
    // {
    //   path: "/HI",
    //   component: HI,
    //   children: [
    //     // { path: "/", component: HI, name: "HI" },
    //     {
    //       path: "HI1",
    //       component: HI1,
    //       name: "HI1"
    //     }
    //   ],
    //   alias: '/HIalias'
    // }
  ]
});
