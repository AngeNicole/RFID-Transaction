import Vue from "vue";
import VueRouter from "vue-router";
import Transaction from "../views/Transaction";
import MyCards from "../views/Mycards";
import AllTransactions from "../views/DetailedTransactions";


Vue.use(VueRouter);

const routes = [{
        path: "/transactions/:uuid",
        name: "AllTransactions",
        component: AllTransactions,
    },
    {
        path: "/cards",
        name: "MyCards",
        component: MyCards
    },
    {
        path: "/transaction",
        name: "transaction",
        component: Transaction,
    },

];

const router = new VueRouter({
    routes,
});

export default router;