<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="imgLink" :alt="product_data.name"/>
    <p>{{ product_data.name }}</p>
    <p>Price: {{ product_data.price }} руб.</p>
    <button @click.prevent="sendDataToParent">Add to card</button>
  </div>
</template>

<script>
    export default {
        name: 'v-catalog-item',
        components: {

        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({
            title: 'Hello'
        }),
        computed: {
            imgLink: function () {
                const fileName = this.product_data.image;
                return require(`../assets/images/${fileName}`);
            },
        },
        methods: {
            sendDataToParent() {
                this.$emit('sendArticle', this.product_data.article)
            }
        },
        watch: {

        },

    }
</script>

<style scoped>
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 2rem;
    margin-bottom: 1rem;
  }
  .v-catalog-item__image {
    width: 50%;
  }
</style>