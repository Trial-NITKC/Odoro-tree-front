<template>
  <v-card>
    <v-card-title>
      葉っぱを作る
    </v-card-title>

    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="frontText"
          :rules="rules"
          label="おもて"
        >
        </v-text-field>
        <v-text-field
          v-model="backText"
          :rules="rules"
          label="うら"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
        @click="close"
      >
        閉じる
      </v-btn>
      <v-btn
        color="primary"
        class="mr-4"
        @click="submit"
      >
        作成
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { LeafType } from "~/domains/leaf/types";

export default Vue.extend({
  name: "CreateLeafCard",
  data() {
    return {
      // dialog:false,
      frontText: "",
      backText: "",
      rules: [
        (value: string) => !!value || "必須項目です"
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },

    submit() {
      if ((this.$refs.form as HTMLFormElement).validate()) {
        const leaf = {
          frontText: this.frontText,
          backText: this.backText
        } as LeafType;
        this.$emit("createLeaf", leaf);
        this.close();
      }
    }
  }
})
;
</script>

