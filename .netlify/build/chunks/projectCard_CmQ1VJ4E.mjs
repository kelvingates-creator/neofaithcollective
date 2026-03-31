import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import { b as $$ImageWrapper } from './grid_7BbutKON.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    project,
    size = "medium",
    showImage = true,
    maxTechStack = 4
  } = Astro2.props;
  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "planned":
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return i18n(I18nKey.projectsCompleted);
      case "in-progress":
        return i18n(I18nKey.projectsInProgress);
      case "planned":
        return i18n(I18nKey.projectsPlanned);
      default:
        return status;
    }
  };
  const getSizeClasses = (size2) => {
    switch (size2) {
      case "small":
        return {
          container: "p-4",
          title: "text-lg",
          description: "text-sm line-clamp-2",
          tech: "text-xs",
          links: "text-sm"
        };
      case "large":
        return {
          container: "p-6",
          title: "text-xl",
          description: "text-base line-clamp-3",
          tech: "text-sm",
          links: "text-base"
        };
      default:
        return {
          container: "p-5",
          title: "text-lg",
          description: "text-sm line-clamp-2",
          tech: "text-xs",
          links: "text-sm"
        };
    }
  };
  const sizeClasses = getSizeClasses(size);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition-all duration-300 group"> <!-- 项目图片 --> ${showImage && project.image && renderTemplate`<div${addAttribute(`overflow-hidden ${size === "large" ? "aspect-video" : "aspect-4/3"}`, "class")}> ${renderComponent($$result, "ImageWrapper", $$ImageWrapper, { "src": project.image, "basePath": project.basePath, "alt": project.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-all duration-500" })} </div>`} <!-- 项目内容 --> <div${addAttribute(sizeClasses.container, "class")}> <!-- 标题和状态 --> <div class="flex items-start justify-between mb-3"> <h3${addAttribute(`font-semibold text-black/90 dark:text-white/90 ${sizeClasses.title} ${size === "small" ? "line-clamp-1" : ""}`, "class")}> ${project.title} </h3> <span${addAttribute(`px-2 py-1 text-xs rounded-full shrink-0 ml-2 ${getStatusStyle(project.status)}`, "class")}> ${getStatusText(project.status)} </span> </div> <!-- 分类标签 --> ${project.category && renderTemplate`<div class="mb-2"> <span class="px-2 py-1 text-xs bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-sm"> ${project.category} </span> </div>`} <!-- 项目描述 --> <p${addAttribute(`text-black/60 dark:text-white/60 mb-4 ${sizeClasses.description}`, "class")}> ${project.description} </p> <!-- 技术栈 --> ${project.techStack && project.techStack.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4"> ${project.techStack.slice(0, maxTechStack).map((tech) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-sm ${sizeClasses.tech}`, "class")}> ${tech} </span>`)} ${project.techStack.length > maxTechStack && renderTemplate`<span${addAttribute(`px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 rounded-sm ${sizeClasses.tech}`, "class")}>
+${project.techStack.length - maxTechStack} </span>`} </div>`} <!-- 标签 --> ${project.tags && project.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mb-4"> ${project.tags.map((tag) => renderTemplate`<span${addAttribute(`px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-sm ${sizeClasses.tech}`, "class")}>
#${tag} </span>`)} </div>`} <!-- 链接 --> <div class="flex gap-3"> ${project.demoUrl && renderTemplate`<a${addAttribute(project.demoUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`inline-flex items-center px-3 py-1.5 rounded-md border border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300 bg-blue-50/60 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 font-medium transition-colors ${sizeClasses.links}`, "class")}> ${i18n(I18nKey.projectsDemo)} </a>`} ${project.sourceUrl && renderTemplate`<a${addAttribute(project.sourceUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`inline-flex items-center px-3 py-1.5 rounded-md border border-gray-400 text-gray-700 dark:border-gray-500 dark:text-gray-200 bg-gray-50/80 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors ${sizeClasses.links}`, "class")}> ${i18n(I18nKey.projectsSource)} </a>`} </div> </div> </div>`;
}, "/workspaces/neofaithcollective/src/components/data/projectCard.astro", void 0);

export { $$ProjectCard as default };
