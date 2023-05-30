import { IFoodList } from 'types';
import moment from 'moment';
import DefaultModal from '..';
import {
  ButtonContainer,
  ModalContent,
  ModalInfo,
  ModalTitle,
  StyledButtons,
} from '../style';
import {
  CustomCheckbox,
  CustomImage,
  FlexDiv,
  FlexDiv2,
  FoodContainer,
  FoodInfo,
  FoodName,
} from './style';

interface IProps {
  open: boolean;
  handleClose: () => void;
  data: IFoodList[];
}

function ReservationModal({ data, open, handleClose }: IProps) {
  return (
    <DefaultModal open={open} handleClose={handleClose}>
      <ModalTitle> Reservation </ModalTitle>
      <ModalInfo>* You can reserve up to two food items per person.</ModalInfo>
      <ModalContent>
        {data.map(food => (
          <FoodContainer key={food.food.id}>
            <FlexDiv2>
              <CustomCheckbox type="checkbox" />
              <CustomImage>Image</CustomImage>
            </FlexDiv2>
            <div>
              <FoodName>{food.food.name}</FoodName>
              <FlexDiv>
                <FoodInfo>{food.food.amount}</FoodInfo>
                <FoodInfo> |</FoodInfo>
                <FoodInfo>
                  ~{moment(food.food.expiration).format('yyyy.mm.DD')}
                </FoodInfo>
              </FlexDiv>
              <div>{food.food.message}</div>
            </div>
          </FoodContainer>
        ))}
      </ModalContent>
      <ButtonContainer>
        <StyledButtons isActive={false}>Cancel</StyledButtons>
        <StyledButtons isActive>Next</StyledButtons>
      </ButtonContainer>
    </DefaultModal>
  );
}

export default ReservationModal;
