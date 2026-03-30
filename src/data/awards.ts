export interface Award {
  id: number;
  title: string;
  organization: string;
  detail?: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "FEMS Travel Grant",
    organization: "Electromicrobiology-23 Conference, Aarhus University, Denmark",
  },
  {
    id: 2,
    title: "ANSTO Beamtime Grant (AUD 98,352 each, twice)",
    organization: "Australian Synchrotron XFM Beamline",
  },
  {
    id: 3,
    title: "UQ Research Training Tuition Fee & Stipend Scholarship",
    organization: "University of Queensland",
  },
  {
    id: 4,
    title: "All-India Rank 219 (98.7 Percentile), GATE 2019",
    organization: "Graduate Aptitude Test in Engineering",
  },
  {
    id: 5,
    title: "Jigyaasa Science Honors (A+ Grade)",
    organization: "Microbiology Group Research",
  },
];
