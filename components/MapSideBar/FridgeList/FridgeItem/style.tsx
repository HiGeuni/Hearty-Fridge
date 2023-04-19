import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";

export const ItemContainer = styled.div(({ theme, activate }) => ({
  display: "flex",
  maxHeight: "251px",
  width: "400px",
  marginTop: "16px",
  borderRadius: 10,
  boxShadow: `0 0 0 1px ${theme.custom.beige.secondary} inset`,
  backgroundColor: activate ? "#FFF" : theme.custom.beige.white,
}));

export const InfoArea = styled.div(({ theme }) => ({
  margin: "20px 0 20px 16px",
  width: "260px",
}));

export const InfoTitle = styled.div(({ theme, activate }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: activate ? theme.custom.primary : theme.custom.secondary.main70,
}));

export const Distance = styled.span(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "700",
  color: theme.custom.secondary.main,
}));

export const Seperator = styled.span(({ theme }) => ({
  fontWeight: "700",
  color: theme.custom.secondary.main30,
}));

export const Address = styled.span(({ theme }) => ({
  color: theme.custom.secondary.main,
  fontSize: "16px",
}));

export const Status = styled.div(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 700,
  color: theme.custom.secondary.main70,
}));

export const Favorite = styled.div(({ theme }) => ({
  color: theme.custom.primary,
  display: "fixed",
  position: "relative",
  top: "23px",
  right: "15px",
}));
