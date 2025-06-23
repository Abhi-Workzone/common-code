// models/permission.model.js
const mongoose = require('mongoose');
const constant = require('../utils/constant');

const actionSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },     // e.g., "create", "update"
    label: { type: String, required: true }    // e.g., "Create User"
  },
  { _id: false } // Don't auto-create _id for each action
);

const permissionSchema = new mongoose.Schema(
  {
    module: { type: String, required: true, unique: true },     // e.g., "user", "event"
    displayName: { type: String, required: true },              // e.g., "User Management"
    actions: { type: [actionSchema], default: [] }              // actions with key+label
  },
  { timestamps: true }
);

module.exports = (connection) => {
    return connection.models.Permission || connection.model(constant.collectionName.PERMISSION, permissionSchema);
};
