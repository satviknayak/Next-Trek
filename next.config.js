/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images2.imgbox.com",
      "cdn.britannica.com",
      "www.w3schools.com",
    ],
  },
}