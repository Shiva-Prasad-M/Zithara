import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'accepted', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Ensure one application per job per user
ApplicationSchema.index({ jobId: 1, applicantId: 1 }, { unique: true });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);