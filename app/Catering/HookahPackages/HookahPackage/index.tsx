import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PalmTree from "@/public/assets/palmTree.png";
import { Card, Chip, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { HookahPackageData } from "../types";
import styles from "./hookahPackage.module.css";

interface HookahPackageProps {
	hookahPackage: HookahPackageData;
}

export default function HookahPackage(props: HookahPackageProps) {
	const { hookahPackage } = props;
	return (
		<Box className={styles.container}>
			<Card variant="outlined" className={styles.card}>
				<Box>
					<Chip
						size="small"
						label={hookahPackage.chipTitle}
						variant="outlined"
						className={styles.chip}
					/>
					<Typography className={styles.title} variant="h3">
						{hookahPackage.title}
					</Typography>
					<Typography variant="body2" className={styles.description}>
						{hookahPackage.description}
					</Typography>
				</Box>
				<Divider className={styles.divider} />
				<List>
					<Stack gap={2}>
						{hookahPackage.listItems.map((item, index) => (
							<ListItem disablePadding key={index}>
								<Image
									src={PalmTree}
									alt="palm tree"
									width={30}
									className={styles.image}
								/>
								<ListItemText primary={item} className={styles.listItemText} />
							</ListItem>
						))}
					</Stack>
				</List>
				<Divider className={styles.divider} />
				<Box className={styles.priceContainer}>
					<Typography className={styles.price}>
						{hookahPackage.price}
					</Typography>
				</Box>
			</Card>
		</Box>
	);
}
