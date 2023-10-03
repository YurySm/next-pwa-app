import type { Metadata } from 'next'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { ReactNode} from "react";
import {roboto} from "@/utils";
import Providers from "@/providers/Providers";
import {SITE_NAME} from "@/constans/app.constans";

import './globals.scss'

export const metadata: Metadata = {
  title: {
      absolute: SITE_NAME,
      template: `%s | ${SITE_NAME}`
  },
  description: 'PWA Next App',
  manifest: '/manifest.json'
}

export default function RootLayout({
    children,
    params
}: {
  children: ReactNode,
    params: {locale: string}
}) {

    const locale = useLocale();

    if (params.locale !== locale) {
        notFound();
    }

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}

