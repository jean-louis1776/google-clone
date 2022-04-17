/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["www.google.com"],
    },
    env: {
        API_KEY: "AIzaSyA-ZigJpT5cXsvS_sGWUkCP4Vm6kRwr_l4",
        CONTEXT_KEY: "2f72836b8df2459e8",
    },
}

module.exports = nextConfig
