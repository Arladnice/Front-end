<template>
  <div>
    <div class="page-title">
      <h3>Контакты</h3>
    </div>
    <section>
      <div class="row">
        <ContactCreate @created="addNewContact"/>
        <ContactEdit :contacts="contacts" @updated="updateContact"/>
      </div>
    </section>
  </div>
</template>

<script>
  import ContactCreate from '@/components/ContactCreate'
  import ContactEdit from '@/components/ContactEdit'
  export default {
      name: 'contacts',
      data: () => ({
         contacts: [],
          loading: true
      }),
      async mounted() {
          this.contacts = await this.$store.dispatch('fetchContacts')
          console.log(this.contacts)
          this.loading = false
      },
      components:{
          ContactCreate, ContactEdit
      },
      methods: {
          addNewContact(contact) {
              this.contacts.push(contact)
              console.log(this.contacts)
          },
          updateContact(contact) {
              const idx = this.contact.findIndex(c => c.id === contact.id)
              this.contacts[idx].title = contact.name
              this.contacts[idx].number = contact.number
          }
      }
  }
</script>