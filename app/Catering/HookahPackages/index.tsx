"use client";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { useState } from "react";
import styles from "./hookahPackages.module.css";
import { StyledTab } from "./StyledTab";
import HookahPackage from "./HookahPackage";
import { packageData } from "./hookahPackageData";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

export default function HookahPackages() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				marginY: "20px",
			}}
		>
			<Box>
				<Tabs
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					TabIndicatorProps={{
						style: { backgroundColor: "#497445" },
					}}
					className={styles.customTabs}
				>
					<StyledTab label="Classic" {...a11yProps(0)} />
					<StyledTab label="Premium" {...a11yProps(1)} />
					<StyledTab label="Luxury" {...a11yProps(2)} />
					<StyledTab label="Add Ons" {...a11yProps(2)} />
				</Tabs>
			</Box>
			{packageData.map((hookahPackage, index) => (
				<TabPanel key={index} value={value} index={index}>
					<HookahPackage hookahPackage={hookahPackage} />
				</TabPanel>
			))}
		</Box>
	);
}
