/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "192.168.0.105",
    "192.168.0.105:3000",
    "localhost:3000",
    "127.0.0.1:3000"
  ],
};

export default nextConfig;
