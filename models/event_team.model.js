const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventTeamSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },

  teamName: {
    type: String,
    required: true
  },

  teamCode: {
    type: String,
    unique: true,
    required: true
  },

  leaderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  memberIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  invitedEmails: [String], // Optional: for invite-only teams
  status: {
    type: String,
    enum: ["active", "disqualified", "left", "deleted"],
    default: "active"
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Team || connection.model(constant.collectionName.EVENT_TEAM, eventTeamSchema);
};
