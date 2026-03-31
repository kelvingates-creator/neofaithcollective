import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid, c as $$IconifyLoader, U as UNCATEGORIZED } from './grid_7BbutKON.mjs';
import { L as LinkPreset } from './_astro_content_eggaFy3m.mjs';
import { getSkillStats, getAdvancedSkills, getTotalExperience, skillsData, getSkillsByCategory } from './skills_Cg593vVo.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$SkillCard from './skillCard_CypImNKb.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const title = LinkPresets[LinkPreset.Skills].name;
  const subtitle = LinkPresets[LinkPreset.Skills].description;
  const stats = getSkillStats();
  const advancedSkills = getAdvancedSkills();
  const totalExperience = getTotalExperience();
  const categories = [...new Set(skillsData.map((skill) => skill.category))];
  const skillsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = getSkillsByCategory(category);
      return acc;
    },
    {}
  );
  const getCategoryText = (category) => {
    switch (category) {
      case "ai":
        return i18n(I18nKey.skillsAI);
      case "server":
        return i18n(I18nKey.skillsBackend);
      case "client":
        return i18n(I18nKey.skillsClient);
      case "web":
        return i18n(I18nKey.skillsFrontend);
      case "database":
        return i18n(I18nKey.skillsDatabase);
      case "engines":
        return i18n(I18nKey.skillsEngines);
      case "tools":
        return i18n(I18nKey.skillsTools);
      case "others":
        return i18n(I18nKey.skillsOthers);
      case UNCATEGORIZED:
        return i18n(I18nKey.uncategorized);
      default:
        return category;
    }
  };
  const allIcons = skillsData.map((skill) => skill.icon).filter(Boolean);
  return renderTemplate`${renderComponent($$result, "GridLayout", $$Grid, { "title": title, "description": subtitle }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "IconifyLoader", $$IconifyLoader, { "preloadIcons": allIcons })} ${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full"> ${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname })} <!-- 页面标题 --> <div class="flex flex-col items-start justify-center mb-8"> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2"> ${i18n(I18nKey.skills)} </h1> <p class="text-lg text-black/60 dark:text-white/60"> ${i18n(I18nKey.skillsSubtitle)} </p> </div> <!-- 统计信息 --> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"> <div class="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4"> <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${stats.total}</div> <div class="text-sm text-blue-600/70 dark:text-blue-400/70">${i18n(I18nKey.skillsTotal)}</div> </div> <div class="bg-linear-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-4"> <div class="text-2xl font-bold text-red-600 dark:text-red-400">${stats.byLevel.expert}</div> <div class="text-sm text-red-600/70 dark:text-red-400/70">${i18n(I18nKey.skillsExpert)}</div> </div> <div class="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4"> <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">${stats.byLevel.advanced}</div> <div class="text-sm text-orange-600/70 dark:text-orange-400/70">${i18n(I18nKey.skillsAdvanced)}</div> </div> <div class="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4"> <div class="text-2xl font-bold text-purple-600 dark:text-purple-400"> ${totalExperience.years}${totalExperience.months > 0 ? `.${totalExperience.months}` : ""} </div> <div class="text-sm text-purple-600/70 dark:text-purple-400/70">${i18n(I18nKey.skillExperience)}</div> </div> </div> <!-- 专业技能 --> ${advancedSkills.length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4"> ${i18n(I18nKey.skillsAdvancedTitle)} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${advancedSkills.map((skill) => renderTemplate`${renderComponent($$result2, "SkillCard", $$SkillCard, { "skill": skill, "size": "large", "showProgress": true, "showIcon": true })}`)} </div> </div>`} <!-- 按分类展示技能 --> <div class="space-y-8"> ${categories.map((category) => {
    const categorySkills = skillsByCategory[category];
    if (categorySkills.length === 0) return null;
    return renderTemplate`<div> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4"> ${getCategoryText(category)} <span class="text-lg font-normal text-black/60 dark:text-white/60 ml-2">
(${categorySkills.length})
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${categorySkills.map((skill) => renderTemplate`${renderComponent($$result2, "SkillCard", $$SkillCard, { "skill": skill, "size": "medium", "showProgress": true, "showIcon": true })}`)} </div> </div>`;
  })} </div> <!-- 技能分布图表 --> <div class="mt-12 pt-8 border-t border-black/10 dark:border-white/10"> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-6"> ${i18n(I18nKey.skillsDistribution)} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- 按等级分布 --> <div> <h3 class="text-lg font-semibold text-black/80 dark:text-white/80 mb-4"> ${i18n(I18nKey.skillsByLevel)} </h3> <div class="space-y-3"> ${Object.entries(stats.byLevel).map(([level, count]) => {
    const percentage = Math.round(count / stats.total * 100);
    return renderTemplate`<div class="flex items-center gap-3"> <div class="w-20 text-sm text-black/70 dark:text-white/70"> ${i18n(level === "expert" ? I18nKey.skillsExpert : level === "advanced" ? I18nKey.skillsAdvanced : level === "intermediate" ? I18nKey.skillsIntermediate : I18nKey.skillsBeginner)} </div> <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2"> <div${addAttribute(`h-2 rounded-full transition-all duration-600 ${level === "expert" ? "bg-red-500" : level === "advanced" ? "bg-orange-500" : level === "intermediate" ? "bg-yellow-500" : "bg-green-500"}`, "class")}${addAttribute(`width: ${percentage}%`, "style")}></div> </div> <div class="w-12 text-sm text-black/70 dark:text-white/70 text-right"> ${count} </div> </div>`;
  })} </div> </div> <!-- 按分类分布 --> <div> <h3 class="text-lg font-semibold text-black/80 dark:text-white/80 mb-4"> ${i18n(I18nKey.skillsByCategory)} </h3> <div class="space-y-3"> ${Object.entries(stats.byCategory).map(([category, count]) => {
    const percentage = Math.round(count / stats.total * 100);
    return renderTemplate`<div class="flex items-center gap-3"> <div class="w-20 text-sm text-black/70 dark:text-white/70 truncate"> ${getCategoryText(category)} </div> <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2"> <div class="h-2 rounded-full bg-blue-500 transition-all duration-500"${addAttribute(`width: ${percentage}%`, "style")}></div> </div> <div class="w-12 text-sm text-black/70 dark:text-white/70 text-right"> ${count} </div> </div>`;
  })} </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/workspaces/neofaithcollective/src/pages/skills.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/neofaithcollective/src/pages/skills.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/skills.astro";
const $$url = "/skills/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Skills,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
