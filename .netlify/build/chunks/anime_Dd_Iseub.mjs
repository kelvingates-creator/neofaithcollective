import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import { L as LinkPreset, s as siteConfig } from './_astro_content_eggaFy3m.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Anime = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Anime;
  const pageTitle = LinkPresets[LinkPreset.Anime].name;
  const pageDescription = LinkPresets[LinkPreset.Anime].description;
  const BANGUMI_USER_ID = siteConfig.bangumi?.userId || "";
  const BANGUMI_API_BASE = "https://api.bgm.tv";
  const isBangumiConfigured = BANGUMI_USER_ID && BANGUMI_USER_ID !== "your-bangumi-id" && BANGUMI_USER_ID !== "your-user-id";
  async function fetchSubjectPersons(subjectId) {
    if (!isBangumiConfigured) return [];
    try {
      const response = await fetch(
        `${BANGUMI_API_BASE}/v0/subjects/${subjectId}/persons`
      );
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(`Error fetching subject ${subjectId} persons:`, error);
      return [];
    }
  }
  async function fetchBangumiCollection(userId, subjectType, type) {
    if (!isBangumiConfigured) return null;
    try {
      let allData = [];
      let offset = 0;
      const limit = 50;
      let hasMore = true;
      while (hasMore) {
        const response = await fetch(
          `${BANGUMI_API_BASE}/v0/users/${userId}/collections?subject_type=${subjectType}&type=${type}&limit=${limit}&offset=${offset}`
        );
        if (!response.ok) {
          throw new Error(`Bangumi API error: ${response.status}`);
        }
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          allData = [...allData, ...data.data];
        }
        if (!data.data || data.data.length < limit) {
          hasMore = false;
        } else {
          offset += limit;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      return { data: allData };
    } catch (error) {
      console.error("Error fetching Bangumi data:", error);
      return null;
    }
  }
  async function processBangumiData(data, status) {
    if (!data || !data.data) return [];
    const detailedItems = await Promise.all(
      data.data.map(async (item) => {
        const subjectPersons = await fetchSubjectPersons(item.subject_id);
        const year = item.subject?.date || "Unknown";
        const rating = item.rate ? Number.parseFloat(item.rate.toFixed(1)) : 0;
        const progress = item.ep_status || 0;
        const totalEpisodes = item.subject?.eps || progress;
        let studio = "Unknown";
        if (Array.isArray(subjectPersons)) {
          const priorities = ["\u52A8\u753B\u5236\u4F5C", "\u88FD\u4F5C", "\u5236\u4F5C"];
          for (const relation of priorities) {
            const match = subjectPersons.find(
              (person) => person.relation === relation
            );
            if (match?.name) {
              studio = match.name;
              break;
            }
          }
        }
        return {
          title: item.subject?.name_cn || item.subject?.name || "Unknown Title",
          status,
          rating,
          cover: item.subject?.images?.medium || "/assets/anime/default.webp",
          description: (item.subject?.short_summary || item.subject?.name_cn || "").trimStart(),
          episodes: `${totalEpisodes} episodes`,
          year,
          genre: item.subject?.tags ? item.subject.tags.slice(0, 3).map((tag) => tag.name) : ["Unknown"],
          studio,
          link: `https://bgm.tv/subject/${item.subject.id}` || "#",
          progress,
          totalEpisodes,
          startDate: item.subject?.date || "",
          endDate: item.subject?.date || ""
        };
      })
    );
    return detailedItems;
  }
  const watchingData = await fetchBangumiCollection(BANGUMI_USER_ID, 2, 3);
  const completedData = await fetchBangumiCollection(BANGUMI_USER_ID, 2, 2);
  const watchingList = watchingData ? await processBangumiData(watchingData, "watching") : [];
  const completedList = completedData ? await processBangumiData(completedData, "completed") : [];
  const animeList = [...watchingList, ...completedList];
  function getStatusInfo(status) {
    switch (status) {
      case "watching":
        return {
          text: i18n(I18nKey.animeStatusWatching),
          class: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          icon: "\u25B6"
        };
      case "completed":
        return {
          text: i18n(I18nKey.animeStatusCompleted),
          class: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          icon: "\u2713"
        };
      case "planned":
        return {
          text: i18n(I18nKey.animeStatusPlanned),
          class: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
          icon: "\u23F0"
        };
      default:
        return {
          text: status,
          class: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
          icon: "?"
        };
    }
  }
  const stats = {
    total: animeList.length,
    watching: animeList.filter((anime) => anime.status === "watching").length,
    completed: animeList.filter((anime) => anime.status === "completed").length,
    avgRating: (() => {
      const ratedAnime = animeList.filter((anime) => anime.rating > 0);
      if (ratedAnime.length === 0) return "0.0";
      return (ratedAnime.reduce((sum, anime) => sum + anime.rating, 0) / ratedAnime.length).toFixed(1);
    })()
  };
  return renderTemplate`${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full"> ${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname })} <!-- 页面标题 --> <div class="relative w-full mb-8"> <div class="mb-6"> <h1 class="text-4xl font-bold text-black/90 dark:text-white/90 mb-2">${i18n(I18nKey.animeTitle)}</h1> <p class="text-black/75 dark:text-white/75">${pageDescription}</p> </div> <!-- 统计卡片 --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"> <div class="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4"> <div class="flex items-center gap-3"> <div class="text-2xl">📊</div> <div> <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">${stats.total}</div> <div class="text-sm text-blue-600/70 dark:text-blue-400/70">${i18n(I18nKey.animeTotal)}</div> </div> </div> </div> <div class="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4"> <div class="flex items-center gap-3"> <div class="text-2xl">▶️</div> <div> <div class="text-2xl font-bold text-green-600 dark:text-green-400">${stats.watching}</div> <div class="text-sm text-green-600/70 dark:text-green-400/70">${i18n(I18nKey.animeWatching)}</div> </div> </div> </div> <div class="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4"> <div class="flex items-center gap-3"> <div class="text-2xl">✅</div> <div> <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">${stats.completed}</div> <div class="text-sm text-purple-600/70 dark:text-purple-400/70">${i18n(I18nKey.animeCompleted)}</div> </div> </div> </div> <div class="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4"> <div class="flex items-center gap-3"> <div class="text-2xl">⭐</div> <div> <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">${stats.avgRating}</div> <div class="text-sm text-orange-600/70 dark:text-orange-400/70">${i18n(I18nKey.animeAvgRating)}</div> </div> </div> </div> </div> </div> <!-- 动漫列表 --> <div class="mb-8"> <h2 class="text-2xl font-bold text-black/90 dark:text-white/90 mb-4"> ${i18n(I18nKey.animeList)} </h2> ${!isBangumiConfigured ? renderTemplate`<div class="text-center py-12"> <div class="text-5xl mb-4">😢</div> <h3 class="text-xl font-medium text-black/80 dark:text-white/80 mb-2"> ${i18n(I18nKey.animeEmpty)} </h3> <p class="text-black/60 dark:text-white/60">
Please configure your Bangumi account in the config file.
</p> </div>` : animeList.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"> ${animeList.map((anime) => {
    const statusInfo = getStatusInfo(anime.status);
    const progressPercent = anime.totalEpisodes > 0 ? anime.progress / anime.totalEpisodes * 100 : 0;
    return renderTemplate`<div class="group relative bg-(--card-bg) border border-(--line-divider) rounded-(--radius-large) overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"> <!-- 封面区域 - 竖屏比例 --> <div class="relative aspect-2/3 overflow-hidden"> <a${addAttribute(anime.link, "href")} target="_blank" rel="noopener noreferrer" class="block w-full h-full"> ${renderComponent($$result2, "ImageWrapper", $$ImageWrapper, { "src": anime.cover, "alt": anime.title, "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110", "loading": "lazy" })} <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center"> <svg class="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"></path> </svg> </div> </div> </div> </a> <!-- 状态标签 --> <div${addAttribute(`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${statusInfo.class}`, "class")}> <span class="mr-1">${statusInfo.icon}</span> <span>${statusInfo.text}</span> </div> <!-- 评分 --> <div class="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"> <svg class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span>${anime.rating}</span> </div> <!-- 进度条 - 在封面底部 --> ${anime.status === "watching" && renderTemplate`<div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2"> <div class="w-full bg-white/20 rounded-full h-1.5 mb-1"> <div class="bg-linear-to-r from-emerald-400 to-teal-400 h-1.5 rounded-full transition-all duration-300"${addAttribute(`width: ${progressPercent}%`, "style")}></div> </div> <div class="text-white text-xs font-medium"> ${anime.progress}/${anime.totalEpisodes} (${Math.round(progressPercent)}%)
</div> </div>`} </div> <!-- 内容区域 - 紧凑设计 --> <div class="p-3"> <h3 class="text-sm font-bold text-black/90 dark:text-white/90 mb-1 line-clamp-2 leading-tight">${anime.title}</h3> <p class="text-black/60 dark:text-white/60 text-xs mb-2 line-clamp-2">${anime.description}</p> <!-- 详细信息 - 更紧凑 --> <div class="space-y-1 text-xs"> <div class="flex justify-between"> <span class="text-black/50 dark:text-white/50">${i18n(I18nKey.animeYear)}</span> <span class="text-black/70 dark:text-white/70">${anime.year}</span> </div> <div class="flex justify-between"> <span class="text-black/50 dark:text-white/50">${i18n(I18nKey.animeStudio)}</span> <span class="text-black/70 dark:text-white/70 truncate ml-2">${anime.studio}</span> </div> <div class="flex flex-wrap gap-1 mt-2"> ${anime.genre.map((g) => renderTemplate`<span class="px-1.5 py-0.5 bg-(--btn-regular-bg) text-black/70 dark:text-white/70 rounded-sm text-xs">${g}</span>`)} </div> </div> </div> </div>`;
  })} </div>` : renderTemplate`<div class="text-center py-12"> <div class="text-5xl mb-4">😢</div> <h3 class="text-xl font-medium text-black/80 dark:text-white/80 mb-2"> ${i18n(I18nKey.animeEmpty)} </h3> <p class="text-black/60 dark:text-white/60"> ${i18n(I18nKey.animeEmptyBangumi)} </p> </div>`} </div> </div> </div> ` })}`;
}, "/workspaces/neofaithcollective/src/pages/anime.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/anime.astro";
const $$url = "/anime/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Anime,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
