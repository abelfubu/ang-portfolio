export interface ExperienceData {
  title: string;
  jobs: Job[];
}

export interface Job {
  company: string;
  title: string;
  date: string;
  description: string[];
}
