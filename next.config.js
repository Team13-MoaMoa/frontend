/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // FIXME: 우리 서비스의 S3주소로 대체하기
    domains: ['image.idus.com', 'moamoa-s3.s3.ap-northeast-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
