import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { Box, Stack, Typography } from "@mui/material";
import SiteMap from "../SiteMap";
import GreenSmoke from "@/public/assets/green-marble.png";

const OPTIONS: EmblaOptionsType = { loop: true };

const Homepage = () => {
	return (
		<Stack>
			<Typography
				variant="h1"
				sx={{
					fontSize: "40px",
					marginY: "10px",
					fontWeight: "bold",
					padding: "4px",
					textAlign: "center",
				}}
			>
				Welcome to <span style={{ color: "#497445" }}>Bula Hookah</span> Lounge!
			</Typography>
			<Typography
				variant="h6"
				textAlign={"center"}
				sx={{ marginY: "20px", fontWeight: "light", paddingX: "12px" }}
			>
				Experience the ultimate hookah lounge vibe in our inviting space. Dive
				into the finest flavors, unwind from work, and enjoy in our relaxed
				environment. It is the perfect place for a night out.
			</Typography>
			<EmblaCarousel options={OPTIONS} />
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
