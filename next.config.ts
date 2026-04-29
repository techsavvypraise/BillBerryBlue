const nextConfig = {
  
  output: 'export',
 
  images: {
    unoptimized: true,
  },

  // Optional but Recommended Settings
  trailingSlash: true,           // Good for static hosting
  skipTrailingSlashRedirect: true,

  // Improve build performance and debugging
  reactStrictMode: true,
 
};

module.exports = nextConfig;