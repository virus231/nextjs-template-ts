/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.REACT_APP_URL
	},
	images: {
		domains: ["localhost"]
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:3000/api/:path*"
			}
		]
	}
}

module.exports = nextConfig
