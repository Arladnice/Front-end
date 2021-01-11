const state = {
    isSubbmitted: false
}

const mutations = {
    registerStart(state){
        state.isSubbmitted = true
    }
}

const actions = {
    register(context) {
        setTimeout(() => {
            context.commit('registerStart')
        }, 1000)
    }
}

export default {
    state,
    mutations,
    actions
}
