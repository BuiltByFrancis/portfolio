/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: { fetches: { fullUrl: true } },
  experimental: {
    webpackBuildWorker: true,
    authInterrupts: true,
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
                {
                  name: 'prefixIds',
                  params: {
                    prefix: {
                      toString() {
                        this.counter = this.counter || 0;

                        return `id-${this.counter++}`;
                      },
                    }, // Stable ID
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
