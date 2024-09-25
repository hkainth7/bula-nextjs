import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import cateringContent from "./cateringContent.json";
import Image from "next/image";
import HookahModel from "@/public/assets/hookah-model.jpg";
import styles from "./catering.module.css";
import { SocialLinks } from "../_components/SocialLinks";

interface CateringContentData {
	title: string;
	content: string;
}

const Catering = () => {
	const cateringContentData: CateringContentData[] = [
		{
			title: cateringContent.customizablePackage,
			content: cateringContent.customizablePackageContent,
		},
		{
			title: cateringContent.exceptionalExperience,
			content: cateringContent.exceptionalExperienceContent,
		},
		{
			title: cateringContent.customerService,
			content: cateringContent.customerServiceContent,
		},
		{
			title: cateringContent.howItWorks,
			content: cateringContent.howItWorksContent,
		},
	];

	return (
		<main className={styles.mainContainer}>
			<Stack alignItems="center" gap={3}>
				<Typography
					variant="h1"
					textAlign="center"
					className={styles.mainTitle}
				>
					Bula Hookah Lounge: A Premier Hookah{" "}
					<span className={styles.spanColor}>Catering Service</span>{" "}
				</Typography>
				<Stack className={styles.bannerContainer}>
					<Stack className={styles.bannerContentBox} gap={4}>
						<Typography variant="h3" className={styles.title}>
							{cateringContent.tagline}
						</Typography>
						<Typography className={styles.content}>
							{cateringContent.taglineContent}
						</Typography>
						<Stack direction="row" alignItems="center">
							<Typography className={styles.cta}>Inquire now:</Typography>
							<SocialLinks />
						</Stack>
					</Stack>
					<Box>
						<Image
							src={HookahModel}
							priority={true}
							alt="hookah model"
							className={styles.bannerImage}
						/>
					</Box>
				</Stack>
				<Box>
					<Stack gap={2} className={styles.titleContainer}>
						<Typography variant="h3" className={styles.title}>
							{cateringContent.hookahMenu}
						</Typography>
						<Typography className={styles.content}>
							{cateringContent.hookahMeuContent}
						</Typography>
						<Typography className={styles.customTitle}>
							{cateringContent.customFlavours}
						</Typography>
					</Stack>
				</Box>
				<Stack className={styles.contentBox} gap={2}>
					{cateringContentData.map((data, index) => (
						<Box className={styles.infoContainer} key={index}>
							<Typography className={styles.contentTitle} variant="h3">
								{data.title}
							</Typography>
							<Typography className={styles.content}>{data.content}</Typography>
						</Box>
					))}
				</Stack>
			</Stack>
		</main>
	);
};

export default Catering;
