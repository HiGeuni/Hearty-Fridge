import styled from "@emotion/styled";

export const StyledTable = styled.table(({ theme }) => ({
  width: "380px",
  color: theme.custom.secondary.main,
}));

export const StyledTableHeader = styled.th(({ theme }) => ({
  backgroundColor: theme.custom.beige.main,
  color: theme.custom.secondary.main70,
  height: "34px",
  lineHeight: "34px",
}));
