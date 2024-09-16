"use client";

import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { Box, Stack, Typography } from "@mui/material";
import homepageContent from "./homepageContent.json";
import SiteMap from "../_components/SiteMap";
import EmblaCarousel from "../_components/EmblaCarousel";
import BannerImage from "@/public/assets/banner-image.jpg";
import styles from "./homepage.module.css";

const OPTIONS: EmblaOptionsType = { loop: true };

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
					<Typography className={styles.mainHeading}>
						<span className={styles.mainHeadingColor}>Bula Hookah</span> Lounge
					</Typography>
					<Typography variant="body1" className={styles.headingCaption}>
						{homepageContent.tagLine}
					</Typography>
				</Stack>
			</Stack>
			<Box className={styles.carouselContainer}>
				<EmblaCarousel options={OPTIONS} />
			</Box>
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
