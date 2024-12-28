import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import path from 'path';
import fs from 'fs';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    const messagesPath = path.join(process.cwd(), 'public', 'messages', `${locale}.json`);
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));

    return {
        locale,
        messages,
    };
});
