const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventParticipantsSchema = new mongoose.Schema({
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: "Event"},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  
    enrolledAt: Date,
    enrolledBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    isPaid: Boolean,
    paymentId: {type: mongoose.Schema.Types.ObjectId, ref: "Payment"},
  
    status: {type: String, enum: ["enrolled", "started", "completed", "disqualified"], default: "enrolled"},
    teamId: {type: mongoose.Schema.Types.ObjectId, ref: "Team"},         
  
    score: Number,
    timeTaken: Number
}, {
    timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Participant || connection.model(constant.collectionName.EVENT_PARTICIPANT, eventParticipantsSchema);
};
