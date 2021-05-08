<template>
  <v-card :style="{ marign: 20 }">
    <v-card-title>
      RFID Transaction Details

      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table :headers="headers" :items="AllTransactions">
      <v-toolbar>
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      AllTransactions: [],
      headers: [
        {
          text: "cardID",
          align: "start",
          filterable: false,
          value: "cardID",
        },
        { text: "Transaction fare", value: "transaction_fare" },
        { text: "Transaction Type", value: "type" },
        { text: "New balance", value: "new_balance" },
        { text: "Time", value: "updatedAt" },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      axios
        .get("http://localhost:4040/api/transactions/:uuid")
        .then((response) => {
          this.AllTransactions = response.data;
       // console.log(response.data);
        });
    }, 500);
  },
};
</script>



