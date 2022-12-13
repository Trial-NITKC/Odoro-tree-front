<template>
  <v-row>
    <v-col class="text-center">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6"> </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { NewLeaf } from '~/domains/leaf/types';

export default Vue.extend({
  name: 'InspirePage',
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    close() {
      this.dialog = false;
    },
    createLeaf(leaf: NewLeaf) {
      alert(JSON.stringify(leaf));
      const data = {
        newLeaf: leaf,
        parent_branch_id: Number(this.$route.params.branchId),
      };
      this.$accessor.createNewLeaf(data);
    },
  },
});
</script>
