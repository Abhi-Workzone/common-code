const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventCouponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },

  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: false
  },

  type: {
    type: String,
    enum: ["percent", "amount"],
    default: "amount"
  },

  value: {
    type: Number, // e.g. ₹100 or 20%
    required: true
  },

  minEntryFee: {
    type: Number,
    default: 0
  },

  maxUseCount: Number,        // Global limit
  usedCount: {
    type: Number,
    default: 0
  },

  allowedEmails: [String],    // Optional: only certain users
  expiryDate: Date,

  isActive: {
    type: Boolean,
    default: true
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
    return connection.models.Event_Coupon || connection.model(constant.collectionName.EVENT_COUPON, eventCouponSchema);
};
