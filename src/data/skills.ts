export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Electrochemical Techniques",
    items: ["Chronoamperometry", "Cyclic Voltammetry", "Chronocoulometry"],
  },
  {
    name: "Imaging & Spectroscopy",
    items: [
      "Scanning Electron Microscopy",
      "Transmission Electron Microscopy",
      "Energy Dispersive Spectroscopy",
    ],
  },
  {
    name: "Biochemical & Molecular Biology",
    items: [
      "Aseptic Handling",
      "Cell Culture",
      "Plasmid Handling",
      "Protein Analysis",
    ],
  },
  {
    name: "Analysis Tools",
    items: ["GraphPad Prism", "ImageJ/FIJI", "Inkscape"],
  },
];
