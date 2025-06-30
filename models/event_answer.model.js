const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventAnswerSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },
  clueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clue",
    required: true
  },

  // Submitted by:
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventTeam"
  },

  submittedAt: {
    type: Date,
    default: Date.now
  },

  answerType: {
    type: String,
    enum: ["text", "multiple-choice", "upload", "qr"],
    required: true
  },

  answerContent: mongoose.Schema.Types.Mixed, // Can be string, array, file URL, qrCode, etc.

  score: {
    type: Number,
    default: 0
  },

  logs: [{
    msg: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }],

  isCorrect: {
    type: Boolean,
    default: false
  },

  reviewStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  feedback: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Answer || connection.model(constant.collectionName.EVENT_ANSWER, eventAnswerSchema);
};
