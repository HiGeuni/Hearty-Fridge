import { useState } from "react";
import DetailMenu from "./DetailMenu";
import FridgeInfo from "./FridgeInfo";
import FoodList from "./FoodList";
import { DetailContainer, FoodMessageContainer, ListContainer } from "./style";
import { useGetFridgeById } from "@api/hooks/fridge";
import { IFridgeDetail } from "types";
import Loading from "@components/Loading";

interface FridgeDetailProps {
  id: number;
}

const FridgeDetail = ({ id }: FridgeDetailProps) => {
  const [isFood, setIsFood] = useState(true);
  const { data } = useGetFridgeById({ id: id });
  if (!data) return <Loading />;

  return (
    <DetailContainer>
      <FridgeInfo data={data} />
      <ListContainer>
        <DetailMenu />
        <FoodMessageContainer>
          <FoodList foods={data.foodList} />
        </FoodMessageContainer>
      </ListContainer>
    </DetailContainer>
  );
};

export default FridgeDetail;
