"use client";

import React from "react";
import Image from "next/image";
import BulaLogo from "@/public/assets/white-logo.png";
import GreenSmoke from "@/public/assets/green-smoke.webp";
import Link from "next/link";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import MenuNav from "./MenuNav";

const Header = () => {
	const theme = useTheme();
	const isSmallUp = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<header style={{ position: "relative" }}>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: -1,
						opacity: 0.7,
					}}
				>
					<Image
						src={GreenSmoke}
						alt="header background"
						layout="fill"
						objectFit="cover"
						quality={100}
						priority={true}
						className="flipped"
					/>
				</Box>
				<Image src={BulaLogo} height={100} width={100} alt="Bula lounge logo" />
				{isSmallUp ? (
					<nav>
						<Link href="/">Home</Link>
						<Link href="/About">About</Link>
						<Link href="ContactUs">Contact</Link>
					</nav>
				) : (
					<MenuNav />
				)}
			</Stack>
		</header>
	);
};

export default Header;
