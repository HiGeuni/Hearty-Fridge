import { useState } from "react";
import DetailMenu from "./DetailMenu";
import FridgeInfo from "./FridgeInfo";
import FoodList from "./FoodList";
import {
  DetailContainer,
  FoodMessageContainer,
  Like,
  ListContainer,
} from "./style";
import { useGetFridgeById } from "@api/hooks/fridge";
import { IFridgeDetail } from "types";
import Loading from "@components/Loading";
import HeartyTalkList from "./HeartyMessage";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

interface FridgeDetailProps {
  id: number;
}

const FridgeDetail = ({ id }: FridgeDetailProps) => {
  const [isFood, setIsFood] = useState(true);
  const { data } = useGetFridgeById({ id: id });
  if (!data) return <Loading />;

  return (
    <DetailContainer>
      <Like>
        {data.isBookmark ? (
          <StarRoundedIcon style={{ color: "#F2916E" }} />
        ) : (
          <StarOutlineRoundedIcon style={{ color: "#F2916E" }} />
        )}
      </Like>
      <FridgeInfo data={data} />
      <ListContainer>
        <DetailMenu isFood={isFood} setIsFood={setIsFood} />
        <FoodMessageContainer>
          {isFood ? (
            <FoodList foods={data.foodList} />
          ) : (
            <HeartyTalkList messages={data.messageList} />
          )}
        </FoodMessageContainer>
      </ListContainer>
    </DetailContainer>
  );
};

export default FridgeDetail;
