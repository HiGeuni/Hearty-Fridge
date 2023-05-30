import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledProps {
  activate: boolean;
}

export const NavItem = styled.div<StyledProps>(({ theme, activate }) => ({
  fontWeight: '600',
  fontSize: '24px',
  color: activate ? theme.custom.secondary.main : theme.custom.secondary.main30,
}));

export const Seperator = styled.div(({ theme }) => ({
  color: theme.custom.secondary.main30,
  fontSize: '20px',
  margin: '0 16px',
}));

export const Activate = css``;
