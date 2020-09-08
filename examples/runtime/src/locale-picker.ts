import {LitElement, html} from 'lit-element';
import {getLocale, setLocaleFromUrl} from './localization.js';
import {allLocales} from './locale-codes.js';
import {Localized} from 'lit-localize/localized-element.js';

const localeNames: {
  [L in typeof allLocales[number]]: string;
} = {
  en: 'English',
  'es-419': 'Español (Latinoamérica)‎',
  zh_CN: '中文 (简体)',
};

// Note we apply the Localized mixin here so that we're always up to date with
// the active locale (the result of getLocale()) when the locale changes via a
// history navigation.
export class LocalePicker extends Localized(LitElement) {
  render() {
    return html`
      <select @change=${this.localeChanged}>
        ${allLocales.map(
          (locale) =>
            html`<option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>`
        )}
      </select>
    `;
  }

  localeChanged(event: Event) {
    const newLocale = (event.target as HTMLSelectElement).value;
    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('locale', newLocale);
      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}
customElements.define('locale-picker', LocalePicker);
