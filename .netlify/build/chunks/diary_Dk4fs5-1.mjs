import { _ as __vite_glob_0_0 } from './jsonExample_DUFBSUGL.mjs';

const diaryModules = /* #__PURE__ */ Object.assign({"../content/diary/example/jsonExample.json": __vite_glob_0_0});
const moments = Object.entries(diaryModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  const basePath = path.replace("../", "").replace(/\/[^/]+$/, "");
  const moment = {
    id,
    ...data,
    basePath
  };
  return moment;
});
const sortedMoments = [...moments].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export { moments, sortedMoments };
