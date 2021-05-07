const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
    cardID: {
        type: String,
        required: true,
    },
    current_balance: {
        type: Number,
        required: false,
    },
});

const TransactionSchema = new mongoose.Schema({
    cardID: {
        type: String,
        required: true,
    },
    new_balance: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: true
    },
    transaction_fare: {
        type: Number,
        required: false,
    },
}, {
    timestamps: true,
});
module.exports.Card = mongoose.model("NicoCard", CardSchema);
module.exports.Transactions = mongoose.model(
    "NicoTransaction",
    TransactionSchema
);