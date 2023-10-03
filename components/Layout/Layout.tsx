// 'use client'
import styles from './Layout.module.scss'
import { LayoutProps } from './Layout.props';
import {JSX} from "react";


import {Header, ThemeToggleDynamic} from "@/components";
// import {usePathname} from 'next-intl/client';

export function Layout ({ children }: LayoutProps): JSX.Element {

    //i18n
    // const pathname = usePathname()

    return (
        <>
            <Header/>
            {children}
        </>
    );
};
