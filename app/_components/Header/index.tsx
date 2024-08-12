"use client";

import React from "react";
import Image from "next/image";
import BulaLogo from "@/public/assets/white-logo.png";
import Link from "next/link";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import MenuNav from "./MenuNav";

const Header = () => {
	const theme = useTheme();
	const isSmallUp = useMediaQuery(theme.breakpoints.up("sm"));

	return (
		<header>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Image src={BulaLogo} height={75} width={75} alt="Bula lounge logo" />
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
