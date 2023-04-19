import { useState } from "react";
import DetailMenu from "./DetailMenu";
import FridgeInfo from "./FridgeInfo";
import FoodList from "./FoodList";
import { DetailContainer } from "./style";

interface FridgeDetailProps {
  id: number;
}

const FridgeDetail = ({ id }: FridgeDetailProps) => {
  const [isList, setIsList] = useState(true);
  return (
    <DetailContainer>
      <FridgeInfo />
      <DetailMenu />
      <FoodList />
    </DetailContainer>
  );
};

export default FridgeDetail;
