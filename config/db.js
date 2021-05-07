const mongoose = require("mongoose");
const connect = async() => {
    console.log(process.env.DB_URL);
    try {
        const connection = new mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Connection ok");
    } catch (err) {
        console.log(
            "Could not connect to the database. Exiting now...",
            err.message
        );
        console.log(process.env.DB_URL);
        process.exit();
    }
};

connect();