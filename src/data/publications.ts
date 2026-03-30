export interface Publication {
  id: number;
  authors: string;
  year: string;
  title: string;
  journal?: string;
  doi?: string;
  status: "published" | "in-preparation";
}

export const publications: Publication[] = [
  {
    id: 1,
    authors:
      "Kanojia, N., Poitras, J., Jones, T., Virdis, B., Southam, G., Doyle, L.",
    year: "2025",
    title:
      "Resolving Shewanella vesicular nanowire structure during microbial extracellular electron transfer to a poised electrode",
    journal: "Bioelectrochemistry",
    doi: "https://doi.org/10.1016/j.bioelechem.2025.109039",
    status: "published",
  },
  {
    id: 2,
    authors: "Kanojia, N., Mudaliar, N., Shaikh, K., & Rathod, D. S.",
    year: "2019",
    title:
      "Detection of drug-resistant organisms from natural water bodies",
    journal:
      "Research Journal of Life Sciences, Bioinformatics, Pharmaceutical and Chemical Sciences",
    doi: "https://doi.org/10.26479/2019.0502.71",
    status: "published",
  },
  {
    id: 3,
    authors: "Kanojia, N. et al.",
    year: "",
    title:
      "To Cu or not to Cu – Shewanella mediated reduction of cupric ions in a three-electrode bioelectrochemical cell",
    status: "in-preparation",
  },
  {
    id: 4,
    authors: "Kanojia, N. et al.",
    year: "",
    title:
      "Harnessing the three-electrode bioelectrochemical system for stress condition determination in electroactive bacteria",
    status: "in-preparation",
  },
];
