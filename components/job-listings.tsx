"use client";

import { useJobStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function JobListings() {
  const { jobs, savedJobs, toggleSaveJob } = useJobStore();

  // Temporary mock data
  const mockJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full Time",
      experience: "Senior",
      description: "We're looking for a senior frontend developer...",
      postedAt: new Date(2024, 2, 15),
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "StartupX",
      location: "Remote",
      type: "Contract",
      experience: "Intermediate",
      description: "Join our growing team as a backend engineer...",
      postedAt: new Date(2024, 2, 14),
    },
  ];

  return (
    <div className="space-y-4">
      {mockJobs.map((job) => (
        <Card key={job.id} className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-muted-foreground">{job.company}</p>
              
              <div className="mt-2 space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {job.type}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                  {job.experience}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {job.location}
                </span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {job.description}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Posted {formatDistanceToNow(job.postedAt)} ago
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleSaveJob(job.id)}
              className={savedJobs.includes(job.id) ? "text-primary" : ""}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-4 flex space-x-2">
            <Button>Apply Now</Button>
            <Button variant="outline">View Details</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}