const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({
    cardID: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: String,
        required: false,
    },
});
module.exports = mongoose.model("Card", CardSchema);