import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import cateringContent from "./cateringContent.json";
import Image from "next/image";
import HookahModel from "@/public/assets/hookah-model.jpg";
import styles from "./catering.module.css";
import { SocialLinks } from "../_components/SocialLinks";
import HookahPackages from "./HookahPackages";

const Catering = () => {
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
				<Box sx={{ padding: "14px" }}>
					<Stack gap={2} className={styles.titleContainer}>
						<Typography variant="h3" className={styles.title}>
							{cateringContent.hookahMenu}
						</Typography>
						<Typography className={styles.content}>
							{cateringContent.hookahMeuContent}
						</Typography>
					</Stack>
					<Box sx={{ marginTop: "100px" }}>
						<Typography
							variant="h4"
							sx={{ fontSize: "1.35em", marginBottom: "5px" }}
						>
							Flip through our packages below to plan your next get together
						</Typography>
						<Typography variant="caption">
							* All packages are subject to gratiuity and tax
						</Typography>
						<HookahPackages />
					</Box>
				</Box>
			</Stack>
		</main>
	);
};

export default Catering;
