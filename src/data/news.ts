export interface NewsItem {
  id: number;
  date: string;
  content: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    date: "2025",
    content:
      "Paper published in Bioelectrochemistry on Shewanella vesicular nanowire structure.",
    link: "https://doi.org/10.1016/j.bioelechem.2025.109039",
  },
  {
    id: 2,
    date: "2023",
    content:
      "Received FEMS Travel Grant to attend Electromicrobiology-23 at Aarhus University, Denmark.",
  },
  {
    id: 3,
    date: "2023",
    content:
      "Presented poster at EM-23 conference and attended ECS workshop at Ronbjerg, Denmark.",
  },
];
