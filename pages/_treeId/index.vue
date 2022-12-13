<template>
  <h1>This is treeslug (branch list)</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import { Branch } from '~/domains/branch';

export default Vue.extend({
  data() {
    return {
      branch: [] as Branch[],
    };
  },
  async created() {
    await this.$accessor.getBranches(this.$route.params.tree_id);
    this.branch = this.$accessor.branches;
  },
});
</script>
