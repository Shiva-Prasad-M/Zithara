"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilters() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="space-y-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Location..."
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger className="w-full">
            <Briefcase className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full Time</SelectItem>
            <SelectItem value="part-time">Part Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>

        <Select value={experience} onValueChange={setExperience}>
          <SelectTrigger className="w-full">
            <GraduationCap className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
            <SelectItem value="lead">Lead</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full md:w-auto">
        Search Jobs
      </Button>
    </div>
  );
}