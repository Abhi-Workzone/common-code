// models/permission.model.js
const mongoose = require('mongoose');
const constant = require('../utils/constant');

const permissionSchema = new mongoose.Schema(
  {
    module: { type: String, required: true, unique: true },     // e.g., "user", "event"
    displayName: { type: String, required: true },              // e.g., "User Management"
    actions: { type: [String], default: [] }              // actions with key+label
  },
  { timestamps: true }
);

module.exports = (connection) => {
    return connection.models.Permission || connection.model(constant.collectionName.PERMISSION, permissionSchema);
};
