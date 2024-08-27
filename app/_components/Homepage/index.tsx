"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { Stack, Typography, useTheme } from "@mui/material";
import SiteMap from "../SiteMap";
import homepageContent from "./homepageContent.json";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return (
		<Stack>
			<Stack padding={5} paddingX={4}>
				<Stack alignItems="center">
					<Typography
						variant="h1"
						textAlign="center"
						sx={{
							fontSize: "40px",
							marginY: "10px",
							fontWeight: "bold",
							padding: "4px",
						}}
					>
						Welcome to <span style={{ color: "#497445" }}>Bula Hookah</span>{" "}
						Lounge!
					</Typography>
					<Typography
						variant="h6"
						textAlign={"center"}
						sx={{
							marginY: "20px",
							fontWeight: "light",
							maxWidth: "600px",
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
