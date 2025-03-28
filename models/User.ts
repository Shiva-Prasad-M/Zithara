import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  role: {
    type: String,
    enum: ['employer', 'jobseeker'],
    required: [true, 'Please specify a role'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);