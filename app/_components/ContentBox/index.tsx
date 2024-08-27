import { Box } from "@mui/material";
import React from "react";
import { Title } from "../CustomTitle";
import { ContentTypography } from "../ContentTypography";

interface ContentBoxProps {
	title: string;
	content: string;
}

const ContentBox = (props: ContentBoxProps) => {
	const { title, content } = props;
	return (
		<Box>
			<Title>{title}</Title>
			<ContentTypography>{content}</ContentTypography>
		</Box>
	);
};

export default ContentBox;
