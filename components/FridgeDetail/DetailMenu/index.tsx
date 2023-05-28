import { Dispatch, SetStateAction, useState } from "react";
import { MenuContainer, MenuItem } from "./style";

interface IProps {
  isFood: boolean;
  setIsFood: Dispatch<SetStateAction<boolean>>;
}

const DetailMenu = ({ isFood, setIsFood }: IProps) => {
  return (
    <MenuContainer>
      <MenuItem onClick={() => setIsFood(true)} activate={isFood}>
        FoodList
      </MenuItem>
      <MenuItem activate={false}>|</MenuItem>
      <MenuItem onClick={() => setIsFood(false)} activate={!isFood}>
        Hearty Talk
      </MenuItem>
    </MenuContainer>
  );
};

export default DetailMenu;
