/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import enTranslationMessages from './en.json';
import esTranslationMessages from './es.json';

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const appLocales = [
    'en',
    'es'
];

const DEFAULT_LOCALE = 'es';

export const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE
        ? formatTranslationMessages(DEFAULT_LOCALE, esTranslationMessages)
        : {};
    return Object.keys(messages).reduce((formattedMessages, key) => {
        const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
            ? defaultFormattedMessages[key]
            : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    }, {});
};

export const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
    es: formatTranslationMessages('es', esTranslationMessages)
};
