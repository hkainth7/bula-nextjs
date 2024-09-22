import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { Box, Stack, Typography } from "@mui/material";
import homepageContent from "./homepageContent.json";
import SiteMap from "../_components/SiteMap";
import EmblaCarousel from "../_components/EmblaCarousel";
import BannerImage from "@/public/assets/banner-image.jpg";
import styles from "./homepage.module.css";
import Link from "next/link";
import { Dela_Gothic_One, Roboto_Slab } from "next/font/google";
import { discoverData } from "./discoverData";

const OPTIONS: EmblaOptionsType = { loop: true };

const dela = Dela_Gothic_One({
	weight: ["400"],
	subsets: ["latin"],
});

const robSlab = Roboto_Slab({
	weight: ["400"],
	subsets: ["latin"],
});

const Homepage = () => {
	return (
		<Stack>
			<Stack className={styles.homeContainer}>
				<Box className={styles.backgroundImageContainer}>
					<Image
						src={BannerImage}
						alt="banner image"
						fill
						quality={100}
						priority={true}
						className={styles.backgroundImage}
					/>
				</Box>
				<Stack>
					<Typography
						variant="h1"
						className={`${styles.mainHeading} ${dela.className}`}
					>
						<span className={styles.mainHeadingColor}>BULA HOOKAH</span> LOUNGE
					</Typography>
					<Typography variant="body1" className={styles.headingSlogan}>
						{homepageContent.slogan}
					</Typography>
				</Stack>
			</Stack>
			<Stack alignItems="center" className={styles.captionContainer}>
				<Typography
					variant="h2"
					className={`${styles.headingCaption} ${robSlab.className}`}
				>
					{homepageContent.tagLine}
				</Typography>
			</Stack>
			<Stack className={styles.carouselContainer}>
				<EmblaCarousel options={OPTIONS} />
			</Stack>
			<Stack className={styles.discoverContainer}>
				<Typography className={styles.discoverText}>
					Discover Bula Hookah Lounge
				</Typography>
				<Stack
					justifyContent="space-around"
					className={styles.contentBox}
					gap={3}
				>
					{discoverData.map((data, index) => (
						<Stack
							className={`${styles.infoContainer} ${styles.offerContainer}`}
							gap={4}
							key={index}
						>
							<Box className={styles.backgroundImageContainer}>
								<Image
									src={data.imgSrc}
									alt="bula catering services"
									fill
									quality={100}
									priority={true}
									className={styles.backgroundImage}
								/>
							</Box>
							<Typography variant="h3" className={styles.title}>
								{data.title}
							</Typography>
							<Typography className={styles.content}>{data.content}</Typography>
							<Link className={styles.link} href={data.href}>
								{data.linkText}
							</Link>
						</Stack>
					))}
				</Stack>
			</Stack>
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
