import mongoose from "mongoose";

const {Schema} = mongoose


const attendeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,

    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Attendee',attendeeSchema);

