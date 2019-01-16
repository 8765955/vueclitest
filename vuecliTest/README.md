# vueclitest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

   1)cnpm install vue-cli -g，安装完成后vue -V查看版本
   2)vue init <template-name> <project-name>
      <template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，
         webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
         webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
         browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
         browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
         simple-一个最简单的单页应用模板。
      在实际开发中，一般我们都会使用webpack这个模板，那我们这里也安装这个模板，在命令行输入以下命令：vue init webpack vuecliTest
      输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。
         Project name :项目名称 ，如果不需要更改直接回车就可以了。注意：这里不能使用大写，所以我把名称改成了vueclitest
         Project description:项目描述，默认为A Vue.js project,直接回车，不用编写。
         Author：作者，如果你有配置git的作者，他会读取。
         Install vue-router? 是否安装vue的路由插件，我们这里需要安装，所以选择Y
         Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
         setup unit tests with Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
         Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n。
      cd vuecliTest 进入我们的vue项目目录。
      npm install 安装我们的项目依赖包，也就是安装package.json里的包，如果你网速不好，你也可以使用cnpm来安装。
      npm run dev 开发模式下运行我们的程序。给我们自动构建了开发用的服务器环境和在浏览器中打开，并实时监视我们的代码更改，即时呈现给我们。

项目发布：
1) 修改config/index.js中build下面assetsPublicPath:'./'
2)npm run build，生成dist目录包含index.html、static目录包含css、js
3) dist目录下内容拷贝到生产web服务器上即可

vuex
1) npm install vuex --save
2) src下新建vuex目录，目录下新建store.js
   const state
   const mutations
   export default new Vuex.Store
3)components目录下新建vue文件，
import store from '@/vuex/store'
{{$store.state.count}}
<button @click="$store.commit('add')">+</button>
4)router 里增加路由

vuex访问state对象，三种方法：
1）computed:{
    count(){
        return this.$store.state.count;
    }
   }
2）import {mapState} from 'vuex';
   computed:mapState({
        count:state=>state.count
   })
3）import {mapState} from 'vuex';
   computed:mapState(["count"])

vuex Mutations修改状态
传值：
1) store.js中：
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
2）<button @click="$store.commit('add',10)">+</button>
直接写函数名：
1）在count.vue中, import { mapState,mapMutations } from 'vuex';
2）在count.vue中script中添加
   methods:mapMutations(['add','reduce']),

