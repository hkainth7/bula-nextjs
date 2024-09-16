import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { TikTokIcon } from "./TikTokIcon";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./sitemap.module.css";

const SiteMap = () => {
	const linkData = [
		{
			href: "https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==",
			icon: <InstagramIcon fontSize="large" className={styles.icon} />,
		},
		{
			href: "https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a",
			icon: <YouTubeIcon fontSize="large" className={styles.icon} />,
		},
		{
			href: "https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a",
			icon: <FacebookIcon fontSize="large" className={styles.icon} />,
		},
	];

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
			content: "Sun - Tue: 6:30PM - 12:30AM",
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
					<Stack direction="row" alignItems="center">
						{linkData.map((link, index) => (
							<Link href={link.href} key={index}>
								{link.icon}
							</Link>
						))}
						<Link
							href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a"
							className={styles.tikTokIcon}
						>
							<TikTokIcon color={"#497445"} />
						</Link>
					</Stack>
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
