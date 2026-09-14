import "server-only";

export type Project = {
  slug: string;
  title: string;
  year: number;
  summary: string;
  filePath: string;
};

const PROJECTS: Project[] = [
  {
    slug: "kawaii-count",
    title: "Kawaii Count",
    year: 2025,
    summary:
      "A restaurant inventory system that saves information of each food and records the amount sold and overall revenue.",
    filePath: "public/kawaii-count.png",
  },
  {
    slug: "css-gallery",
    title: "CSS Gallery",
    year: 2025,
    summary:
      "One of my first projects, it is a simple gallery featuring my favorite characters from the game Zenless Zone Zero (ZZZ).",
    filePath: "public/css-gallery.png",
  },
  {
    slug: "horse-racing-2d",
    title: "Horse Racing 2d",
    year: 2026,
    summary: "An oversimplified 2d horse racing game made just for fun.",
    filePath: "public/horse-racing-2d.png",
  },
  {
    slug: "yaw8",
    title: "Ya!W8",
    year: 2026,
    summary:
      "A Y8-esque website that allows aspiring game developers in iACADEMY to showcase their games for the other students to play while also allowing them to collaborate with each other.",
    filePath: "baho-tae",
  },
];

export const getProjects = async () => PROJECTS;
export const getProject = async (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
