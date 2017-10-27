const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipients');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dateSent: Date,
  lastResponded: Date,
  timestamps: true
});

mongoose.model('Survey', surveySchema);
