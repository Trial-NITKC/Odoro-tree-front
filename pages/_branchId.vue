<template>
  <v-row>
    <v-col>
      <div class="text-h2 text text-center"> ～～～～ </div>
      <div class="box">
        <div class="grid">
          <div v-for="i in (leave)" :key="i" class="leaf" :style="`animation-delay:${Math.random()*2+.1}s;`">
            <v-img :src="require('~/assets/Leaf_front.png')"></v-img>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { LeafType } from "~/domains/leaf/types";

export default Vue.extend({
  name: "",
  data() {
    return {
      leave: [...Array(Math.round(Math.random()*200))].map(() => ({ frontText: "frontText", backText: "backText" })) as LeafType[]
    };
  },
  methods: {}
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
  width: 150px;
  height: 150px;
  animation: 1s ease-in .1s infinite alternate hoyonhoyon-y, 1s ease-in .1s infinite alternate hoyonhoyon-x, 2s linear .1s infinite alternate kuru;
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
