"use client";

import React from "react";
import Image from "next/image";
import BulaLogo from "@/public/assets/white-logo.png";
import GreenSmoke from "@/public/assets/green-smoke-2.jpg";
import Link from "next/link";
import { Box, Stack } from "@mui/material";
import MenuNav from "./MenuNav";

const Header = () => {
	return (
		<header style={{ position: "relative" }}>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Image src={BulaLogo} height={90} width={90} alt="Bula lounge logo" />
				</Link>

				<MenuNav />
			</Stack>
		</header>
	);
};

export default Header;
