import { IFoodList } from "types";
import DefaultModal from "..";
import { ModalContent, ModalInfo, ModalTitle } from "../style";
import moment from "moment";
import { CustomCheckbox, CustomImage, FlexDiv, FoodContainer } from "./style";

interface IProps {
  open: boolean;
  handleClose: () => void;
  data: IFoodList[];
}

const ReservationModal = ({ data, open, handleClose }: IProps) => {
  return (
    <DefaultModal open={open} handleClose={handleClose}>
      <ModalTitle> Reservation </ModalTitle>
      <ModalInfo>* You can reserve up to two food items per person.</ModalInfo>
      <ModalContent>
        {data.map((food) => (
          <FoodContainer key={food.food.id}>
            <div>
              <CustomCheckbox type="checkbox" />
              <CustomImage>Image</CustomImage>
            </div>
            <div>
              <div>{food.food.name}</div>
              <FlexDiv>
                <div>{food.food.amount}</div>
                <div> | </div>
                <div>~{moment(food.food.expiration).format("yyyy.mm.DD")}</div>
              </FlexDiv>
              <div>{food.food.message}</div>
            </div>
          </FoodContainer>
        ))}
      </ModalContent>
    </DefaultModal>
  );
};

export default ReservationModal;
