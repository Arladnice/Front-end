import firebase from "firebase/app";

export default {
    actions: {
        async fetchContacts({commit, dispatch}) {
            try {
                const uid = await dispatch('getuid')
                const contacts = (await firebase.database().ref(`/users/${uid}/contacts`).once('value')).val() || {}
                return Object.keys(contacts).map(key => ({...contacts[key], id: key}))
            } catch (e) {
                commit('setError', e)
                throw `${e}`
            }
        },
        async updateContact({commit, dispatch}, {name, number, id}) {
            try {
                const uid = await dispatch('getuid')
                await firebase.database().ref(`/users/${uid}/contacts`).child(id).update({name, number})
            } catch (e) {
                commit('setError', e)
                throw `${e}`
            }
        },
        async createContact({commit, dispatch}, {name, number}) {
            try {
                const uid = await dispatch('getuid')
                const contact = await firebase.database().ref(`/users/${uid}/contacts`).push({name, number})
                return {name, number, id: contact.key}
            } catch (e) {
                commit('setError', e)
                throw `${e}`
            }
        } 
    }
}