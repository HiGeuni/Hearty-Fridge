import styled from '@emotion/styled';

export const InfoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  maxWidth: '423px',
  minHeight: '193px',
  margin: '188px 0 0 30px',
  boxShadow: `0 0 0 1px ${theme.custom.beige.secondary} inset`,
}));

export const InfoTitle = styled.div(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '26px',
  marginTop: '32px',
  color: theme.custom.secondary.main,
}));

export const Location = styled.div(({ theme }) => ({
  color: theme.custom.secondary.main70,
  fontSize: '16px',
}));

export const BtnContainer = styled.div(({ theme }) => ({
  marginTop: '24px',
  display: 'flex',
  columnGap: '9px',
}));
