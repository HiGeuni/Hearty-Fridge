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
  display: flex;
  padding: 20px 20px 20px 20px;
`;

export const Like = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  top: 158px;
  left: 414px;
  width: 40px;
  height: 30px;
  margin-bottom: -30px;
  border-radius: 10px 10px 0 0;
`;
