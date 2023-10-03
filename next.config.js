/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true
    }),
    env: {
        SERVER_URL: process.env.SERVER_URL
    }
}

module.exports =  withNextIntl(nextConfig)
