export interface Conference {
  id: number;
  title: string;
  event: string;
  location: string;
  type: "workshop" | "poster" | "talk";
}

export const conferences: Conference[] = [
  {
    id: 1,
    title:
      "EM-23 Early Career Scientist (ECS) Workshop",
    event:
      "Center for Electromicrobiology (CEM), Aarhus University",
    location: "Marine Biological Station, Ronbjerg, Denmark",
    type: "workshop",
  },
  {
    id: 2,
    title: "Poster presentation of PhD work at Electromicrobiology-23 (EM-23)",
    event:
      "Center for Electromicrobiology (CEM), Aarhus University",
    location: "Aarhus, Denmark",
    type: "poster",
  },
  {
    id: 3,
    title:
      'Poster presentation at "Microbial Odyssey: Converging Biotechnology and Industry"',
    event: "DMBC, MSU Baroda",
    location: "Vadodara, India",
    type: "poster",
  },
];
