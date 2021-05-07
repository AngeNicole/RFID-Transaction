const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
var http = require("http");
const fs = require("fs");
const cardRoutes = require("./router/index");

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(bodyParser.json());

require("./config/db");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to transactions" });
});

app.use("/api", cardRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Node js server running on port ${PORT}`));



//app.post('/', (req, res) => {
//     const uuid = req.body.cardID;
//     const new_balance = req.body.balance;
//     console.log(`POST request: uuid is ${uuid} and balance is ${new_balance}`);

// });