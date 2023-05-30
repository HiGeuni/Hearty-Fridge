import styled from '@emotion/styled';

export const MessageContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '383px',
  padding: '12px 20px',
  backgroundColor: theme.custom.beige.main,
  color: theme.custom.secondary.main,
  fontSize: '14px',
  borderRadius: '10px',
  marginBottom: '16px',
  '& .date': {
    fontSize: '10px',
    color: theme.custom.secondary.main70,
  },
}));
