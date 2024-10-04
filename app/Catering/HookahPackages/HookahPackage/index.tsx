import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PalmTree from "@/public/assets/palmTree.png";
import { Card, Chip, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { HookahPackageData } from "../types";

interface HookahPackageProps {
	hookahPackage: HookahPackageData;
}

export default function HookahPackage(props: HookahPackageProps) {
	const { hookahPackage } = props;
	return (
		<Box sx={{ width: "100%" }}>
			<Card variant="outlined" sx={{ backgroundColor: "transparent" }}>
				<Box>
					<Chip
						size="small"
						label={hookahPackage.chipTitle}
						variant="outlined"
						sx={{ color: "white", marginBottom: "20px" }}
					/>
					<Typography sx={{ color: "white" }} variant="h3">
						{hookahPackage.title}
					</Typography>
					<Typography variant="body2" sx={{ color: "#ccc", marginY: "20px" }}>
						{hookahPackage.description}
					</Typography>
				</Box>
				<Divider sx={{ backgroundColor: "#497445", marginY: "10px" }} />
				<List>
					<Stack gap={2}>
						{hookahPackage.listItems.map((item, index) => (
							<ListItem disablePadding key={index}>
								<Image
									src={PalmTree}
									alt="palm tree"
									width={30}
									style={{ margin: "0 10px" }}
								/>
								<ListItemText primary={item} sx={{ color: "white" }} />
							</ListItem>
						))}
					</Stack>
				</List>
				<Divider sx={{ backgroundColor: "#497445", marginY: "10px" }} />
				<Box sx={{ textAlign: "right", padding: "4px" }}>
					<Typography sx={{ mr: "auto", color: "white", fontSize: "1.30em" }}>
						{hookahPackage.price}
					</Typography>
				</Box>
			</Card>
		</Box>
	);
}
