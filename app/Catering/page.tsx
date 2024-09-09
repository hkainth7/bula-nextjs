import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import cateringContent from "./cateringContent.json";
import Image from "next/image";
import HookahModel from "@/public/assets/hookah-model.jpg";
import ContentBox from "../_components/ContentBox";
import { ContentTypography } from "../_components/ContentTypography";

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
					Bula Hookah Lounge: A Premier Hookah{" "}
					<span style={{ color: "#497445" }}>Catering Service</span>{" "}
				</Typography>
				<Box sx={{ position: "relative", height: "800px" }}>
					<Image
						src={HookahModel}
						alt="hookah model"
						height={800}
						width={600}
						style={{ opacity: 0.4 }}
					/>
					<ContentBox
						title={cateringContent.tagline}
						content={cateringContent.taglineContent}
						sx={{
							padding: "8px",
							textAlign: "center",
							position: "absolute",
							top: "25%",
							left: "50%",
							transform: "translate(-50%, -25%)",
							minWidth: "500px",
						}}
					/>
				</Box>
				<Box>
					<ContentBox
						title={cateringContent.hookahMenu}
						content={cateringContent.hookahMeuContent}
						sx={{ textAlign: "center" }}
					/>
					<ContentTypography
						sx={{ fontSize: "1.5rem", color: "#497445", lineHeight: "1.3" }}
					>
						{cateringContent.customFlavours}
					</ContentTypography>
				</Box>
				<Stack
					sx={{
						textAlign: "center",
						backgroundColor: "#2F3135",
						padding: "18px 12px",
					}}
					divider={<Divider flexItem sx={{ backgroundColor: "#497445" }} />}
					gap={2}
				>
					{cateringContentData.map((data, index) => (
						<ContentBox title={data.title} content={data.content} key={index} />
					))}
				</Stack>
			</Stack>
		</main>
	);
};

export default Catering;
