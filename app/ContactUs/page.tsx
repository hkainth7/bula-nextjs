import React from "react";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import styles from "./contact.module.css";
import { SocialLinks } from "../_components/SocialLinks";
import Image from "next/image";
import ContactBannerImage from "@/public/assets/contact-page.jpg";

const Contact = () => {
	return (
		<main>
			<Stack gap={5} justifyContent="center" className={styles.contactPage}>
				<Box className={styles.backgroundImageContainer}>
					<Image
						src={ContactBannerImage}
						alt="inside bula hookah lounge"
						fill
						quality={100}
						priority={true}
						className={styles.backgroundImage}
					/>
				</Box>
				<Box>
					<Typography variant="h5" className={styles.heading}>
						Got a question? Reach out on our socials for an immediate response!
					</Typography>
					<SocialLinks />
				</Box>
				<Divider flexItem className={styles.divider} />
				<Box>
					<Stack spacing={2}>
						<Typography variant="h5" className={styles.heading}>
							Find us at
						</Typography>
						<Box>
							<Typography variant="h6">Address</Typography>
							<Typography>4027 Hastings St, Burnaby, BC</Typography>
						</Box>
						<Box>
							<Typography variant="h6">Phone</Typography>
							<Typography>
								<Link
									href="tel:+1234667890"
									underline="none"
									className={styles.link}
								>
									+1 236-558-3099
								</Link>
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6">Email</Typography>
							<Typography>
								<Link
									href="mailto:contact@bulalounge.com"
									underline="none"
									className={styles.link}
								>
									info@bulalounge.ca
								</Link>
							</Typography>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</main>
	);
};

export default Contact;
