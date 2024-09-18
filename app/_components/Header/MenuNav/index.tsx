"use client";

import React, { useState } from "react";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import HookahIcon from "@/public/assets/shishaOriginal.png";
import { linkData } from "./linkData";
import styles from "../header.module.css";

const MenuNav = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<nav>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				className={styles.menuButton}
			>
				<Image
					src={HookahIcon}
					quality={100}
					height={60}
					width={0}
					alt={`hookah`}
				/>
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				classes={{ list: styles.menuRoot }}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				{linkData.map(({ href, title }, index) => (
					<MenuItem key={index} divider onClick={handleClose}>
						<Link href={href} className={styles.link}>
							{title}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</nav>
	);
};

export default MenuNav;
