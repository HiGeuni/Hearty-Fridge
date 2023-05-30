import { CustomButton } from './style';

interface IProps {
  isReservation: boolean;
  onClick: () => void;
}

function Button({ onClick, isReservation }: IProps) {
  return (
    <CustomButton onClick={onClick} isReservation={isReservation}>
      {isReservation ? 'Reservation' : 'Donation'}
    </CustomButton>
  );
}

export default Button;
