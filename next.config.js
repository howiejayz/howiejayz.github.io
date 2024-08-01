const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resizer.howiejayz.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  // experimental: {
  //   // reactCompiler: true,
  //   turbo: {
  //     resolveExtensions: [
  //       '.mdx',
  //       '.tsx',
  //       '.ts',
  //       '.jsx',
  //       '.js',
  //       '.mjs',
  //       '.json',
  //     ],
  //   },
  // },
};

module.exports = withMDX(nextConfig);
