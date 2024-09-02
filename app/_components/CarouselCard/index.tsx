import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CarouselCardProps } from "./types";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const CarouselCard = (props: CarouselCardProps) => {
	const { title, src, description } = props;

	const DescriptionTypography = styled(Typography)({
		color: "white",
		fontSize: "18px",
		lineHeight: "1.6",
		fontWeight: "light",
	});

	return (
		<Card
			sx={{
				backgroundColor: "#121212",
				borderRadius: "8px",
				height: "100%",
				border: "2px solid #497445",
				padding: "8px",
			}}
		>
			<CardHeader
				sx={{ color: "white", padding: "8px", paddingLeft: "20px" }}
				title={title}
				titleTypographyProps={{
					variant: "h2",
					fontSize: "2.0rem",
					fontWeight: "500",
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "8px",
				}}
			>
				<Image src={src} height={250} width={200} alt={`${title} hookah`} />
				<Box sx={{ padding: "0px 14px" }}>
					<DescriptionTypography variant="body1" color={"white"}>
						{description}
					</DescriptionTypography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CarouselCard;
