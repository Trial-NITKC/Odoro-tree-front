<template>
  <div>
    <LeafCardVue :leaf="leaf"></LeafCardVue>
    <TreeGrid :trees="trees"></TreeGrid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LeafCardVue from '~/components/LeafCard.vue';
import TreeGrid from '~/components/TreeGrid.vue';
import { Leaf } from '~/domains/leaf';
import { Tree } from '~/domains/tree';

export default Vue.extend({
  components: { LeafCardVue, TreeGrid },
  data() {
    return {
      leaf: {
        leaf_id: 100,
        front_content: 'カレーが辛え時は...',
        back_content: 'レモン汁をかけてみて!\n辛さがマイルドになるよ!',
        rating: 100,
        parent_branch_id: 100,
      } as Leaf,
      trees: [{ tree_id: 123, name: 'パソコン' }] as Array<Tree>,
    };
  },
});
</script>
