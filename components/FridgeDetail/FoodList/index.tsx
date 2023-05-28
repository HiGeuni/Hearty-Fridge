import { IFoodList } from "types";
import { StyledTable, StyledTableHeader, StyledTd, StyledTr } from "./style";
import moment from "moment";

const FoodList = ({ foods }: { foods: IFoodList[] }) => {
  return (
    <StyledTable>
      <StyledTableHeader>Name</StyledTableHeader>
      <StyledTableHeader>Amount</StyledTableHeader>
      <StyledTableHeader>Expiration Date</StyledTableHeader>
      {foods.map((food) => (
        <StyledTr>
          <StyledTd>{food.food.name}</StyledTd>
          <StyledTd>{food.food.amount}</StyledTd>
          <StyledTd>
            ~{moment(food.food.expiration).format("yyyy.mm.DD")}
          </StyledTd>
        </StyledTr>
      ))}
    </StyledTable>
  );
};

export default FoodList;
