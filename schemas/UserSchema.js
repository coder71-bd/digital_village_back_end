const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: ['married', 'unmarried'],
    },
    employmentStatus: {
      type: String,
      enum: ['employed', 'unemployed'],
    },
    phone: String,
    yearlyIncome: Number,
    religion: {
      type: String,
      enum: ['Islam', 'Christianity', 'Hinduism', 'Buddhism', 'others'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
    },
    about: String,
    occupation: String,
    roles: Object,
    imageInfo: {
      type: {
        url: String,
        public_id: String,
      },
      default: {
        url: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        public_id: '',
      },
    },
    refreshToken: String,
    requested: Array,
    requesting: Array,
    connection: Array,
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', userSchema);
