const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isGithubPages = false;

let basePath;
let assetPrefix;

/** We need to set basePath and assetPrefix if hosted on github domain as it will be hosted on {user}.github.io/{repo} */
if (isGithubActions && isGithubPages) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: true,
  transpilePackages: ['echarts', 'zrender'],
  images: {
    loader: 'imgix',
    path: 'https://sws.imgix.net/',
  },
};

module.exports = nextConfig;
