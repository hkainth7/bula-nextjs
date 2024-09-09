import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import aboutContent from "./aboutContent.json";
import Image from "next/image";
import AboutBanner from "@/public/assets/about-banner.jpg";
import OutdoorBula from "@/public/assets/bula-lounge-outdoor.jpg";
import { ContentTypography } from "../_components/ContentTypography";
import ContentBox from "../_components/ContentBox";

interface AboutContentData {
	title: string;
	content: string;
}

const About = () => {
	const aboutContentData: AboutContentData[] = [
		{
			title: aboutContent.worldClass,
			content: aboutContent.worldClassContent,
		},
		{
			title: aboutContent.celebrity,
			content: aboutContent.celebrityContent,
		},
		{
			title: aboutContent.catering,
			content: aboutContent.cateringContent,
		},
		{
			title: aboutContent.experience,
			content: aboutContent.experienceContent,
		},
	];

	return (
		<main style={{ maxWidth: "1024px" }}>
			<Stack
				alignItems="center"
				sx={{ padding: "8px", paddingY: "20px" }}
				gap={3}
			>
				<Typography
					variant="h1"
					textAlign="center"
					sx={{
						marginY: "10px",
						fontWeight: "bold",
						padding: "8px",
						fontSize: "3rem",
					}}
				>
					Bula Hookah Lounge The World’s First{" "}
					<span style={{ color: "#497445" }}>Fijian</span>-Themed{" "}
					<span style={{ color: "#497445" }}>Hookah</span> Experience
				</Typography>
				<ContentTypography variant="body1">
					{aboutContent.ourJourneyContent}
				</ContentTypography>
				<Image
					src={AboutBanner}
					alt="original shishas"
					width={1024}
					height={550}
					priority={true}
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
				<Stack sx={{ width: "100%" }} alignItems="center">
					<Stack>
						<Typography
							variant="h2"
							textAlign="center"
							sx={{
								marginY: "10px",
								fontWeight: "bold",
								padding: "8px",
								fontSize: "2.5rem",
							}}
						>
							{aboutContent.ourJourney}
						</Typography>
						<Box sx={{ maxWidth: "450px" }}>
							<ContentTypography>
								{aboutContent.ourJourneyContent}
							</ContentTypography>
						</Box>
					</Stack>
					<Image
						src={OutdoorBula}
						alt="bula entrance"
						style={{
							maxHeight: "314px",
							maxWidth: "478px",
						}}
						layout="responsive"
					/>
				</Stack>
				<Stack
					sx={{
						textAlign: "center",
						backgroundColor: "#2F3135",
						padding: "18px 12px",
					}}
					divider={<Divider flexItem sx={{ backgroundColor: "#497445" }} />}
					gap={2}
				>
					{aboutContentData.map((data, index) => (
						<ContentBox title={data.title} content={data.content} key={index} />
					))}
				</Stack>
			</Stack>
		</main>
	);
};

export default About;
