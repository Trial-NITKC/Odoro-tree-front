<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col>
        <v-card tile elevation="0">
          <v-card-title class="justify-start">
            <div>
              <h1 style="text-align: left; line-height: 4rem">
                新しい<span
                  style="
                    text-decoration: line-through;
                    text-decoration-thickness: 20%;
                  "
                  >驚き</span
                ><span style="color: orangered">おどろ木</span><br />
                見つけませんか？<br />
                共有しませんか？
              </h1>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="py-15">
      <v-col>
        <v-card tile elevation="0">
          <v-card-title class="justify-end">
            <div>
              <h1 style="text-align: left; line-height: 4rem">
                あなたの知らない世界を<br />
                いつでも、どこでも。
              </h1>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-card tile elevation="0">
          <v-card-title class="justify-center">
            <div>
              <v-btn x-large text to="/tree"><h1>早速見つけてみる→</h1></v-btn>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
