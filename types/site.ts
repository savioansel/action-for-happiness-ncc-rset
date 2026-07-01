export type NavigationItem = {
  label: string;
  href: string;
};

export type Activity = {
  title: string;
  date: string;
  location: string;
  volunteers: string;
};

export type ImpactMetric = {
  value: number;
  suffix: string;
  label: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TimelineStep = {
  title: string;
  description: string;
};
