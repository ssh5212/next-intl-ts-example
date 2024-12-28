import type { Metadata } from 'next';
import './../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
    title: 'AngelPlayer`s i18n',
    description: 'Sample code that applies next-intl in Next.js (App Router) and TypeScript environments.',
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // `params`에서 `locale`을 비동기로 가져옵니다.
    const { locale } = await params;

    // `locale`이 유효하지 않으면 404를 반환합니다.
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // 메시지를 비동기로 가져옵니다.
    const messages = await getMessages(locale as any);

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
