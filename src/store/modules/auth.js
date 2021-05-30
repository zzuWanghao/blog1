import auth from "../../api/auth";

const state = {
    user: null,
    isLogin: false,

}
const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}
const mutations = {
    setUser(state, payLoad) {
        state.user = payLoad.user
    },
    setLogin(state, payLoad) {
        state.isLogin = payLoad.isLogin

    }
}
const actions = {
    login({commit}, {username, password}) {

        return auth.login({username, password}).then(res => {

            commit('setUser', {user: res.data})
            commit('setLogin', {isLogin: true})
            console.log('我更新 了')
            console.log(res.data)
            console.log(state.user)
        })
    },
    async register({commit}, {username, password}) {
        let res = await auth.register({username, password})
        commit('setUser', {user: res.data})
        commit('setLogin', {isLogin: true})
        return res.data
    },

    async logout({commit}) {
        await auth.logout()
        commit('setUser', {user: null})
        commit('setLogin', {isLogin: false})
        localStorage.removeItem('token')
        console.log('hi whh')
    },
    async checkLogin({commit, state}) {

        // console.log('我是检查是否登录1')
        // console.log(state.isLogin)
        if (state.isLogin) {
            return true
        }
        let res = await auth.getInfo()
        commit('setLogin', {isLogin: res.isLogin})
        // console.log('我是检查是否登录2')
        // console.log(res)
        if (!res.isLogin)
        {
            console.log('我是检查是否登录4')
            return false
        }
        commit('setUser', {user: res.data})
        // console.log('我是检查是否登录3')
        // console.log(state.isLogin)
        return true

    }
    /*

     */
}
export default {
    state,
    getters,
    mutations,
    actions
}

