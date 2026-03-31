import { _ as __vite_glob_0_0 } from './intro_BzFM1dNg.mjs';

const projectModules = /* #__PURE__ */ Object.assign({"../content/projects/Twilight/intro.json": __vite_glob_0_0});
const projectsData = Object.entries(projectModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  const basePath = path.replace("../", "").replace(/\/[^/]+$/, "");
  const project = {
    id,
    ...data,
    demoUrl: data.demoUrl ?? data.liveDemo,
    sourceUrl: data.sourceUrl ?? data.sourceCode,
    basePath
  };
  return project;
});
const getProjectStats = () => {
  const total = projectsData.length;
  const completed = projectsData.filter((p) => p.status === "completed").length;
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress"
  ).length;
  const planned = projectsData.filter((p) => p.status === "planned").length;
  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned
    }
  };
};
const getProjectsByCategory = (category) => {
  if (!category || category === "all") {
    return projectsData;
  }
  return projectsData.filter((p) => p.category === category);
};
const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured);
};
const getAllTechStack = () => {
  const techSet = /* @__PURE__ */ new Set();
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

export { getAllTechStack, getFeaturedProjects, getProjectStats, getProjectsByCategory, projectsData };
