export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Ph.D.",
    field: "Electromicrobiology",
    institution: "University of Queensland – IIT Delhi Research Academy",
    location: "New Delhi, India / Brisbane, Australia",
    period: "2020 – Present",
    gpa: "8.6/10",
  },
  {
    id: 2,
    degree: "M.Sc.",
    field: "Microbiology",
    institution: "The Maharaja Sayajirao University of Baroda (MSU Baroda)",
    location: "Vadodara, India",
    period: "2017 – 2019",
    gpa: "6.87/10",
  },
  {
    id: 3,
    degree: "B.Sc.",
    field: "Microbiology",
    institution:
      "Kishinchand Chellaram College, University of Mumbai",
    location: "Mumbai, India",
    period: "2014 – 2017",
    gpa: "6.94/7",
  },
];
