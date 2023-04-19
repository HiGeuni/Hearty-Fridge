import {
  Address,
  Distance,
  Favorite,
  InfoArea,
  InfoTitle,
  ItemContainer,
  Seperator,
  Status,
} from "./style";
import testImg from "public/Rectangle 135.png";
import Image from "next/image";
import { IFridgeItem } from "types";
import { Star, StarOutline } from "@mui/icons-material";

interface Props {
  data: IFridgeItem;
  activate: boolean;
  onClick: () => void;
}

//TODO : selected 처리
const FridgeItem = ({ data, activate, onClick }: Props) => {
  return (
    <ItemContainer activate={activate} onClick={onClick}>
      <Image
        style={{
          marginLeft: "20px",
          marginTop: "28px",
          width: "78px",
          height: "78px",
        }}
        src={testImg}
        alt="FridgeItemImage"
      />
      <InfoArea>
        <InfoTitle activate={activate}>{data.fridgeInfo.fridgeName}</InfoTitle>
        <Distance>200m</Distance>
        <Seperator>|</Seperator>
        <Address>{data.fridgeInfo.fridgeAddress}</Address>
        <Status>
          음식현황 ({data.numFoods}) | Hearty Message ({data.numMessages})
        </Status>
      </InfoArea>
      <Favorite>
        {data.isBookmark ? (
          <Star sx={{ width: "21px", height: "21px" }} />
        ) : (
          <StarOutline sx={{ width: "21px", height: "21px" }} />
        )}
      </Favorite>
    </ItemContainer>
  );
};

export default FridgeItem;
