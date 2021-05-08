<template>
  <v-app>
    <v-app-bar app color="#6C63FF" font="Nunito">

      <router-link to="/home">
      <span>
          <v-btn text color="#fff" x-large="true" rounded="true"> RFID </v-btn>
        </span>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/transactions/:uuid">
      <span>
          <v-btn text color="#fff"> Detailed Transactions </v-btn>
        </span>
      </router-link>

      <router-link to="/cards">
      <span>
          <v-btn text color="#fff"> All Cards </v-btn>
        </span>
      </router-link>

      <router-link to="/transactions">
        <span>
          <v-btn text color="#fff"> Transaction </v-btn>
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