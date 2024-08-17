"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const Footer = () => {
	const copyrightYear = new Date().getFullYear();

	const CustomLink = styled(Link)({
		color: "#468CDE",
		fontSize: "16px",
	});

	return (
		<footer>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="center"
				gap={1}
			>
				<Typography
					sx={{
						textAlign: "center",
						fontSize: "12px",
						fontWeight: "light",
					}}
				>
					Copyright ©{copyrightYear} Bula Hookah Lounge
				</Typography>
				<Typography sx={{ textAlign: "center", fontSize: "12px" }}>
					Powered by
					<CustomLink href={""} sx={{ marginLeft: "4px", fontSize: "12px" }}>
						HKDev
					</CustomLink>
				</Typography>
			</Stack>
		</footer>
	);
};

export default Footer;
