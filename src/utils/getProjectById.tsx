import projects from "../../data/projects.json";

export async function getProjectById(id: string) {
  return projects.find((project) => project.id === id) || null;
}