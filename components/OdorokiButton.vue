<template>
  <v-row>
    <v-spacer></v-spacer>
    <div style="display: flex; align-items: center">
      <v-tooltip bottom>
        <template #[`activator`]="{ on, attrs }">
          <span
            class="mx-3 text-h3"
            style="color: #ff5943"
            v-on="on"
            v-bind="attrs"
            >{{ leaf.rating }}</span
          >
        </template>
        <span>おどろ木カウント</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #[`activator`]="{ on, attrs }">
          <v-btn
            color="red"
            elevation="0"
            v-bind="attrs"
            icon
            fab
            x-large
            dark
            v-on="on"
            @click="upLeaf"
            ><v-icon>mdi-exclamation</v-icon></v-btn
          >
        </template>
        <span>おどろ木！</span>
      </v-tooltip>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Leaf } from '~/domains/leaf';
export default Vue.extend({
  props: {
    leaf: {
      type: Object as PropType<Leaf>,
      default: () => ({} as Leaf),
    },
  },
  methods: {
    upLeaf() {
      this.$emit('clickBtn', this.leaf);
    },
  },
});
</script>
