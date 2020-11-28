type ImageSource = {
  webp?: string;
  fallback: string;
};

export interface PortfolioCell {
  title: string;
  tooltip: string;
  image: ImageSource;
  projectUrl: string;
  description?: string;
}

export interface ExperienceItem {
  timeFrame: string;
  company: string;
  location: string;
  jobTitle: string;
  description: string;
  image?: ImageSource;
}

export interface EducationItem {
  timeFrame: string;
  school: string;
  location: string;
  major: string;
  description: string;
  image?: ImageSource;
  gpa: string;
  courses: string[];
}

export interface AwardItem {
  timeFrame: string;
  event: string;
  location: string;
  award: string;
  description: string;
  image?: ImageSource;
  awardUrl?: string;
}
