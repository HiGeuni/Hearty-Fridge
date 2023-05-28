import styled from "@emotion/styled";

export const CustomButton = styled.button(({ theme, isResv }) => ({
  width: "100px",
  height: "40px",
  color: isResv ? theme.custom.primary : theme.custom.beige.main,
  backgroundColor: isResv ? theme.custom.beige.main : theme.custom.primary,
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: "1rem",
}));
