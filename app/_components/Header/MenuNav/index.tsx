import React, { useState } from "react";
import { Button, Link, Menu, MenuItem, styled } from "@mui/material";
import Image from "next/image";
import HookahIcon from "@/public/assets/shishaOriginal.png";
import { linkData } from "./linkData";

const MenuNav = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const CustomMenuItem = styled(MenuItem)({
		"& a": {
			textDecoration: "none",
			color: "white",
		},
	});

	return (
		<nav>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				sx={{ padding: 0 }}
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
				sx={{
					"& .MuiList-root": {
						backgroundColor: "#2F3135",
						padding: 0,
					},
				}}
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
					<CustomMenuItem key={index} divider onClick={handleClose}>
						<Link href={href}>{title}</Link>
					</CustomMenuItem>
				))}
			</Menu>
		</nav>
	);
};

export default MenuNav;
