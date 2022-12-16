<template>
  <v-container>
    <h2>Leaf Test view</h2>
    <v-row>
      <v-col>
        <LeafCardVue :leaf="leaf" :is-show-button="true"></LeafCardVue>
      </v-col>
    </v-row>
    <h2>add Tree</h2>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-text-field v-model="newTreeName"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="createNewTree">木を生やす</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import LeafCardVue from '~/components/LeafCard.vue';
import { NewBranch } from '~/domains/branch';
import { Leaf } from '~/domains/leaf';
import { NewTree } from '~/domains/tree';

export default Vue.extend({
  components: { LeafCardVue },
  data() {
    return {
      leaf: {
        leaf_id: 100,
        front_content: 'カレーが辛え時は...',
        back_content: 'レモン汁をかけてみて!\n辛さがマイルドになるよ!',
        rating: 100,
        parent_branch_id: 100,
      } as Leaf,
      newTreeName: "",
    };
  },
  methods: {
    async createNewTree() {
      const newTreeData = {
        name: this.newTreeName,
      } as NewTree
      const newTreeId = await this.$accessor.createNewTree(newTreeData);
      const newBranchData = {
        parent_tree_id: newTreeId
      } as NewBranch
      await this.$accessor.createNewBranch(newBranchData);
      this.newTreeName = "";
    }
  }
});
</script>
