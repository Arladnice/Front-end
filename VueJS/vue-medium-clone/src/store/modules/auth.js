import authApi from "@/api/auth";

const state = {
    isSubbmitting: false
}

const mutations = {
    registerStart(state){
        state.isSubbmitting = true
    },
    registerSuccess(state){
        state.isSubbmitting = false
    },
    registerFailure(state){
        state.isSubbmitting = false
    },

}

const actions = {
    register(context, credentials) {
        return new Promise(resolve => {
            context.commit('registerStart')
            authApi.register(credentials).then(response => {
                context.commit('registerSuccess', response.data.user)
                resolve(response.data.user)
            })
                .catch(result => {
                    context.commit('registerFailure', result.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}
