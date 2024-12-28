'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from '@/i18n/routing';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname(); // 현재 경로 가져오기

    const changeLocale = (locale: string) => {
        const newPathname = `/${locale}${pathname.replace(/^\/(en|ko)/, '')}`; // 새 로케일로 경로 업데이트
        router.push(newPathname); // 새로운 경로로 이동
    };

    return (
        <header style={{ display: 'flex', gap: '10px', padding: '10px', background: '#f1f1f1' }}>
            <button onClick={() => changeLocale('ko')}>한글</button>
            <button onClick={() => changeLocale('en')}>English</button>
        </header>
    );
}
