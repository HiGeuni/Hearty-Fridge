import styled from '@emotion/styled';

interface IActive {
  isActive: boolean;
}

export const ModalContainer = styled.div(({ theme }) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '900px',
  height: '850px',
  backgroundColor: 'white',
  padding: '50px',
  borderRadius: '10px',
}));

export const ModalTitle = styled.div(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  color: theme.custom.secondary.main,
}));

export const ModalInfo = styled.div(({ theme }) => ({
  fontSize: '16px',
  color: theme.custom.secondary.main70,
}));

export const ModalContent = styled.div(({ theme }) => ({
  width: '710px',
  height: '600px',
  margin: '35px 45px 0px 45px',
  overflowY: 'scroll',
}));

export const ButtonContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  columnGap: '26px',
}));

export const ButtonContainerDonation = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  columnGap: '26px',
  marginTop: '16px',
}));

export const StyledButtons = styled.button<IActive>(({ theme, isActive }) => ({
  background: 'none',
  border: 'none',
  backgroundColor: isActive ? theme.custom.accent : '#d9d9d9',
  color: 'white',
  borderRadius: '100px',
  fontSize: '14px',
  width: '100px',
  height: '40px',
}));