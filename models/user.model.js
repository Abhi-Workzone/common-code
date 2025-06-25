const mongoose = require('mongoose');
const constant = require('../utils/constant');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Role' }],
    status: { type: Boolean, required: true, default: true },
    isDeleted: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
);

module.exports = (connection) => {
  return connection.models.User || connection.model(constant.collectionName.USER, userSchema);
};
