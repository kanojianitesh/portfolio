export interface Course {
  id: number;
  code: string;
  name: string;
  institution: string;
  role: string;
}

export const courses: Course[] = [
  {
    id: 1,
    code: "BBL131",
    name: "Principles of Biochemistry",
    institution: "IIT Delhi",
    role: "Teaching Assistant",
  },
  {
    id: 2,
    code: "BBL757",
    name: "Electromicrobiology and Bioelectrochemical Systems",
    institution: "IIT Delhi",
    role: "Teaching Assistant",
  },
];
