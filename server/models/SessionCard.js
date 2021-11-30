// Session card completed

const { Schema, model } = require('mongoose');

const SessionCardSchema = new Schema(
  {
    gameType: {
      type: String,
      required: true,
    },
    requiredRoles: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true
    }
  }
);

const SessionCard = model('SessionCard', SessionCardSchema);

module.exports = SessionCard;