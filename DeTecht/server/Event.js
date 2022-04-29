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
    Date: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    invited: [{
        type: String
    }],
    attending: [{
        type: String,
        unique: true,
    }]
})


mongoose.model("event", EventSchema)