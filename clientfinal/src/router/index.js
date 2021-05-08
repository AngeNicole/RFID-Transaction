import Vue from "vue";
import VueRouter from "vue-router";
import Transaction from "../views/Transaction";
import MyCards from "../views/Mycards";
import AllTransactions from "../views/DetailedTransactions";
import Home from "../views/Home";


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
        path: "/transactions",
        name: "transaction",
        component: Transaction,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },

];

const router = new VueRouter({
    routes,
});

export default router;