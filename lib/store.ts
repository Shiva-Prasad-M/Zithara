import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  postedAt: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'employer' | 'jobseeker';
}

interface JobStore {
  jobs: Job[];
  savedJobs: string[];
  user: User | null;
  setJobs: (jobs: Job[]) => void;
  addJob: (job: Job) => void;
  removeJob: (id: string) => void;
  toggleSaveJob: (jobId: string) => void;
  setUser: (user: User | null) => void;
}

export const useJobStore = create<JobStore>()(
  persist(
    (set) => ({
      jobs: [],
      savedJobs: [],
      user: null,
      setJobs: (jobs) => set({ jobs }),
      addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
      removeJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),
      toggleSaveJob: (jobId) =>
        set((state) => ({
          savedJobs: state.savedJobs.includes(jobId)
            ? state.savedJobs.filter((id) => id !== jobId)
            : [...state.savedJobs, jobId],
        })),
      setUser: (user) => set({ user }),
    }),
    {
      name: 'job-store',
    }
  )
);