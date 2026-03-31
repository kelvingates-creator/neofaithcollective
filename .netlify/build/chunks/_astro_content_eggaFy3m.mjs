import yaml from 'js-yaml';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, p as prependForwardSlash } from './consts_C1Ff685N.mjs';
import { A as AstroError, L as LiveContentConfigError, k as AstroUserError, R as RenderUndefinedEntryError, c as createComponent, u as unescapeHTML, a as renderTemplate, U as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, r as renderComponent } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import * as devalue from 'devalue';

var LinkPreset = /* @__PURE__ */ ((LinkPreset2) => {
  LinkPreset2[LinkPreset2["Home"] = 0] = "Home";
  LinkPreset2[LinkPreset2["Archive"] = 1] = "Archive";
  LinkPreset2[LinkPreset2["Projects"] = 2] = "Projects";
  LinkPreset2[LinkPreset2["Skills"] = 3] = "Skills";
  LinkPreset2[LinkPreset2["Timeline"] = 4] = "Timeline";
  LinkPreset2[LinkPreset2["Diary"] = 5] = "Diary";
  LinkPreset2[LinkPreset2["Albums"] = 6] = "Albums";
  LinkPreset2[LinkPreset2["Anime"] = 7] = "Anime";
  LinkPreset2[LinkPreset2["About"] = 8] = "About";
  LinkPreset2[LinkPreset2["Friends"] = 9] = "Friends";
  return LinkPreset2;
})(LinkPreset || {});

const config$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    LinkPreset
}, Symbol.toStringTag, { value: 'Module' }));

const rawConfig = "# 站点配置\nsite:\n    # 站点 URL（以斜杠结尾）\n    siteURL: \"https://neofaithcollective.netlify.app/\"\n    # 站点标题\n    title: \"NeoFaith Collective\"\n    # 站点副标题\n    subtitle: \"Faith through culture. Culture through faith.\"\n    # 语言配置\n    lang: \"en\"\n    # 翻译配置\n    translate:\n        # 启用翻译功能\n        enable: true\n        # 翻译服务\n        service: \"client.edge\"\n        # 显示语言选择下拉框\n        showSelectTag: false\n        # 自动检测用户语言\n        autoDiscriminate: true\n        # 翻译时忽略的 CSS 类名\n        ignoreClasses:\n            - \"ignore\"\n            - \"banner-title\"\n            - \"banner-subtitle\"\n        # 翻译时忽略的 HTML 标签\n        ignoreTags:\n            - \"script\"\n            - \"style\"\n            - \"code\"\n            - \"pre\"\n    # 时区配置\n    timeZone: 8\n    # 字体配置\n    font:\n        # 示例字体配置 - Zen Maru Gothic\n        \"Example - ZenMaruGothic\":\n            # 字体源 (字体 CSS 链接 | 字体文件路径)\n            src: \"https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap\"\n            # 字体名 (font-family)\n            family: \"Zen Maru Gothic\"\n    # 主题色配置\n    themeColor:\n        # 主题色的默认色相 (范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345)\n        hue: 255\n    # 默认主题 (\"system\" 跟随系统 | \"light\" 浅色 | \"dark\" 深色)\n    defaultTheme: \"dark\"\n    # 壁纸配置\n    wallpaper:\n        # 模式 (\"banner\" 横幅 | \"fullscreen\" 全屏 | \"none\" 纯色)\n        mode: \"banner\"\n        # 图片源配置 (fullscreen 和 banner 模式共享)\n        src:\n            # 桌面壁纸图片 (相对于 /public 目录; 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)\n            desktop:\n                - \"/assets/images/desktopWallpaper_1.jpg\"\n                - \"/assets/images/desktopWallpaper_2.jpg\"\n                - \"/assets/images/desktopWallpaper_3.jpg\"\n            # 移动壁纸图片 (相对于 /public 目录; 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)\n            mobile:\n                - \"/assets/images/mobileWallpaper_1.jpg\"\n                - \"/assets/images/mobileWallpaper_2.jpg\"\n        # 壁纸位置 ('top' | 'center' | 'bottom')\n        position: \"center\"\n        # 轮播配置 (fullscreen 和 banner 模式共享)\n        carousel:\n            # 为多张图片启用轮播，否则随机显示一张图片\n            enable: true\n            # 轮播间隔时间 (秒)\n            interval: 3.6\n            # 启用 Ken Burns 效果\n            kenBurns: true\n        # Banner 模式专属配置\n        banner:\n            # 横幅文本配置\n            homeText:\n                # 在主页显示文本\n                enable: true\n                # 主标题\n                title: \"NeoFaith Collective\"\n                # 副标题，支持单个字符串或字符串数组\n                subtitle:\n                     - \"Faith through culture. Culture through faith.\"\n                     - \"A creative ministry project.\"\n                     - \"Spirit lives in art, music, and community.\"\n                # 副标题打字机效果\n                typewriter:\n                    # 启用副标题打字机效果\n                    enable: true\n                    # 打字速度 (毫秒)\n                    speed: 111\n                    # 删除速度 (毫秒)\n                    deleteSpeed: 51\n                    # 完全显示后的暂停时间 (毫秒)\n                    pauseTime: 3000\n            # 横幅图片来源文本\n            credit:\n                # 显示横幅图片来源文本\n                enable: false\n                # 要显示的来源文本\n                text: \"Describe\"\n                # (可选) 原始艺术品或艺术家页面的 URL 链接\n                url: \"\"\n            # 导航栏配置\n            navbar:\n                # 导航栏透明模式 (\"semi\" 半透明加圆角 | \"full\" 完全透明 | \"semifull\" 动态透明)\n                transparentMode: \"semifull\"\n            # 水波纹效果配置\n            waves:\n                # 启用水波纹效果\n                enable: true\n                # 启用性能模式 (简化波浪效果以提升性能)\n                performanceMode: false\n        # Fullscreen 模式专属配置\n        fullscreen:\n            # 层级\n            zIndex: -1\n            # 壁纸透明度，0-1之间\n            opacity: 0.9\n            # 背景模糊程度 (像素值)\n            blur: 1\n            # 导航栏透明模式\n            navbar:\n                transparentMode: \"semi\"\n    # 加载页配置\n    loadingOverlay:\n        # 是否启用加载页\n        enable: true\n        # 是否等待所有资源 (如图片、样式表) 加载完成\n        waitForAllResources: true\n        # 加载标题配置\n        title:\n            # 是否启用加载标题\n            enable: true\n            # 加载标题文本\n            content: \"LOADING\"\n            # 动画周期 (s)\n            interval: 1.5\n        # 加载动画配置\n        spinner:\n            # 是否启用加载动画\n            enable: true\n            # 动画周期 (s)\n            interval: 1.5\n    # favicon 配置\n    favicon: []\n    # bangumi 配置\n    bangumi:\n        # 用户 ID\n        userId: \"your-bangumi-id\"\n    # OpenGraph 配置\n    generateOgImages: false\n\n# Umami统计配置\numami:\n    # 是否显示Umami统计\n    enabled: false\n    # UmamiCloudAPI地址\n    baseUrl: \"https://api.umami.is\"\n    # API密钥 (可用环境变量覆盖)\n    apiKey: \"\"\n    # 要插入的Script (可用环境变量覆盖)\n    scripts: \"\"\n\n# 导航栏配置\nnavbar:\n    # 链接配置 (链接预设位于 src/constants/link-presets.ts 的 LinkPresets)\n    links:\n        - # 一级导航链接 - 主页 (预设)\n            \"Home\"\n        - # 一级导航链接 - 归档 (预设)\n            \"Archive\"\n        - #\n            \"Albums\"\n        - # 一级导航链接 - 关于 (预设)\n            \"About\"\n\n# 侧边栏配置\nsidebar:\n    # 侧边栏组件配置列表 (侧栏组件预设位于 src/types/config.ts 的 WidgetComponentType)\n    components:\n        # 左侧侧边栏\n        left:\n            - # 组件 - 资料 (预设)\n                # 类型\n                type: \"profile\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"top\"\n            - # 组件 - 公告 (预设)\n                # 类型\n                type: \"announcement\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"top\"\n            - # 组件 - 文章类别 (预设)\n                # 类型\n                type: \"categories\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"sticky\"\n                # 响应式配置\n                responsive:\n                    # 折叠阈值\n                    collapseThreshold: 5\n                # 目录深度\n                depth: 3\n            - # 组件 - 文章标签 (预设)\n                # 类型\n                type: \"tags\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"sticky\"\n                # 响应式配置\n                responsive:\n                    # 折叠阈值\n                    collapseThreshold: 20\n        # 右侧侧边栏\n        right:\n            - # 组件 - 文章目录 (预设)\n                # 类型\n                type: \"toc\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"sticky\"\n                # 目录深度 (1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推)\n                depth: 3\n            - # 组件 - 文章统计 (预设)\n                # 类型\n                type: \"statistics\"\n                # 位置策略 (\"top\" 顶部固定 | \"sticky\" 粘性)\n                position: \"sticky\"\n                # 页面可见性配置\n                visibility:\n                    # 匹配模式：'include' (包含), 'exclude' (排除)\n                    mode: \"include\"\n                    # 页面路径匹配规则列表 (支持正则字符串)\n                    paths: [\"^/$\", \"^/archive$\"]\n\n# 资料配置\nprofile:\n    # 头像配置 (相对于 /public 目录)\n    avatar: \"/assets/images/avatar.jpg\"\n    # 信息配置\n    name: \"NeoFaith Collective\"\n    # 简介配置\n    bio: \"Faith through culture. Culture through faith.\"\n    # 链接配置\n    links:\n        - # 链接示例\n            # 名字\n            name: \"Website\"\n            # 图标\n            icon: \"fa6-solid:earth-americas\"\n            # 链接\n            url: \"https://neofaithcollective.netlify.app/\"\n\n# 公告配置\nannouncement:\n    # 公告标题\n    title: \"Welcome\"\n    # 公告内容\n    content: \"A creative ministry amplifying stories rooted in spirit, heritage, and community.\"\n    # 允许用户关闭公告\n    closable: true\n    # 链接配置\n    link:\n        # 启用链接\n        enable: true\n        # 链接文本\n        text: \"Learn More\"\n        # 链接 URL\n        url: \"/about/\"\n        # 是否外部链接\n        external: false\n\n# 文章配置\npost:\n    # 显示“上次编辑”卡片\n    showLastModified: true\n    # 代码高亮配置\n    expressiveCode:\n        # 主题\n        theme: \"github-dark\"\n    # 许可证配置\n    license:\n        # 启用许可证\n        enable: true\n        # 许可证名称\n        name: \"CC BY-NC-SA 4.0\"\n        # 许可证链接\n        url: \"https://creativecommons.org/licenses/by-nc-sa/4.0/\"\n    # 评论配置\n    comment:\n        # 启用评论功能\n        enable: false\n        # Twikoo 评论系统配置\n        twikoo:\n            # 环境 ID\n            envId: \"https://twikoo.vercel.app\"\n            # 语言\n            lang: \"en\"\n\n# 页脚配置\nfooter:\n    # 启用 Footer HTML 注入功能\n    enable: false\n    # 自定义 HTML 内容，用于添加备案号等信息\n    customHtml: \"\"\n\n# 粒子特效配置\nparticle:\n    # 启用粒子特效\n    enable: true\n    # 粒子数量\n    particleNum: 12\n    # 粒子越界限制次数，-1为无限循环\n    limitTimes: -1\n    # 粒子尺寸配置\n    size:\n        # 粒子最小尺寸倍数\n        min: 0.3\n        # 粒子最大尺寸倍数\n        max: 0.9\n    # 粒子透明度配置\n    opacity:\n        # 粒子最小不透明度\n        min: 0.3\n        # 粒子最大不透明度\n        max: 0.9\n    # 粒子移动速度配置\n    speed:\n        # 水平移动速度\n        horizontal:\n            # 最小值\n            min: -0.9\n            # 最大值\n            max: 0.9\n        # 垂直移动速度\n        vertical:\n            # 最小值\n            min: 0.15\n            # 最大值\n            max: 0.3\n        # 旋转速度\n        rotation: 0.12\n        # 消失速度\n        fadeSpeed: 0.12\n    # 粒子层级\n    zIndex: 100\n\n# 音乐播放器配置\nmusicPlayer:\n    # 启用音乐播放器功能\n    enable: false\n    # 默认模式 (\"meting\" API | \"local\" 本地)\n    mode: \"meting\"\n    # meting 模式专属配置\n    meting:\n        # Meting API 地址\n        meting_api: \"https://api.i-meto.com/meting/api\"\n        # 音乐平台\n        server: \"netease\"\n        # 类型 (\"playlist\" 歌单 | \"song\" 单曲)\n        type: \"playlist\"\n        # 资源 ID\n        id: \"2161912966\"\n    # local 模式专属配置\n    local:\n        # 播放列表\n        playlist:\n            - # 列表示例\n                # 序号\n                id: 1\n                # 标题\n                title: \"深海之息\"\n                # 作者\n                artist: \"Youzee Music\"\n                # 封面\n                cover: \"https://p1.music.126.net/PhKOqFtljgHDDpKYM2ADUA==/109951169858309716.jpg\"\n                # 音乐路径\n                url: \"assets/music/深海之息.m4a\"\n                # 歌词路径\n                lrc: \"assets/music/深海之息.lrc\"\n                # 时长\n                duration: 146\n    # 是否自动播放\n    autoplay: true\n\n# 看板娘配置\npio:\n    # 启用看板娘\n    enable: false\n    # 模型文件路径\n    models:\n        - \"/pio/models/pio/model.json\"\n    # 看板娘位置\n    position: \"left\"\n    # 看板娘宽度\n    width: 280\n    # 看板娘高度\n    height: 250\n    # 展现模式\n    mode: \"draggable\"\n    # 是否在移动设备上隐藏\n    hiddenOnMobile: true\n    # 对话框配置\n    dialog:\n        # 欢迎词\n        welcome: \"Welcome!\"\n        # 触摸提示\n        touch:\n            - \"What are you doing?\"\n            - \"Stop touching me!\"\n            - \"Don't bully me like that!\"\n            - \"(｡í _ ì｡)\"\n        # 首页提示\n        home: \"Click here to go back to homepage!\"\n        # 换装提示\n        skin:\n            - \"Want to see my new outfit?\"\n            - \"The new outfit looks great~\"\n        # 关闭提示\n        close: \"See you next time~\"\n        # 关于链接\n        link: \"https://nav.kungal.org\"";

const config = yaml.load(rawConfig);
const linkPresetNameMap = {
  Home: LinkPreset.Home,
  Archive: LinkPreset.Archive,
  Projects: LinkPreset.Projects,
  Skills: LinkPreset.Skills,
  Timeline: LinkPreset.Timeline,
  Diary: LinkPreset.Diary,
  Albums: LinkPreset.Albums,
  Anime: LinkPreset.Anime,
  About: LinkPreset.About,
  Friends: LinkPreset.Friends
};
const normalizeNavbarLink = (link) => {
  if (typeof link === "string") {
    const preset = linkPresetNameMap[link];
    if (preset === void 0) {
      throw new Error(`Unknown LinkPreset: ${link}`);
    }
    return preset;
  }
  if (typeof link === "number") {
    return link;
  }
  const children = link.children?.map(normalizeNavbarLink);
  return children ? { ...link, children } : link;
};
const normalizeNavbarLinks = (links) => links.map(normalizeNavbarLink);
const resolvedPostConfig = {
  ...config.post,
  comment: config.post.comment.twikoo ? {
    ...config.post.comment,
    twikoo: {
      ...config.post.comment.twikoo,
      lang: config.post.comment.twikoo.lang ?? config.site.lang
    }
  } : config.post.comment
};
const siteConfig = config.site;
const umamiConfig = {
  enabled: config.umami.enabled,
  baseUrl: config.umami.baseUrl,
  scripts: ""
};
const navbarConfig = {
  links: normalizeNavbarLinks(config.navbar.links)
};
const sidebarConfig = config.sidebar;
const profileConfig = config.profile;
const announcementConfig = config.announcement;
const postConfig = resolvedPostConfig;
const footerConfig = config.footer;
config.particle;
const musicPlayerConfig = config.musicPlayer;
const pioConfig = config.pio;

const config$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    announcementConfig,
    footerConfig,
    musicPlayerConfig,
    navbarConfig,
    pioConfig,
    postConfig,
    profileConfig,
    sidebarConfig,
    siteConfig,
    umamiConfig
}, Symbol.toStringTag, { value: 'Module' }));

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_D9IKkuZ8.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://neofaithcollective.netlify.app/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_FYlfTl0G.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

export { CONTENT_LAYER_TYPE as C, LinkPreset as L, getCollection as a, postConfig as b, LIVE_CONTENT_TYPE as c, defineCollection as d, sidebarConfig as e, announcementConfig as f, getEntry as g, footerConfig as h, pioConfig as i, config$2 as j, config$1 as k, musicPlayerConfig as m, navbarConfig as n, profileConfig as p, renderEntry as r, siteConfig as s, umamiConfig as u };
