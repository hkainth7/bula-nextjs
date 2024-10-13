import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./sitemap.module.css";
import { SocialLinks } from "../SocialLinks";

const SiteMap = () => {
	const infoData = [
		{
			icon: <MailOutlineIcon />,
			content: "info@bulalounge.ca",
		},
		{
			icon: <LocalPhoneOutlinedIcon />,
			content: "236-558-3099",
		},
		{
			icon: <LocationOnOutlinedIcon />,
			content: "4027 Hastings St, Burnaby",
		},
	];

	const businessHours = [
		{
			content: "Sun - Thu: 6:30PM - 12:30AM",
		},
		{
			content: "Fri - Sat: 6:30PM to 2:30AM",
		},
		{
			content:
				"For statutory holidays, refer to Google Maps for updated/modified hours.",
		},
	];

	return (
		<Box className={styles.sitemapContainer}>
			<Stack gap={4} className={styles.contentContainer}>
				<Stack>
					<Typography variant="h3" className={styles.headings}>
						Follow Our Socials:
					</Typography>
					<SocialLinks />
				</Stack>
				<Stack>
					<Typography variant="h3" className={styles.headings}>
						Business Info:
					</Typography>
					<Stack gap={2}>
						{infoData.map(({ icon, content }, index) => (
							<Stack direction="row" key={index}>
								{icon}
								<Typography>{content}</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
				<Stack>
					<Typography variant="h3" className={styles.headings}>
						Business Hours:
					</Typography>
					<Stack gap={1}>
						{businessHours.map(({ content }, index) => (
							<Typography className={styles.businessHeadings} key={index}>
								{content}
							</Typography>
						))}
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default SiteMap;
