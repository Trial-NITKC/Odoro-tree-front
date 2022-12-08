<template>
  <v-row justify="start" align="center">
    <v-col
      v-for="(item, index) in trees"
      :key="index"
      cols="6"
      md="2"
      class="btn-box"
    >
      <v-btn
        icon
        rounded
        :to="'/' + item.tree_id"
        style="
          height: 150px;
          width: 150px;
          background-color: rgb(255 255 255 / 0%);
        "
        ><v-icon size="130" color="green">mdi-pine-tree</v-icon></v-btn
      >
      <span style="font-size: 1.5rem"
        >{{ item.name }}<span style="font-size: 1rem">の木</span></span
      >
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Tree } from '~/domains/tree';

export default Vue.extend({
  props: {
    trees: {
      type: [] as PropType<Array<Tree>>,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.btn-box {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
