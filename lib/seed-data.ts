import { Job } from '@/models/Job';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';

export const seedJobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: 'Senior',
    salary: '$130,000 - $180,000',
    description: `
We're looking for a Senior Frontend Developer to join our innovative team!

Key Responsibilities:
- Lead frontend development for our core products
- Mentor junior developers and conduct code reviews
- Contribute to architectural decisions and technical planning
- Implement responsive and accessible user interfaces
- Optimize application performance

Requirements:
- 5+ years of experience with React and TypeScript
- Strong understanding of modern frontend architecture
- Experience with Next.js and server-side rendering
- Knowledge of testing frameworks and CI/CD practices
- Excellent communication and leadership skills

Benefits:
- Competitive salary and equity
- Health, dental, and vision insurance
- Flexible PTO
- Remote work options
- Professional development budget
    `,
    techStack: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest'],
  },
  {
    title: 'Backend Engineer',
    company: 'CloudScale',
    location: 'Remote',
    type: 'Full-time',
    experience: 'Mid-Level',
    salary: '$120,000 - $160,000',
    description: `
Join our cloud infrastructure team as a Backend Engineer!

Key Responsibilities:
- Design and implement scalable microservices
- Develop RESTful APIs and background workers
- Optimize database performance and queries
- Implement security best practices
- Contribute to system architecture decisions

Requirements:
- 3+ years of experience with Node.js
- Strong knowledge of MongoDB and database design
- Experience with AWS services
- Understanding of microservices architecture
- Solid debugging and problem-solving skills

Benefits:
- Competitive salary
- Full remote work
- Health insurance
- 401(k) matching
- Learning and development stipend
    `,
    techStack: ['Node.js', 'MongoDB', 'AWS', 'Docker', 'Redis'],
  }
];

export const seedUsers = [
  {
    email: 'employer@example.com',
    password: await bcrypt.hash('password123', 10),
    name: 'John Doe',
    role: 'employer',
  },
  {
    email: 'jobseeker@example.com',
    password: await bcrypt.hash('password123', 10),
    name: 'Jane Smith',
    role: 'jobseeker',
  }
];