"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import aboutContent from "./aboutContent.json";

const About = () => {
	const Title = styled(Typography)(({ theme }) => ({
		...theme.typography.h6,
		marginBottom: "15px",
	}));

	const ContentTypography = styled(Typography)({
		fontWeight: "lighter",
	});

	const ContentBox = styled(Box)({
		border: "2px solid #497445",
		borderRadius: "30px 0 30px 0",
		padding: "18px",
		textAlign: "center",
	});

	return (
		<main>
			<Stack
				alignItems="center"
				sx={{ padding: "8px", paddingY: "20px" }}
				gap={3}
			>
				<ContentBox>
					<Title>{aboutContent.welcome}</Title>
					<ContentTypography>{aboutContent.welcomeContent}</ContentTypography>
				</ContentBox>
				<ContentBox>
					<Title>{aboutContent.ourJourney}</Title>
					<ContentTypography>
						{aboutContent.ourJourneyContent}
					</ContentTypography>
				</ContentBox>
				<ContentBox>
					<Title>{aboutContent.worldClass}</Title>
					<ContentTypography>
						{aboutContent.worldClassContent}
					</ContentTypography>
				</ContentBox>
				<ContentBox>
					<Title>{aboutContent.celebrity}</Title>
					<ContentTypography>{aboutContent.celebrityContent}</ContentTypography>
				</ContentBox>
				<ContentBox>
					<Title>{aboutContent.catering}</Title>
					<ContentTypography>{aboutContent.cateringContent}</ContentTypography>
				</ContentBox>
				<ContentBox>
					<Title>{aboutContent.experience}</Title>
					<ContentTypography>
						{aboutContent.experienceContent}
					</ContentTypography>
				</ContentBox>
			</Stack>
		</main>
	);
};

export default About;
