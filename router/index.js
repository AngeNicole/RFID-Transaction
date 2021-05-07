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
Router.get("/cards/:uuid", checkCard);
Router.post("/api/cards", newCard);
Router.get("/api/transactions", getAllTransactions);
Router.get("/api/transactions/:uuid", getRFIDTransactions)
Router.post("/api/transactions", newTransaction)


module.exports = Router;