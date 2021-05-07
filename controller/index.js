const Card = require("../model/index");

exports.getAllTransactions = async(req, res) => {
    const transactions = await Transactions.find({});
    return res.send(transactions).status(200);
};
module.exports.AllCards = async(req, res) => {
    try {
        const cards = await Card.find();
        if (!cards) {
            return res.send({ message: "No cards found" }).status(404);
        }
        return res.send(cards);
    } catch (e) {
        return res.send(e.message);
    }
};
exports.checkCard = async(req, res) => {
    const card = await Card.find({ uuid: req.params.uuid });
    if (card) {
        return res.send({ card, success: true });
    }
    return res.send({ success: false });
};
exports.getRFIDTransactions = async(req, res) => {
    const transactions = await Transactions.find({ card_id: req.params.uuid });
    return res.send(transactions).status(200);
};
exports.newTransaction = async(req, res) => {
    const rfid = await Card.findOne({ uuid: req.body.rfid });
    if (!rfid) {
        return res.status(404).send({ message: "RFID not found" });
    }
    if (!req.body.transaction_fare) {
        return res.status(400).send({ message: "Transaction fare required" });
    }
    if (rfid.current_balance < req.body.transaction_fare) {
        return res
            .status(400)
            .send({ message: "Transaction fare is greater that card amount" });
    }
    rfid.current_balance =
        rfid.current_balance - parseInt(req.body.transaction_fare);
    const updated = await rfid.save();
    const transaction = new Transactions({
        card_id: updated.uuid,
        transaction_fare: parseInt(req.body.transaction_fare),
        new_balance: updated.current_balance,
    });

    const saved = await transaction.save();

    return res.status(200).send({ saved });
};

module.exports.newCard = async(req, res) => {
    console.log(req.body);
    try {
        const no_card = await Card.findOne({ cardID: req.body.cardID });
        if (no_card) {
            return res
                .send({ message: "RFID already exists, can not be duplicated" })
                .status(400);
        }
        if (!req.body.cardID) {
            return res.send({ message: "RFID UUID required" }).status(400);
        }
        const card = await Card.create({
            cardID: req.body.cardID,
            balance: parseInt(req.body.balance || 0),
        });

        if (card) {
            return res.send(card).status(200);
        } else return res.send("error").status(200);
    } catch (e) {
        return res.send(e.message);
    }
};