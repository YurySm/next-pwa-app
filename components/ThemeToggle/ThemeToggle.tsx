'use client'

import { useTheme } from 'next-themes'
import dynamic from "next/dynamic";
import Image from "next/image";
import {useEffect} from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        theme === 'system' && setTheme('light')
    },[])

    return (
        <button
            onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}
        >
            {
                theme === 'light' ?
                    <Image
                        width={40}
                        height={40}
                        src={'/icons/theme/moon.png'}
                        alt={'dark'}/>
                    :
                    <Image
                        width={40}
                        height={40}
                        src={'/icons/theme/sun.png'}
                        alt={'light'}/>
            }
        </button>
    )
}

const ThemeToggleDynamic = dynamic(
    (() =>
        import('./ThemeToggle').then(({ ThemeToggle }) => ThemeToggle)) as any,
    { ssr: false }
) as any;

export default ThemeToggleDynamic