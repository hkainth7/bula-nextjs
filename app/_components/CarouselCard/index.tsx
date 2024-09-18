import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { CarouselCardProps } from "./types";
import Image from "next/image";
import styles from "./carouselCard.module.css";

const CarouselCard = (props: CarouselCardProps) => {
	const { title, src, description } = props;

	return (
		<Card className={styles.card}>
			<CardHeader
				title={title}
				className={styles.cardHeader}
				titleTypographyProps={{
					variant: "h2",
					fontSize: "2.0rem",
					fontWeight: "500",
				}}
			/>
			<CardContent className={styles.cardContent}>
				<Image src={src} height={250} width={200} alt={`${title} hookah`} />
				<Box className={styles.descriptionContainer}>
					<Typography variant="body1" className={styles.description}>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CarouselCard;
