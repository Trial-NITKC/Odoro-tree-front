<template>
  <div>
    <h1 style="text-align: center; font-size: 3rem">おどろ木</h1>
    <TreeGrid :trees="trees"></TreeGrid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TreeGrid from '~/components/TreeGrid.vue';

export default Vue.extend({
  components: { TreeGrid },
  computed: {
    trees() {
      return this.$accessor.trees;
    },
  },
  async created() {
    await this.$accessor.getTrees();
  },
});
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
