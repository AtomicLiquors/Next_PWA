/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const pwaConfig = {
    dest: 'public',
};

const nextConfig = {
//    reactStrictMode: true,
};

export default withPWA({ ...nextConfig, ...pwaConfig });