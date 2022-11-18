/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config, options) {
    const { isServer } = options;

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: [/\.svg$/, /\.woff$/],
      loader: "file-loader",
      options: {
        name: "[name].[hash:8].[ext]",
        publicPath: `/_next/static/images/`, //specify the base path
        outputPath: "static/images", //and output path
      },
    });
    return config;
  },
};

module.exports = nextConfig;
