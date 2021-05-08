<template>
  <v-card>
    <v-img
    src="../../../../card2.png"
    height=400
    width=600
    >
    </v-img>
    <v-card-title>
      RFID Cards
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-actions>
      <v-data-table :headers="headers" :items="MyCardsList">
      <v-toolbar>
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>
    </v-data-table>
    </v-card-actions>
    
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      MyCardsList: [],
      headers: [
        {
          text: "cardID",
          align: "right",
          filterable: false,
          value: "cardID",
        },
        // { text: "Transaction fare", value: "transaction_fare" },
        // { text: "Current balance", value: "new_balance" },
        // { text: "Transaction Type", value: "type" },
        { text: "Balance", value: "current_balance" },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      axios
        .get("http://localhost:4040/api/cards")
        .then((response) => {
          this.MyCardsList = response.data;
       // console.log(response.data);
        });
    }, 500);
  },
};
</script>
