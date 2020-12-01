<template>
    <div id="dashboard">

        <b-list-group style="padding-top: 2rem;">
            <div v-for="contact in contacts" v-bind:key="contacts.id" style="display:flex; justify-content: center; margin-bottom: 1rem;">
                <b-list-group-item>{{contact.contact_id}}: {{contact.name}}: {{contact.number}}
                    <div class="text-right" style="display: inline-block">
                        <router-link v-bind:to="{name: 'view-contact', params: {contact_id: contact.contact_id}}">
                            <i class="fa fa-eye"></i>
                        </router-link>
                    </div>
                </b-list-group-item>

            </div>
        </b-list-group>
        <div class="text-right" style="padding-top: 2rem">
            <router-link to="/new" class="btn btn-primary" style="border-radius:100%;" id="dropdownMenuButton" data-toggle="dropdown">
                <i class="fa fa-plus" aria-hidden="false"></i>
            </router-link>
        </div>

    </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        name: 'dashboard',
        data() {
            return {
                contacts: []
            }
        },
        created() {
            db.collection('contacts').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'contact_id': doc.data().contact_id,
                        'name': doc.data().name,
                        'number': doc.data().number,
                        'description': doc.data().description
                    }
                    this.contacts.push(data)
                })
            })
        }

    }
</script>

<style scoped>

</style>