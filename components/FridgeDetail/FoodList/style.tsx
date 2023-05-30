import styled from '@emotion/styled';

export const StyledTable = styled.table(({ theme }) => ({
  width: '380px',
  color: theme.custom.secondary.main,
  borderCollapse: 'collapse',
}));

export const StyledTableHeader = styled.th(({ theme }) => ({
  backgroundColor: theme.custom.beige.main,
  color: theme.custom.secondary.main70,
  height: '34px',
  lineHeight: '34px',
}));

export const StyledTr = styled.tr(({ theme }) => ({
  borderBottom: `1px solid ${theme.custom.beige.secondary}`,
}));

export const StyledTd = styled.td(({ theme }) => ({
  padding: '10px 5px',
}));
