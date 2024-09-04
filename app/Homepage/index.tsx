"use client";

import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import { Box, Stack, Typography } from "@mui/material";
import homepageContent from "./homepageContent.json";
import SiteMap from "../_components/SiteMap";
import EmblaCarousel from "../_components/EmblaCarousel";
import BannerImage from "@/public/assets/banner-image.jpg";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return (
		<Stack>
			<Stack
				padding={2}
				sx={{ position: "relative", height: "100vh" }}
				alignItems="center"
				justifyContent="center"
			>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: -1,
						opacity: 0.7,
					}}
				>
					<Image
						src={BannerImage}
						alt="banner image"
						fill
						quality={100}
						priority={true}
						style={{ objectFit: "cover", opacity: "0.45" }}
					/>
				</Box>
				<Stack>
					<Typography
						sx={{
							fontSize: "4rem",
							marginY: "10px",
							fontWeight: "bold",
							padding: "4px",
						}}
					>
						<span style={{ color: "#497445" }}>Bula Hookah</span> Lounge
					</Typography>
					<Typography
						variant="body1"
						sx={{
							marginY: "20px",
							fontWeight: "light",
							maxWidth: "600px",
							fontSize: "1.25rem",
						}}
					>
						{homepageContent.tagLine}
					</Typography>
				</Stack>
			</Stack>
			<Box sx={{ padding: "40px" }}>
				<EmblaCarousel options={OPTIONS} />
			</Box>
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
