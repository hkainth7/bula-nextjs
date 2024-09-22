import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { Box, Stack, Typography } from "@mui/material";
import homepageContent from "./homepageContent.json";
import SiteMap from "../_components/SiteMap";
import EmblaCarousel from "../_components/EmblaCarousel";
import BannerImage from "@/public/assets/banner-image.jpg";
import ExperienceImage from "@/public/assets/bula-experience.jpg";
import CateringBula from "@/public/assets/catering-bula.jpg";
import WhoWeAre from "@/public/assets/who-we-are.jpg";
import styles from "./homepage.module.css";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const discoverData = [
	{
		title: "Catering",
		content:
			"Make your event unforgettable with our hookah catering service. We offer top-quality hookahs, a variety of flavors, and a professional setup for a unique experience your guests will love",
		imgSrc: CateringBula,
		href: "/Catering",
		linkText: "Explore catering options...",
	},
	{
		title: "Flavors & Experience",
		content:
			"At Bula Hookah Lounge, we offer a wide range of hookah flavors to suit every taste. Whether you’re in the mood for something fruity or bold, our carefully curated selection promises an exceptional smoking experience",
		imgSrc: ExperienceImage,
		href: "/Contact",
		linkText: "Contact us...",
	},
	{
		title: "Who We Are",
		content:
			"Discover the vibe at Bula Hookah Lounge, where premium hookahs meet a laid-back atmosphere. Learn more about our story and what makes us the perfect spot to unwind",
		imgSrc: WhoWeAre,
		href: "/About",
		linkText: "Read more about us...",
	},
];

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
					<Typography variant="h1" className={styles.mainHeading}>
						<span className={styles.mainHeadingColor}>Bula Hookah</span> Lounge
					</Typography>
					<Typography variant="body1" className={styles.headingSlogan}>
						{homepageContent.slogan}
					</Typography>
				</Stack>
			</Stack>
			<Stack alignItems="center" className={styles.captionContainer}>
				<Typography variant="h2" className={styles.headingCaption}>
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
