import styled from "@emotion/styled";

export const DetailContainer = styled.div(({ theme }) => ({
  minWidth: "480px",
}));

export const ListContainer = styled.div(({ theme }) => ({
  margin: "12px 0 0 30px",
  borderRadius: "10px",
  boxShadow: `0 0 0 1px ${theme.custom.beige.secondary} inset`,
  width: "423px",
  height: "48`0px",
}));

export const FoodMessageContainer = styled.div`
  padding: 20px 0 0 20px;
`;
