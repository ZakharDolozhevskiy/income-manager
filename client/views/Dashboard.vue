<template>
  <draggable v-model="categories" class="root">
    <category v-for="category in categories" :key="category.title" :category="category"></category>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable'
  import category from '../components/Category.vue'

  export default {
    components: {draggable, category},
    computed: {
      categories: {
        get () {
          return this.$store.getters.categories
        },
        set (val) {
          this.$store.commit('categoriesUpdate', val)
        }
      }
    }
  }
</script>

<style scoped>
  .root {
    display: flex;
    padding: 8px;
    flex-wrap: wrap;
  }
</style>