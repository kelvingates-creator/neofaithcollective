import { _ as __vite_glob_0_0 } from './jsonExample_ZJofX8Jr.mjs';

const albumModules = /* #__PURE__ */ Object.assign({"../content/albums/example/jsonExample.json": __vite_glob_0_0});
const albums = Object.entries(albumModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  const basePath = path.replace("../", "").replace(/\/[^/]+$/, "");
  const album = {
    id,
    ...data,
    photos: data.photos || [],
    visible: data.visible !== false,
    // 默认为 true
    basePath
  };
  return album;
});
const sortedAlbums = [...albums].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export { albums, sortedAlbums };
