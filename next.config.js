const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix;
let basePath;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  basePath,
  reactStrictMode: true,
  transpilePackages: ['echarts', 'zrender'],
  images: {
    loader: 'imgix',
    path: 'https://sws.imgix.net/',
  }
};

module.exports = nextConfig;
