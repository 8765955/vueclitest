import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HI from "@/components/HI";
import HI1 from "@/components/HI1";
import Menu from "@/components/Menu";
import Params from "@/components/Params";
import Error from "@/components/Error";
import Count from "@/components/Count";

Vue.use(Router);

export default new Router({
  // mode history 正常url , hash 带#
  mode:'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      components: {
        default: HelloWorld,
        left: Menu
      }
    },
    {
      path:"/Count",
      component:Count
    },
    {
      path: "/params/:id/:content",
      name: "params",
      component: Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from); //to from 都是对象
        next(); //next(false) 或者 不写 则不进入本页面。 next() 或者 next(true) 进入下一步
      }
    },
    {
      path: "/goHome",
      redirect:'/'
    },
    {
      path: "/goParams/:id/:content",
      redirect:'/params/:id/:content',
      alias:'/aliasParams/:id/:content'
    },
    {
      path: "*",
      component: Error,
    },
    {
      path: "/HI",
      component: HI,
      children: [
        // { path: "/", component: HI, name: "HI" },
        { path: "HI1", component: HI1, name: "HI1" }
      ],
      alias:'/HIalias'
    }
  ]
});
