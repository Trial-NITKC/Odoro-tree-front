<template>
  <v-card tile elevation="0" style="background-color: rgb(0 0 0 / 0%)">
    <div
      :class="isFlipped ? 'flip-container flipped' : 'flip-container'"
      @click="isFlipped = !isFlipped"
    >
      <div class="flipper">
        <div class="front">
          <v-img class="content" :src="require('~/static/Leaf_Front.png')">
            <p style="margin: auto 20% auto auto" v-text="frontContent"></p>
          </v-img>
        </div>
        <div class="back">
          <v-img class="content" :src="require('~/static/Leaf_Back.png')">
            <p style="margin: auto 0 auto 20%" v-text="backContent"></p>
          </v-img>
        </div>
      </div>
    </div>
    <v-card-actions>
      <v-row>
        <v-spacer></v-spacer>
        <OdorokiButton
          v-if="isShowButton"
          :leaf="leaf"
          @clickBtn="upLeaf"
        ></OdorokiButton>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import OdorokiButton from './OdorokiButton.vue';
import { Leaf } from '~/domains/leaf';

export default Vue.extend({
  components: { OdorokiButton },
  props: {
    leaf: {
      type: Object as PropType<Leaf>,
      default: (): Leaf => ({} as Leaf),
    },
    isShowButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  computed: {
    frontContent(): string {
      return this.leaf.front_content?.replace('¥n', '<br>');
    },
    backContent(): string {
      return this.leaf.back_content?.replace('¥n', '<br>');
    },
  },
  methods: {
    async upLeaf(leaf: Leaf) {
      const data = {
        ...leaf,
        rating: leaf.rating + 1,
      };
      await this.$accessor.editLeaf(data);
      await this.$emit('refresh', data);
    },
  },
});
</script>

<style lang="scss" scoped>
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
  text-align: center;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: auto;
}
.content p {
  white-space: pre-line;
  overflow-wrap: break-word;
  width: 50%;
  margin: auto;
}
// .back .content p {
//     position: absolute;
//     text-align: left;
//     left: 20vw;
// }
</style>
