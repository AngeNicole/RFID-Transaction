const {
    AllCards,
    newCard,
    checkCard,
    getAllTransactions,
    getRFIDTransactions,
    newTransaction,
} = require("../controller/index");
const express = require("express");
const Router = express.Router();

Router.get("/cards", AllCards);
Router.post("/cards", newCard);
// Router.get("/cards/:uuid", checkCard);
Router.get("/transactions", getAllTransactions);
Router.get("/transactions/:uuid", getRFIDTransactions);
Router.post("/transactions", newTransaction);
module.exports = Router;