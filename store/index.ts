/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  actionTree,
  getAccessorType,
  getterTree,
  mutationTree,
} from 'typed-vuex';
import { Branch, NewBranch } from '~/domains/branch';
import { Leaf, NewLeaf } from '~/domains/leaf';
import { NewTree, Tree } from '~/domains/tree';

export const state = () => ({
  trees: [] as Tree[],
  branches: [] as Branch[],
  leaves: [] as Leaf[],
});
export type RootState = ReturnType<typeof state>;
export const getters = getterTree(state, {});
export const mutations = mutationTree(state, {
  changeTreesState(state, _trees: Tree[]) {
    state.trees = _trees;
  },
  changeBranchesState(state, _branches: Branch[]) {
    state.branches = _branches;
  },
  changeLeavesState(state, _leaves: Leaf[]) {
    state.leaves = _leaves;
  },
});
export const actions = actionTree(
  { state, getters, mutations },
  {
    async getTrees(state) {
      const trees = await (await this.$repositories.tree.getTrees()).data;
      state.commit('changeTreesState', trees);
    },
    async getLeaves(state, parent_branch_id) {
      const leaves = await (
        await this.$repositories.leaf.getLeaves(parent_branch_id)
      ).data;
      state.commit('changeLeavesState', leaves);
    },
    async createNewTree(state, newTree: NewTree) {
      let newTreeId = -1;
      try {
        const newTreeData = await (await this.$repositories.tree.createTree(newTree)).data as Tree;
        newTreeId = newTreeData.tree_id;
      } catch (e) {
        console.error(e);
      } finally {
        const newTrees = state.state.trees;
        state.commit('changeTreesState', newTrees);
      }
      return newTreeId;
    },
    async createNewLeaf(
      state,
      data: { newLeaf: NewLeaf; parent_branch_id: number }
    ) {
      const newLeaf = {
        ...data.newLeaf,
        rating: 0,
        parent_branch_id: data.parent_branch_id,
      } as NewLeaf;
      try {
        await this.$repositories.leaf.createLeaf(newLeaf);
      } catch (e) {
        console.error(e);
      }
    },
    async getLeafById(state, leafId: number) {
      return (await this.$repositories.leaf.getLeaf(leafId.toString())).data;
    },
    async getBranches(state, parent_tree_id) {
      const branches = await (
        await this.$repositories.branch.getBranches(parent_tree_id)
      ).data;
      state.commit('changeBranchesState', branches);
    },
    async editLeaf(state, leaf: Leaf) {
      return await (
        await this.$repositories.leaf.editLeaf(leaf)
      ).data;
    },
    async getTreeById(state, treeId: number) {
      return await (await this.$repositories.tree.getTree(treeId)).data
    },
    async createNewBranch(state, newBranchData: NewBranch) {
      await this.$repositories.branch.createBranch(newBranchData);
    }
  }
);

export const accessorType = getAccessorType({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
});
