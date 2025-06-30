const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventParticipantsSchema = new mongoose.Schema({
    eventId: {type: mongoose.Schema.Types.ObjectId, ref: "Event"},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  
    enrolledAt: {type: Date, default: Date.now},
    isPaid: {type: Boolean, default: false},
    paymentId: {type: mongoose.Schema.Types.ObjectId, ref: "Event_Transaction"},
  
    status: {type: String, enum: ["enrolled", "started", "completed", "disqualified"], default: "enrolled"},
    teamId: {type: mongoose.Schema.Types.ObjectId, ref: "Team"},         
  
    score: Number,
    timeTaken: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Participant || connection.model(constant.collectionName.EVENT_PARTICIPANT, eventParticipantsSchema);
};
