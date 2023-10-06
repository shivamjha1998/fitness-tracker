const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    unique: true
  },
  steps: {
    type: Number,
    default: 0
  },
  workouts: [{
    type: String
  }],
  calories: {
    type: Number,
    default: 0
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('User', UserSchema);
