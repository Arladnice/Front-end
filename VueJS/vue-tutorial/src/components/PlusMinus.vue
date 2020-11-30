<template>
    <div>
        <h3>Я найду тебя!</h3>
        <input type="text" @input="searchText = $event.target.value">
        <p>Всего имён: {{users.length}}, совпадений: {{getFilteredItems.length}}</p>
        <ul>
            <li v-for="(name, index) in getFilteredItems" :key="index"
            >
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                searchText: '',
                users: ['Денис', 'Саша', 'Костя', 'Андрей'],
            }
        },
        computed: {
            getFilteredItems() {
                return this.users.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
            }
        }
    }
</script>

<style scoped>

</style>