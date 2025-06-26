const mongoose = require("mongoose");
const constant = require("../utils/constant");

const eventOrganizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    domain: String,                    // e.g., "@tcs.com"
    logo: String,
    hrContact: {
      name: String,
      email: String,
      phone: String
    },
    employees: [{
      name: String,
      email: String,
      employeeId: String
    }],                                // Optional - used for private events
  
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

module.exports = (connection) => {
    return connection.models.Event_Organization || connection.model(constant.collectionName.EVENT_ORGANIZATION, eventOrganizationSchema);
};