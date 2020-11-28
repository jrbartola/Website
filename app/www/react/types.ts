export interface PortfolioCell {
  title: string;
  tooltip: string;
  imageUrl: string;
  projectUrl: string;
  description?: string;
}

export interface ExperienceItem {
  timeFrame: string;
  company: string;
  location: string;
  jobTitle: string;
  description: string;
  imageUrl?: string;
}

export interface EducationItem {
  timeFrame: string;
  school: string;
  location: string;
  major: string;
  description: string;
  imageUrl?: string;
  gpa: string;
  courses: string[];
}

export interface AwardItem {
  timeFrame: string;
  event: string;
  location: string;
  award: string;
  description: string;
  imageUrl?: string;
  awardUrl?: string;
}
