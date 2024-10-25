import { Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { TikTokIcon } from "../SiteMap/TikTokIcon";
import styles from "../SiteMap/sitemap.module.css";

export const SocialLinks = () => {
	const linkData = [
		{
			href: "https://www.instagram.com/bulahookahlounge?igsh=MTMzengydnk2MXFiNw==",
			icon: <InstagramIcon fontSize="large" className={styles.icon} />,
			ariaLabel: "Visit our Instagram page",
		},
		{
			href: "https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a",
			icon: <YouTubeIcon fontSize="large" className={styles.icon} />,
			ariaLabel: "Visit our YouTube page",
		},
		{
			href: "https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a",
			icon: <FacebookIcon fontSize="large" className={styles.icon} />,
			ariaLabel: "Visit our Facebook page",
		},
	];
	return (
		<Stack direction="row" alignItems="center">
			{linkData.map((link, index) => (
				<Link href={link.href} key={index} aria-label={link.ariaLabel}>
					{link.icon}
				</Link>
			))}
			<Link
				href="https://youtube.com/@bulahookahlounge?si=-PkGPD7CmQ_NOf4a"
				className={styles.tikTokIcon}
				aria-label="Visit our TikTok page"
			>
				<TikTokIcon color={"#497445"} />
			</Link>
		</Stack>
	);
};
