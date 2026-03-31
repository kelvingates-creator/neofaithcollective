import { e as ensure_array_like, a as escape_html, b as attr, d as derived } from './_@astro-renderers_NcXBPHzO.mjs';
import { i as i18n, I as I18nKey, a as getPostUrl, b as parseTags, c as getCategoryPathParts } from './content_Bhz2NelC.mjs';

function ArchivePanel($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { sortedPosts = [] } = $$props;
		let tags = [];
		let categories = [];

		function formatDate(date) {
			const d = new Date(date);
			const month = (d.getMonth() + 1).toString().padStart(2, "0");
			const day = d.getDate().toString().padStart(2, "0");

			return `${month}-${day}`;
		}

		function formatTag(tagList) {
			return tagList.map((t) => `#${t}`).join(" ");
		}

		function isCategoryMatch(category, targets) {
			const postParts = getCategoryPathParts(category);

			if (!postParts || postParts.length === 0) return false;

			return targets.some((target) => {
				const targetParts = target.split(" / ").map((part) => part.trim()).filter((part) => part.length > 0);

				if (targetParts.length === 0) return false;
				if (targetParts.length > postParts.length) return false;

				return targetParts.every((part, index) => part === postParts[index]);
			});
		}

		let groups = derived(() => {
			let filteredPosts = sortedPosts.map((post) => ({
				...post,
				data: { ...post.data, published: new Date(post.data.published) }
			}));

			if (tags.length > 0) {
				filteredPosts = filteredPosts.filter((post) => {
					const postTags = parseTags(post.data.tags);

					return postTags.some((tag) => tags.includes(tag));
				});
			}

			if (categories.length > 0) {
				filteredPosts = filteredPosts.filter((post) => isCategoryMatch(post.data.category, categories));
			}

			// 按发布时间倒序排序，确保不受置顶影响
			filteredPosts = filteredPosts.slice().sort((a, b) => b.data.published.getTime() - a.data.published.getTime());

			const grouped = filteredPosts.reduce(
				(acc, post) => {
					const year = post.data.published.getFullYear();

					if (!acc[year]) {
						acc[year] = [];
					}

					acc[year].push(post);

					return acc;
				},
				{}
			);

			const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
				year: Number.parseInt(yearStr, 10),
				posts: grouped[Number.parseInt(yearStr, 10)]
			}));

			groupedPostsArray.sort((a, b) => b.year - a.year);

			return groupedPostsArray;
		});

		$$renderer.push(`<div><!--[-->`);

		const each_array = ensure_array_like(groups());

		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let group = each_array[$$index_1];

			$$renderer.push(`<div><div class="flex flex-row w-full items-center h-15"><div class="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">${escape_html(group.year)}</div> <div class="w-[15%] md:w-[10%]"><div class="h-3 w-3 bg-none rounded-full outline-solid outline-(--primary) mx-auto outline-offset-2 z-50 outline-3"></div></div> <div class="w-[70%] md:w-[80%] transition text-left text-50">${escape_html(group.posts.length)} ${escape_html(i18n(group.posts.length === 1 ? I18nKey.postCount : I18nKey.postsCount))}</div></div> <!--[-->`);

			const each_array_1 = ensure_array_like(group.posts);

			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let post = each_array_1[$$index];

				$$renderer.push(`<a${attr('href', getPostUrl(post))}${attr('aria-label', post.data.title)} class="group btn-plain block! h-10 w-full rounded-lg hover:text-[initial]"><div class="flex flex-row justify-start items-center h-full"><div class="w-[15%] md:w-[10%] transition text-sm text-right text-50">${escape_html(formatDate(post.data.published))}</div> <div class="w-[15%] md:w-[10%] relative dash-line h-full flex items-center"><div class="transition-all mx-auto w-1 h-1 rounded group-hover:h-5 bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-(--primary) outline-4 z-50 outline-(--card-bg) group-hover:outline-(--btn-plain-bg-hover) group-active:outline-(--btn-plain-bg-active)"></div></div> <div class="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold group-hover:translate-x-1 transition-all group-hover:text-(--primary) text-75 pr-8 whitespace-nowrap text-ellipsis overflow-hidden">${escape_html(post.data.title)}</div> <div class="hidden md:block md:w-[15%] text-left text-sm transition whitespace-nowrap text-ellipsis overflow-hidden text-30">${escape_html(formatTag(post.data.tags))}</div></div></a>`);
			}

			$$renderer.push(`<!--]--></div>`);
		}

		$$renderer.push(`<!--]--></div>`);
	});
}

export { ArchivePanel as default };
