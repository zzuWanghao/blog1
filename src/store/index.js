import Vue from "vue";
import Vuex from "vuex"
import auth from "./modules/auth";
import blog from "./modules/blog";
Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        auth,//可以这样写
        blog,//也可以这样写
    }
})