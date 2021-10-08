const state = () => ({
    isAuthenticated: false
})

const getters = {
    getAuthenticated: (state) => { return state.isAuthenticated }
}

const actions = {
    updateAuthenticated({ commit }, value) {
        commit('setAuthenticated', value)
    }
}

const mutations = {
    setAuthenticated(state, value) {
        state.isAuthenticated = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}