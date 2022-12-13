<template>
  <div><LeafCardVue :leaf="leaf"> </LeafCardVue></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Leaf } from '~/domains/leaf';
import LeafCardVue from '~/components/LeafCard.vue';

export default Vue.extend({
  components: { LeafCardVue },
  data() {
    return {
      leaf: {} as Leaf,
    };
  },
  async created() {
    this.leaf = (
      await this.$repositories.leaf.getLeaf(this.$route.params.leafId)
    ).data;
  },
});
</script>
