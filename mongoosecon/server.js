const express = require("express");
const mongoose = require("mongoose")
const Router = require("./routes")

const app = express();
app.use(express.json());

const username = "nwankwolinus9"
const password = "Homeboy2023"
const clusterName = "cluster0.euv94nr"
const databaseName = "contact"

mongoose.connect(`mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed: "));
db.once("open", function () {
    console.log("Connected to the database successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("server started on port 3000")
});
