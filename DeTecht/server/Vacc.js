const mongoose = require('mongoose');
const VaccSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Date1: {
        type: String,
        required: true,
    },
    Vacc1: {
        type: String,
        required: true,
    },
    Date2: {
        type: String,
        required: true,
    },
    Vacc2: {
        type: String,
        required: true,
    }
}
)


mongoose.model("vacc", VaccSchema)