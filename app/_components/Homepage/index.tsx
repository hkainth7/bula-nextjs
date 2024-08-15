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
				sx={{ marginY: "20px", fontWeight: "light" }}
			>
				Experience the ultimate hookah lounge vibe in our inviting space. Dive
				into the finest flavors, unwind from work, and enjoy in our relaxed
				environment. It is the perfect place for a night out.
			</Typography>
			{/* <Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1,
					opacity: 0.5,
				}}
			>
				<Image
					src={GreenSmoke}
					alt="header background"
					layout="fill"
					objectFit="cover"
					quality={100}
					priority={true}
				/>
			</Box> */}
			<EmblaCarousel options={OPTIONS} />
			<SiteMap />
		</Stack>
	);
};

export default Homepage;
