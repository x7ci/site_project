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
  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
  images: {
    loader: 'imgix',
    path: 'https://sws.imgix.net/',
  },
};

module.exports = nextConfig;
