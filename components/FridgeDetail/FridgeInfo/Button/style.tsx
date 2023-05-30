import styled from '@emotion/styled';

interface IProps {
  isReservation: boolean;
}

export const CustomButton = styled.button<IProps>(
  ({ theme, isReservation }) => ({
    width: '110px',
    height: '40px',
    color: isReservation ? theme.custom.primary : theme.custom.beige.main,
    backgroundColor: isReservation
      ? theme.custom.beige.main
      : theme.custom.primary,
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '1rem',
  }),
);
