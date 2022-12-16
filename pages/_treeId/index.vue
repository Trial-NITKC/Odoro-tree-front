<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h2 text text-center">{{treeName}}の木</div>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="createDialog = true"
          >葉っぱをつける</v-btn
        >
        <v-dialog v-model="createDialog" persistent max-width="600">
          <CreateLeafCard @close="close" @createLeaf="createLeaf">
          </CreateLeafCard>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="box">
          <div class="grid">
            <div
              v-for="(element, index) in leaves"
              :key="index"
              :style="`animation-delay:${Math.random() * 2 + 0.1}s;`"
            >
              <v-btn
                tile
                elevation="0"
                text
                class="leaf px-auto no-hover-background"
                @click="toLeaf(element.leaf_id)"
              >
                <v-img
                  :src="
                    element.rating > 10
                      ? require('~/static/Leaf_y.png')
                      : require('~/static/Leaf_Front.png')
                  "
                  class="leaf"
                ></v-img>
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Leaf, NewLeaf } from '~/domains/leaf';

export default Vue.extend({
  data() {
    return {
      leaves: [] as Leaf[],
      treeId: this.$route.params.treeId,
      createDialog: false,
      treeName: ""
    };
  },
  head: {
    title: 'tree list',
  },
  async created() {
    await this.getLeaves();
    await this.$accessor.getTreeById(Number(this.treeId)).then((treeData) => this.treeName = treeData.name);
  },
  methods: {
    async getLeaves() {
      await this.$accessor.getLeaves(this.treeId);
      this.leaves = this.$accessor.leaves;
    },
    // eslint-disable-next-line camelcase
    toLeaf(leaf_id: number) {
      // eslint-disable-next-line camelcase
      this.$router.push(this.$route.path + '/' + leaf_id.toString());
    },
    async createLeaf(newLeaf: NewLeaf) {
      const data = {
        parent_branch_id: Number(this.treeId),
        newLeaf,
      };
      await this.$accessor.createNewLeaf(data);
      await this.getLeaves();
    },
    close() {
      this.createDialog = false;
    },
  },
});
</script>

<style scoped>
.grid {
  overflow-y: auto;
  place-items: center;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-auto-flow: row dense;
  justify-content: space-around;
  padding: 20px;
}

.box {
  position: relative;
  height: 75vh;
  border: 5px #000 solid;
  border-radius: 50px;
}

.leaf {
  color: white;
  width: 150px !important;
  height: 150px !important;
  animation: 1s ease-in 0.1s infinite alternate hoyonhoyon-y,
    1s ease-in 0.1s infinite alternate hoyonhoyon-x,
    2s linear 0.1s infinite alternate kuru;
}

.leaf:hover {
  color: gainsboro;
}

@keyframes kuru {
  from {
    transform: rotate(-5deg);
  }

  to {
    transform: rotate(5deg);
  }
}

@keyframes hoyonhoyon-x {
  from {
    margin-left: 20px;
  }

  to {
    margin-left: 0;
  }
}

@keyframes hoyonhoyon-y {
  from {
    margin-top: 20px;
  }

  to {
    margin-top: 0;
  }
}
</style>
