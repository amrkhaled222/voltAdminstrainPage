/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/dashboard",
				permanent: true,
			},
			// Wildcard path matching
		];
	},
};

export default nextConfig;
