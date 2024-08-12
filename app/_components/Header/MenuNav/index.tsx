import React, { useState } from "react";
import { Button, IconButton, Link, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import HookahIcon from "@/public/assets/hookah-2.png";

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
			>
				<Image src={HookahIcon} height={32} width={0} alt={`hookah`} />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					<Link href="/">Home</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href="/About">About</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link href="ContactUs">Contact</Link>
				</MenuItem>
			</Menu>
		</nav>
	);
};

export default MenuNav;
