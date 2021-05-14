<template>
    <div id="app">
  <v-container>
    <v-layout row class="blue text-xs-center">
      <v-flex xs3 class="black text-xs-center">
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field name="Username" label="Username"></v-text-field>
            <v-text-field name="Password" label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block>Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>