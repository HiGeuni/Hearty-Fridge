import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';

export const CustomContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 80px',
});

export const InfoArea = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  fontSize: '18px',
});

export const LoginButton = styled(Button)(({ theme }) => ({
  width: '107px',
  height: '53px',
  backgroundColor: theme.custom.accent,
  color: 'white',
  borderRadius: 100,
}));

export const LogOutButton = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  color: theme.custom.gray,
  borderRadius: 100,
}));

export const Mypage = styled(Button)(({ theme }) => ({
  width: '107px',
  height: '53px',
  backgroundColor: theme.custom.primary,
  color: 'white',
  borderRadius: 100,
}));
