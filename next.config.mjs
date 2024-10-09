/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	productionBrowserSourceMaps: false,
	reactStrictMode: true,
	async headers() {
		return [
			{
				// Apply these headers to all files under the root (public directory and all other files)
				source: "/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
