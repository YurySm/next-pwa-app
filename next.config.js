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
    },
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}

module.exports = withNextIntl(nextConfig)
