import { c as createComponent, e as renderSlot, a as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderScript, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import 'clsx';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import CryptoJS from 'crypto-js';
/* empty css                          */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$PasswordProtection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PasswordProtection;
  const { isEncrypted = false, password = "" } = Astro2.props;
  let encryptedContent = "";
  if (isEncrypted) {
    const html = await Astro2.slots.render("default");
    encryptedContent = CryptoJS.AES.encrypt(html, password).toString();
  }
  return renderTemplate`${!isEncrypted ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`${maybeRenderHead()}<div id="password-protection" class="password-protection" data-astro-cid-isrenuqs><div class="password-container" data-astro-cid-isrenuqs><div class="lock-icon" data-astro-cid-isrenuqs><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-isrenuqs><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" fill="currentColor" data-astro-cid-isrenuqs></path></svg></div><h2 class="text-90" data-astro-cid-isrenuqs>${i18n(I18nKey.passwordProtectedTitle)}</h2><p class="text-75" data-astro-cid-isrenuqs>${i18n(I18nKey.passwordProtectedDescription)}</p><div class="password-input-group" data-astro-cid-isrenuqs><div class="password-input-wrapper" data-astro-cid-isrenuqs><input type="password" id="password-input"${addAttribute(i18n(I18nKey.passwordPlaceholder), "placeholder")} class="password-input text-90" autocomplete="current-password" data-astro-cid-isrenuqs><button id="toggle-password" class="toggle-password-btn text-50" type="button" aria-label="Toggle password visibility" data-astro-cid-isrenuqs><svg id="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-isrenuqs><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-astro-cid-isrenuqs></path><circle cx="12" cy="12" r="3" data-astro-cid-isrenuqs></circle></svg><svg id="eye-off-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;" data-astro-cid-isrenuqs><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" data-astro-cid-isrenuqs></path><line x1="1" y1="1" x2="23" y2="23" data-astro-cid-isrenuqs></line></svg></button></div><button id="unlock-btn" class="unlock-button" data-astro-cid-isrenuqs>${i18n(I18nKey.passwordUnlock)}</button></div><div id="error-message" class="error-message" style="display: none;" data-astro-cid-isrenuqs>${i18n(I18nKey.passwordIncorrect)}</div></div></div>

    <div id="decrypted-content" class="decrypted-content" style="display: none;"${addAttribute(encryptedContent, "data-encrypted")} data-astro-cid-isrenuqs></div>

    ${renderScript($$result, "/workspaces/neofaithcollective/src/components/common/passwordProtection.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/workspaces/neofaithcollective/src/components/common/passwordProtection.astro", void 0);

export { $$PasswordProtection as default };
