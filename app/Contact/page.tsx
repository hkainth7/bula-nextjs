import React from "react";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import styles from "./contact.module.css";
import { SocialLinks } from "../_components/SocialLinks";

const Contact = () => {
	return (
		<main>
			<Stack gap={5} justifyContent="center" className={styles.contactPage}>
				<Box>
					<Typography variant="h4" className={styles.heading}>
						Contact Us
					</Typography>

					<Stack spacing={2} className={styles.contactInfo}>
						<Box>
							<Typography variant="h6">Address</Typography>
							<Typography>4027 Hastings St, Burnaby, BC</Typography>
						</Box>

						<Box>
							<Typography variant="h6">Phone</Typography>
							<Typography>
								<Link
									href="tel:+1234567890"
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
				<Divider flexItem className={styles.divider} />
				<Box>
					<Typography variant="h4" className={styles.heading}>
						Follow Us
					</Typography>
					<SocialLinks />
				</Box>
			</Stack>
		</main>
	);
};

export default Contact;
