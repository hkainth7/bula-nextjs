import { Box, SxProps } from "@mui/material";
import React from "react";
import { Title } from "../CustomTitle";
import { ContentTypography } from "../ContentTypography";

interface ContentBoxProps {
	title: string;
	content: string;
	sx?: SxProps;
}

const ContentBox = (props: ContentBoxProps) => {
	const { title, content, sx } = props;
	return (
		<Box sx={sx}>
			<Title>{title}</Title>
			<ContentTypography>{content}</ContentTypography>
		</Box>
	);
};

export default ContentBox;
