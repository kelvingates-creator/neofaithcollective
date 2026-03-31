import { n as navbarConfig } from './_astro_content_eggaFy3m.mjs';
import { L as LinkPresets } from './grid_7BbutKON.mjs';
import { p as pathsEqual } from './content_Bhz2NelC.mjs';

function getParentLink(currentPath) {
  for (const link of navbarConfig.links) {
    if (typeof link !== "number" && link.children && link.children.length > 0) {
      for (const child of link.children) {
        let childLink;
        if (typeof child === "number") {
          childLink = LinkPresets[child];
        } else {
          childLink = child;
        }
        if (pathsEqual(childLink.url, currentPath)) {
          return link;
        }
      }
    }
  }
  return void 0;
}

export { getParentLink };
