import styled from "@emotion/styled";
import Link from "next/link";

export const Navigation = styled.div(({ theme }) => ({
  display: "flex",
  fontSize: "20px",
  columnGap: "33px",
  alignItems: "center",
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.custom.secondary.main,
  textDecoration: "none",
}));
