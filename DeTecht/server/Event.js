const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
})


mongoose.model("event", EventSchema)