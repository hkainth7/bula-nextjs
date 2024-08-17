"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import SiteMap from "../SiteMap";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	const theme = useTheme();
	const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
	return (
		<Stack>
			<Stack
				direction={isLargeUp ? "row" : "column"}
				alignItems={isLargeUp ? "center" : "center"}
				padding={5}
				paddingX={4}
			>
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
							paddingX: "12px",
							maxWidth: "600px",
						}}
					>
						Experience the ultimate hookah lounge vibe in our inviting space.
						Dive into the finest flavors, unwind from work, and enjoy in our
						relaxed environment. It is the perfect place for a night out.
					</Typography>
				</Stack>
				<EmblaCarousel options={OPTIONS} />
			</Stack>
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
