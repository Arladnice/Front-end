export default {
    actions: {
        async fetchData(ctx, limit) {
            const fetched = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const jsoned = await fetched.json()
            ctx.commit('updateData', jsoned)
        }
    },
    mutations: {
        updateData(state, jsoned) {
            state.posts = jsoned
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validatePost(state) {
            return state.posts.filter(t => {
                return t.title && t.body
            })
        },
        allPosts(state) {
            return state.posts
        },
        getCount(state, getters) {
            return getters.validatePost.length
        },

    }
}
