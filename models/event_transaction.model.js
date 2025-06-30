const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true
  },

  actualPrice: {
    type: Number,
    required: true,
    default: 0
  },

  amountPaid: {
    type: Number,
    required: true,
    default: 0
  },

  currency: {
    type: String,
    default: "INR"
  },

  paymentMode: {
    type: String,
    enum: ["free", "razorpay", "stripe", "manual", "promo"],
    required: true
  },

  status: {
    type: String,
    enum: ["success", "failed", "pending"],
    default: "success"
  },

  couponCode: {
    type: String, // Optional: if a discount code was applied
    ref: "Event_Coupon"
},

  paymentGatewayTxnId: {
    type: String // Razorpay/Stripe transaction ID
  },

  enrolledAt: {
    type: Date,
    default: Date.now
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

}, {
  timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Transaction || connection.model(constant.collectionName.EVENT_TRANSACTION, eventTransactionSchema);
};
