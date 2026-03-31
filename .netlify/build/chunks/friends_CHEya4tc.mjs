import { _ as __vite_glob_0_0 } from './astro__voCSKF5.mjs';
import { _ as __vite_glob_0_1 } from './spraachen_SVZwx1ek.mjs';
import { _ as __vite_glob_0_2 } from './twilight-docs_CKAJ4W61.mjs';

const friendModules = /* #__PURE__ */ Object.assign({"../content/friends/astro.json": __vite_glob_0_0,"../content/friends/spraachen.json": __vite_glob_0_1,"../content/friends/twilight-docs.json": __vite_glob_0_2});
const friendsData = Object.entries(friendModules).map(([path, mod]) => {
  const id = path.split("/").pop()?.replace(".json", "") || "";
  const data = mod.default;
  return { id, ...data };
});

export { friendsData };
