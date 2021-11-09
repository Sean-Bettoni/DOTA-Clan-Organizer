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
      type: Number,
      required: true
    }
  }
);

const SessionCard = model('SessionCard', SessionCardSchema);

module.exports = SessionCard;
