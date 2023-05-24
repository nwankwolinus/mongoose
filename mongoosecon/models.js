const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;