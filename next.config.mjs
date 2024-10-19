/** @type {import('next').NextConfig} */
const nextConfig = {
  
  
  output: 'export',
   /**  basePath: '/cleanstar',
    assetPrefix: '/cleanstar', */
    images: {
        unoptimized: true,  // Disable image optimization for static exports
    },  
    trailingSlash: true, // Optional: Adds trailing slashes for SEO

};
