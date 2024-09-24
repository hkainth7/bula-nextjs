import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import aboutContent from "./aboutContent.json";
import Image from "next/image";
import AboutBanner from "@/public/assets/about-banner.jpg";
import OutdoorBula from "@/public/assets/bula-lounge-outdoor.jpg";
import styles from "./about.module.css";
import Link from "next/link";

interface AboutContentData {
	title: string;
	content: string;
}

const About = () => {
	const aboutContentData: AboutContentData[] = [
		{
			title: aboutContent.worldClass,
			content: aboutContent.worldClassContent,
		},
		{
			title: aboutContent.celebrity,
			content: aboutContent.celebrityContent,
		},
		{
			title: aboutContent.catering,
			content: aboutContent.cateringContent,
		},
		{
			title: aboutContent.experience,
			content: aboutContent.experienceContent,
		},
	];

	return (
		<main className={styles.mainContainer}>
			<Stack alignItems="center" gap={3} className={styles.container}>
				<Typography variant="h1" textAlign="center" className={styles.title}>
					Bula Hookah Lounge The World’s First{" "}
					<span className={styles.spanColor}>Fijian</span> Themed{" "}
					<span className={styles.spanColor}>Hookah</span> Experience
				</Typography>
				<Typography variant="body1" className={styles.content}>
					{aboutContent.ourJourneyContent}
				</Typography>
				<Image
					src={AboutBanner}
					alt="original shishas"
					width={1024}
					height={550}
					priority={true}
					className={styles.bannerImage}
				/>
				<Stack className={styles.contentContainer} alignItems="center">
					<Stack>
						<Typography variant="h2" className={styles.journeyTitle}>
							{aboutContent.ourJourney}
						</Typography>
						<Box className={styles.journeyContentContainer}>
							<Typography className={styles.ourJourneyContent}>
								{aboutContent.ourJourneyContent}
							</Typography>
						</Box>
					</Stack>
					<Image
						src={OutdoorBula}
						alt="bula entrance"
						className={styles.outdoorImage}
						layout="responsive"
					/>
				</Stack>
				<Stack className={styles.contentBox} gap={2}>
					{aboutContentData.map((data, index) => (
						<Box className={styles.infoContainer} key={index}>
							<Typography className={styles.contentTitle} variant="h3">
								{data.title}
							</Typography>
							<Typography className={styles.content}>{data.content}</Typography>
							{data.title === "Hookah Catering" ? (
								<Link className={styles.link} href="/Catering">
									Learn More...
								</Link>
							) : null}
						</Box>
					))}
				</Stack>
			</Stack>
		</main>
	);
};

export default About;
