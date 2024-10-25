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
	display: "swap",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: "Best Hookah Lounge in Vancouver & Burnaby - Bula Lounge",
	description:
		"Discover Bula Hookah Lounge, the best hookah lounge in Vancouver and Burnaby. Relax with premium Shisha and create unforgettable moments in an inviting atmosphere. Happiness is a puff away!",
	icons: {
		icon: "./favicon.ico",
	},
	keywords: ["hookah", "lounge", "shisha,"],
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

const structuredData = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Bula Hookah Lounge",
	url: "https://www.bulalounge.com",
	logo: "https://www.bulalounge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.e9f136b7.png&w=256&q=75",
	description:
		"Step into Bula Hookah Lounge, where unforgettable moments await. Relax, unwind, and elevate your experience with our carefully crafted Shisha. Happiness is just a puff away!",
	telephone: "+1-236-558-3099",
	address: {
		"@type": "PostalAddress",
		streetAddress: "4027 Hastings St",
		addressLocality: "Burnaby",
		addressRegion: "BC",
		postalCode: "V5C 2J2", // Include this if you have it
		addressCountry: "Canada",
	},
	openingHours: ["Sun-Tue 18:30-00:30", "Fri-Sat 18:30-02:30"],
	sameAs: [
		"https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==",
		"https://www.facebook.com/bulahookahlounge",
		"https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					key="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
			</head>
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
