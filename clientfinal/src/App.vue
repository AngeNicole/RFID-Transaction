<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">RFID</div>

      <v-spacer></v-spacer>

      <router-link to="/mycards"></router-link>

      <router-link to="/transaction">
        <span>
          <v-btn text> Transaction </v-btn>
          <!--  <v-icon>mdi-open-in-new</v-icon> -->
        </span>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style lang="#">
</style>