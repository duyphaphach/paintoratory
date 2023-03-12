require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true
  },

  typescript: {
    ignoreBuildErrors: true
  },

  async rewrites () {
    return [
      {
        source: '/',
        destination: '/'
      }
    ]
  },

  publicRuntimeConfig: {
    API_PROXY_URL: process.env.API_PROXY_URL
  },

  webpack (config) {
    const regexLikeCss = /\.(css|scss|sass)(\.webpack\[javascript\/auto\])?$/

    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|gif|webp|ico|bmp)$/i,
      loader: 'next-image-loader',
      dependency: { not: ['url'] }, // @ts-ignore
      issuer: regexLikeCss
    })

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource'
    })
    return config
  }
}

module.exports = nextConfig
