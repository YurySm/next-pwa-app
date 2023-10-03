'use client'
import {usePathname, useRouter} from 'next-intl/client';
import {useLocale} from 'next-intl';
import styles from './LanguageSwicher.module.scss'
import {LanguageSwitcherProps} from "@/components/LanguageSwitcher/LanguageSwicher.props";
import {JSX} from "react";
import cn from "classnames";


export const LanguageSwitcher = ({className, ...props}: LanguageSwitcherProps): JSX.Element => {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const handleClick = ()  => {
        if (locale === 'en') {
            router.replace(pathname, {locale: 'ru'});
        } else {
            router.replace(pathname, {locale: 'en'});
        }

    }

    return (
        <div
            {...props}
            className={styles.lang}>
            <button
                className={cn(styles.lang__btn, className)}
                onClick={handleClick}>
                {locale === 'ru' ? 'EN' : 'RU'}
            </button>
        </div>
    );
}