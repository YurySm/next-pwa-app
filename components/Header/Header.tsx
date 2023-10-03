'use client'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.props';
import cn from 'classnames'
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderAuth } from "@/components/Header/HeaderAuth/HeaderAuth";
import { LanguageSwitcher, ThemeToggleDynamic } from "@/components";
import { usePathname } from 'next-intl/client';
import { useAuth } from "@/hooks/useAuth";

export function Header({ ...props }: HeaderProps): JSX.Element {
    const { user } = useAuth()

    //i18n
    const pathname = usePathname()

    return (
        <header
            className={cn(styles.header)}
            {...props}>
            <div className={styles.header__wrapper}>
                <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        className={styles.header__logo_img}
                        alt="Picture of the author"
                        src={'/logo.png'} />
                </Link>
                {
                    user ?
                        <div className={styles.header__nav}>
                            <Link className={cn(styles.header__nav_link, {
                                [styles.active]: pathname === '/search'
                            })} href="/search">Поиск</Link>
                            <Link className={cn(styles.header__nav_link, {
                                [styles.active]: pathname === '/history'
                            })} href="/history">Истиория поиска</Link>
                            <Link className={cn(styles.header__nav_link, {
                                [styles.active]: pathname === '/employees'
                            })} href="/employees">Список сотрудников</Link>
                        </div> : <div></div>
                }

                <ThemeToggleDynamic />

                <LanguageSwitcher className={styles.header__intl} />

                <HeaderAuth />
            </div>
        </header >
    );
};
