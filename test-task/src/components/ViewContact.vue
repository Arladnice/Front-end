<template>
    <div id="view-contact">
        <b-list-group>
            <b-list-group-item>{{number}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        name: 'view-contact',
        date() {
            return {
                contact_id: null,
                name: null,
                number: null,
                description: null
            }
        },
        // beforeRouteEnter (to, from, next) {
        //     db.collection('contacts').where('contact_id', '==', to.params.contact_id)
        //         .get().then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //             next(vm => {
        //                 vm.contact_id = doc.data().contact_id
        //                 vm.name = doc.data().name
        //                 vm.number = doc.data().number
        //                 vm.description = doc.data().description
        //             })
        //         })
        //     })
        // },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                db.collection('contacts').where('contact_id', '==', this.$route.params.contact_id)
                    .get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                            this.contact_id = doc.data().contact_id
                            this.name = doc.data().name
                            this.number = doc.data().number
                            this.description = doc.data().description
                    })
                })
            }
        },
    }
</script>

<style scoped>

</style>