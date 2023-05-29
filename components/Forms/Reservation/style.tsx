import styled from "@emotion/styled";

export const FoodContainer = styled.div(({ theme }) => ({
  display: "flex",
  ":hover": {
    backgroundColor: theme.custom.beige.main,
  },
}));

export const CustomCheckbox = styled.input(({ theme }) => ({
  marginLeft: "12px",
}));

export const CustomImage = styled.div(({ theme }) => ({
  width: "63px",
  height: "63px",
  borderRadius: "10px",
  backgroundColor: theme.custom.accent,
}));

export const FlexDiv = styled.div(({ theme }) => ({
  display: "flex",
  columnGap: "7px",
}));
