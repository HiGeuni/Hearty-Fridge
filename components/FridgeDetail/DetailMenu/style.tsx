import styled from '@emotion/styled';

type MenuItemProps = {
  children: string;
  activate: boolean; // activate 속성을 추가합니다.
};

export const MenuContainer = styled.div(({ theme }) => ({
  padding: '26px 0 0 33px',
  display: 'flex',
  columnGap: '16px',
}));

export const MenuItem = styled.div<MenuItemProps>(({ theme, activate }) => ({
  color: activate ? theme.custom.secondary.main : theme.custom.secondary.main30,
  fontSize: '24px',
  fontWeight: '600',
}));
