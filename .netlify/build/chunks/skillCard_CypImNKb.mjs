import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, f as renderScript, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$Icon from './icon_CuxplMvE.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const {
    skill,
    size = "medium",
    showProgress = true,
    showIcon = true
  } = Astro2.props;
  const getLevelColor = (level) => {
    switch (level) {
      case "expert":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "advanced":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "intermediate":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "beginner":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getLevelText = (level) => {
    switch (level) {
      case "expert":
        return i18n(I18nKey.skillsExpert);
      case "advanced":
        return i18n(I18nKey.skillsAdvanced);
      case "intermediate":
        return i18n(I18nKey.skillsIntermediate);
      case "beginner":
        return i18n(I18nKey.skillsBeginner);
      default:
        return level;
    }
  };
  const getLevelWidth = (level) => {
    switch (level) {
      case "expert":
        return "100%";
      case "advanced":
        return "80%";
      case "intermediate":
        return "60%";
      case "beginner":
        return "40%";
      default:
        return "20%";
    }
  };
  const getSizeClasses = (size2) => {
    switch (size2) {
      case "small":
        return {
          container: "p-4",
          icon: "w-8 h-8",
          iconText: "text-lg",
          title: "text-base",
          description: "text-xs line-clamp-2",
          badge: "text-xs",
          progress: "h-1.5"
        };
      case "large":
        return {
          container: "p-6",
          icon: "w-14 h-14",
          iconText: "text-3xl",
          title: "text-xl",
          description: "text-sm line-clamp-3",
          badge: "text-sm",
          progress: "h-3"
        };
      default:
        return {
          container: "p-5",
          icon: "w-10 h-10",
          iconText: "text-xl",
          title: "text-lg",
          description: "text-sm line-clamp-2",
          badge: "text-xs",
          progress: "h-2"
        };
    }
  };
  const sizeClasses = getSizeClasses(size);
  const skillColor = skill.color || "#3B82F6";
  const getExperienceText = (experience) => {
    if (typeof experience === "string") return experience;
    const yearsText = `${experience.years}${i18n(I18nKey.skillYears)}`;
    const monthsText = experience.months > 0 ? ` ${experience.months}${i18n(I18nKey.skillMonths)}` : "";
    return `${yearsText}${monthsText}`;
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-slate-800/50 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-all duration-300 group"> <div${addAttribute(sizeClasses.container, "class")}> <div class="flex items-start gap-4"> <!-- 技能图标 --> ${showIcon && skill.icon && renderTemplate`<div${addAttribute(`rounded-lg flex items-center justify-center shrink-0 ${sizeClasses.icon}`, "class")}${addAttribute(`background-color: ${skillColor}20`, "style")}> ${renderComponent($$result, "Icon", $$Icon, { "icon": skill.icon, "class": sizeClasses.iconText, "color": skillColor, "fallback": skill.name.charAt(0), "loading": "eager" })} </div>`} <div class="flex-1 min-w-0"> <!-- 技能名称和等级 --> <div class="flex items-center justify-between mb-2"> <h3${addAttribute(`font-semibold text-black/90 dark:text-white/90 ${sizeClasses.title} ${size === "small" ? "truncate" : ""}`, "class")}> ${skill.name} </h3> <span${addAttribute(`px-2 py-1 rounded-full shrink-0 ml-2 ${sizeClasses.badge} ${getLevelColor(skill.level)}`, "class")}> ${getLevelText(skill.level)} </span> </div> <!-- 分类标签 --> ${skill.category && renderTemplate`<div class="mb-2"> <span${addAttribute(`px-2 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-sm ${sizeClasses.badge}`, "class")}> ${skill.category} </span> </div>`} <!-- 技能描述 --> <p${addAttribute(`text-black/60 dark:text-white/60 mb-3 ${sizeClasses.description}`, "class")}> ${skill.description} </p> <!-- 经验和进度条 --> ${showProgress && renderTemplate`<div class="mb-3"> <div class="flex justify-between text-sm mb-1"> <span class="text-black/60 dark:text-white/60">${i18n(I18nKey.skillExperience)}</span> <span class="text-black/80 dark:text-white/80">${getExperienceText(skill.experience)}</span> </div> <div${addAttribute(`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${sizeClasses.progress}`, "class")}> <div${addAttribute(`rounded-full transition-all duration-500 ${sizeClasses.progress}`, "class")}${addAttribute(`width: ${getLevelWidth(skill.level)}; background-color: ${skillColor}`, "style")}></div> </div> </div>`} <!-- 认证信息 --> ${skill.certifications && skill.certifications.length > 0 && renderTemplate`<div class="mb-3"> <div class="flex flex-wrap gap-1"> ${skill.certifications.map((cert) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-sm ${sizeClasses.badge}`, "class")}>
🏆 ${cert} </span>`)} </div> </div>`} <!-- 相关项目 --> ${skill.relatedProjects && skill.relatedProjects.length > 0 && renderTemplate`<div class="text-sm text-black/60 dark:text-white/60"> ${i18n(I18nKey.skillsProjects)}: ${skill.relatedProjects.length} </div>`} </div> </div> </div> </div> ${renderScript($$result, "/workspaces/neofaithcollective/src/components/data/skillCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/neofaithcollective/src/components/data/skillCard.astro", void 0);

export { $$SkillCard as default };
