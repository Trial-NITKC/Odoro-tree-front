<template>
  <div>
    <LeafCardVue :leaf="leaf" :is-show-button="true" @refresh="renewLeaf">
    </LeafCardVue>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Leaf } from '~/domains/leaf';
import LeafCardVue from '~/components/LeafCard.vue';

export default Vue.extend({
  components: { LeafCardVue },
  data() {
    return {
      leafData: {} as Leaf,
    };
  },
  computed: {
    leaf: {
      get(): Leaf {
        return this.leafData;
      },
    },
  },
  async created() {
    await this.getLeaf();
  },
  methods: {
    renewLeaf(_leaf: Leaf) {
      this.leafData = _leaf;
    },
    async getLeaf() {
      this.leafData = await this.$accessor.getLeafById(
        Number(this.$route.params.leafId)
      );
    },
  },
});
</script>
