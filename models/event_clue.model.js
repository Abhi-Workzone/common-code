const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventClueSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },

  title: { type: String, required: true },
  description: { type: String },

  type: {
    type: String,
    enum: ["text", "multiple-choice", "upload", "qr", "location"],
    default: "text"
  },

  order: { type: Number, required: true, default: 0 }, // Position in the hunt

  gpsLocation: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number], // [lng, lat]
      default: undefined
    }
  },

  questionMedia: {
    image: [String],
    video: [String],
    audio: [String]
  },

  options: [String], // For multiple-choice
  correctAnswer: mongoose.Schema.Types.Mixed, 
  // Can be: string, array, QR string, etc.

  hint: {
    type: String
  },

  needsReview: {
    type: Boolean,
    default: false
  },

  timeLimit: {
    type: Number,
    default: 0 // in seconds
  },

  score: {
    type: Number,
    default: 0
  },

  isActive: {
    type: Boolean,
    default: false
  },
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
    return connection.models.Event_Clue || connection.model(constant.collectionName.EVENT_CLUE, eventClueSchema);
};
