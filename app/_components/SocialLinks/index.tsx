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
	return (
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
	);
};
