"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { Stack, Typography } from "@mui/material";
import homepageContent from "./homepageContent.json";
import SiteMap from "../_components/SiteMap";
import EmblaCarousel from "../_components/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return (
		<Stack>
			<Stack padding={5} paddingX={4}>
				<Stack alignItems="center">
					<Typography
						textAlign="center"
						sx={{
							fontSize: "40px",
							marginY: "10px",
							fontWeight: "bold",
							padding: "4px",
						}}
					>
						<span style={{ color: "#497445" }}>Bula Hookah</span> Lounge
					</Typography>
					<Typography
						variant="body1"
						textAlign={"center"}
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
				<EmblaCarousel options={OPTIONS} />
			</Stack>
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
