import React from "react";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
	const copyrightYear = new Date().getFullYear();

	return (
		<footer>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="center"
				gap={1}
			>
				<Typography className={styles.footerContainer}>
					Copyright ©{copyrightYear} Bula Hookah Lounge
				</Typography>
				<Typography className={styles.poweredByContainer}>
					Powered by
					<Link href={""} className={styles.link}>
						HKDev
					</Link>
				</Typography>
			</Stack>
		</footer>
	);
};

export default Footer;
