import { CustomButton } from "./style";

interface IProps {
  isResv: boolean;
}

const Button = ({ isResv }: IProps) => {
  return (
    <CustomButton isResv={isResv}>
      {isResv ? "Reservation" : "Donation"}
    </CustomButton>
  );
};

export default Button;
