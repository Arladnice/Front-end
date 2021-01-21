<template>
  <div>
    <b-col md-3>
      <b-card
        :title="name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="img"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, pariatur?
        </b-card-text>
        <b-button variant="primary">Apply</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ['name']
};
</script>

<style scoped>

</style>