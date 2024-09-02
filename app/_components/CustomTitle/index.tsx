"use client";

import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
	...theme.typography.h3,
	marginBottom: "15px",
}));
