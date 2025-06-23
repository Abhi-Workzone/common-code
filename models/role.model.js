// models/role.model.js
const mongoose = require('mongoose');
const constant = require('../utils/constant');

const rolePermissionSchema = new mongoose.Schema(
  {
    module: { type: String, required: true },            // must match a permission module
    actions: [{ type: String, required: true }]          // action keys (not labels)
  },
  { _id: false }
);

const roleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },    // e.g., "admin"
    displayName: { type: String, required: true },           // e.g., "Admin"
    description: { type: String },
    permissions: { type: [rolePermissionSchema], default: [] }
  },
  { timestamps: true }
);

module.exports = (connection) => {
    return connection.models.Role || connection.model(constant.collectionName.ROLE, roleSchema);
};
