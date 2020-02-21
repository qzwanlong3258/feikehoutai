import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

//导入数据管理模块

import user from './modules/user'
import app from './modules/app'
import routers from './modules/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        routers
    },
    getters
})

export default store