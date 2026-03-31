import { _ as __vite_glob_0_0 } from './astro_vpSVaPzA.mjs';
import { _ as __vite_glob_0_1 } from './git_BZcnfsJY.mjs';
import { _ as __vite_glob_0_2 } from './svelte_CzcVzp6p.mjs';
import { _ as __vite_glob_0_3 } from './tailwindcss_Bx_akGXp.mjs';

const skillModules = /* #__PURE__ */ Object.assign({"../content/skills/astro.json": __vite_glob_0_0,"../content/skills/git.json": __vite_glob_0_1,"../content/skills/svelte.json": __vite_glob_0_2,"../content/skills/tailwindcss.json": __vite_glob_0_3});
const skillsData = Object.entries(skillModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  return { id, ...data };
});
const getSkillStats = () => {
  const total = skillsData.length;
  const byLevel = {
    beginner: skillsData.filter((s) => s.level === "beginner").length,
    intermediate: skillsData.filter((s) => s.level === "intermediate").length,
    advanced: skillsData.filter((s) => s.level === "advanced").length,
    expert: skillsData.filter((s) => s.level === "expert").length
  };
  const byCategory = {
    ai: skillsData.filter((s) => s.category === "ai").length,
    backend: skillsData.filter((s) => s.category === "backend").length,
    client: skillsData.filter((s) => s.category === "client").length,
    frontend: skillsData.filter((s) => s.category === "frontend").length,
    database: skillsData.filter((s) => s.category === "database").length,
    tools: skillsData.filter((s) => s.category === "tools").length,
    engines: skillsData.filter((s) => s.category === "engines").length,
    others: skillsData.filter((s) => s.category === "others").length
  };
  return { total, byLevel, byCategory };
};
const getSkillsByCategory = (category) => {
  if (!category || category === "all") {
    return skillsData;
  }
  return skillsData.filter((s) => s.category === category);
};
const getAdvancedSkills = () => {
  return skillsData.filter(
    (s) => s.level === "advanced" || s.level === "expert"
  );
};
const getTotalExperience = () => {
  const totalMonths = skillsData.reduce((total, skill) => {
    return total + skill.experience.years * 12 + skill.experience.months;
  }, 0);
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12
  };
};

export { getAdvancedSkills, getSkillStats, getSkillsByCategory, getTotalExperience, skillsData };
