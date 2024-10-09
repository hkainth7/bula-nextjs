import type { Metadata, Viewport } from "next";
import Header from "./_components/Header";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "./_components/Footer";
import { Stack } from "@mui/material";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: "Hookah Lounge, Relax and Unwind - Bula Hookah Lounge",
	description:
		"Step into Bula Hookah Lounge, where unforgettable moments await. Relax, unwind, and elevate your experience with our carefully crafted Shisha. Happiness is just a puff away!",
	icons: {
		icon: "./favicon.ico",
	},
	keywords: "hookah, lounge, shisha,",
	openGraph: {
		type: "website",
		url: "https://bulalounge.com/",
		title: "Bula Lounge",
		description:
			"Bula Hookah Lounge offers a unique new experience, sharing unique fijian shisha flavours",
		images: [
			{
				url: "https://www.bulalounge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.e9f136b7.png&w=256&q=75",
				width: 800,
				height: 600,
				alt: "Og Image Alt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Bula Lounge",
		description:
			"Bula Hookah Lounge offers a unique new experience, sharing unique fijian shisha flavours",
		images: {
			url: "https://www.bulalounge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.e9f136b7.png&w=256&q=75",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Stack
					justifyContent={"space-between"}
					sx={{ height: "100vh" }}
					className={`${roboto.className}`}
				>
					<Header />
					{children}
					<Footer />
				</Stack>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
