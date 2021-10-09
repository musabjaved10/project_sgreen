import mongoose from "mongoose";

const {Schema} = mongoose


const eventSchema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'Attendee'
    }],
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['type1', 'type2', 'type3'],
        required: true,

    },
    date: {
        type: Date,
        required: true
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Event',eventSchema);


