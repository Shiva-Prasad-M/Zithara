import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a job title'],
  },
  company: {
    type: String,
    required: [true, 'Please provide a company name'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  type: {
    type: String,
    required: [true, 'Please provide a job type'],
  },
  experience: {
    type: String,
    required: [true, 'Please provide experience level'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a job description'],
  },
  employerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);