import { c as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, a as renderTemplate, r as renderComponent, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { g as getIconSvg, h as hasIcon } from './grid_7BbutKON.mjs';
/* empty css                          */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    icon,
    class: className = "",
    style = "",
    size = "md",
    color,
    fallback = "\u25CF",
    loading = "lazy"
  } = Astro2.props;
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  };
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const colorStyle = color ? `color: ${color};` : "";
  const combinedStyle = `${colorStyle}${style}`;
  const combinedClass = `${sizeClass} ${className}`.trim();
  const staticSvg = getIconSvg(icon);
  const isStatic = hasIcon(icon);
  return renderTemplate`${isStatic ? renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-flex items-center justify-center inline-icon ${combinedClass}`, "class")}${addAttribute(combinedStyle, "style")} aria-hidden="true">${unescapeHTML(staticSvg)}</span>` : renderTemplate`<span${addAttribute(`inline-flex items-center justify-center ${combinedClass}`, "class")}${addAttribute(combinedStyle, "style")}>${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": icon, "loading": loading })}</span>`}`;
}, "/workspaces/neofaithcollective/src/components/common/icon.astro", void 0);

export { $$Icon as default };
