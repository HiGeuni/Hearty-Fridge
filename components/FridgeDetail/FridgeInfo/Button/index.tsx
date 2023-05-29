import { CustomButton } from "./style";

interface IProps {
  isResv: boolean;
  onClick: () => void;
}

const Button = ({ onClick, isResv }: IProps) => {
  return (
    <CustomButton onClick={onClick} isResv={isResv}>
      {isResv ? "Reservation" : "Donation"}
    </CustomButton>
  );
};

export default Button;
