import type { Metadata } from 'next'
import {NextIntlClientProvider} from 'next-intl';
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

type Props = {
    children: ReactNode;
    params: {locale: string};
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export async function generateStaticParams() {
    return ['ru', 'en'].map((locale) => ({locale}));
}

export default async function RootLayout({
       children,
       params: {locale}
   }: Props) {
    const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

