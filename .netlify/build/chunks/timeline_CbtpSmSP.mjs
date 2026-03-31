import { _ as __vite_glob_0_0 } from './first-template-project_ByaXWXtf.mjs';

const timelineModules = /* #__PURE__ */ Object.assign({"../content/timeline/first-template-project.json": __vite_glob_0_0});
const timelineData = Object.entries(timelineModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  return { id, ...data };
});
const getTimelineStats = () => {
  const total = timelineData.length;
  const byType = {
    education: timelineData.filter((item) => item.type === "education").length,
    work: timelineData.filter((item) => item.type === "work").length,
    project: timelineData.filter((item) => item.type === "project").length,
    achievement: timelineData.filter((item) => item.type === "achievement").length
  };
  return { total, byType };
};
const getTimelineByType = (type) => {
  {
    return timelineData.sort(
      (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }
};
const getCurrentItems = () => {
  return timelineData.filter((item) => !item.endDate);
};
const getTotalWorkExperience = () => {
  const workItems = timelineData.filter((item) => item.type === "work");
  let totalMonths = 0;
  workItems.forEach((item) => {
    const startDate = new Date(item.startDate);
    const endDate = item.endDate ? new Date(item.endDate) : /* @__PURE__ */ new Date();
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1e3 * 60 * 60 * 24 * 30));
    totalMonths += diffMonths;
  });
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12
  };
};

export { getCurrentItems, getTimelineByType, getTimelineStats, getTotalWorkExperience, timelineData };
