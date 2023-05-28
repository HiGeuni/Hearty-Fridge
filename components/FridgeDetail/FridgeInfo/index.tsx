import { IFridgeDetail } from "types";
import Button from "./Button";
import { BtnContainer, InfoContainer, InfoTitle, Location } from "./style";

const FridgeInfo = ({ data }: { data: IFridgeDetail }) => {
  return (
    <InfoContainer>
      <InfoTitle>{data.fridgeInfo.fridgeName}</InfoTitle>
      <Location>{data.fridgeInfo.fridgeAddress}</Location>
      <BtnContainer>
        <Button isResv={false} />
        <Button isResv={true} />
      </BtnContainer>
    </InfoContainer>
  );
};

export default FridgeInfo;
