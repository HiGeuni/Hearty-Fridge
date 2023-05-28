import { useState } from "react";
import { MenuContainer, MenuItem } from "./style";

const DetailMenu = () => {
  const [isFood, setIsFood] = useState(true);
  return (
    <MenuContainer>
      <MenuItem activate={isFood}>FoodList</MenuItem>
      <MenuItem activate={false}>|</MenuItem>
      <MenuItem activate={!isFood}>Hearty Message</MenuItem>
    </MenuContainer>
  );
};

export default DetailMenu;
