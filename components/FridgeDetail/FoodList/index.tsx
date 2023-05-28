import { IFoodList } from "types";
import { StyledTable, StyledTableHeader } from "./style";
import moment from "moment";

const FoodList = ({ foods }: { foods: IFoodList[] }) => {
  return (
    <StyledTable>
      <StyledTableHeader>Name</StyledTableHeader>
      <StyledTableHeader>Amount</StyledTableHeader>
      <StyledTableHeader>Expiration Date</StyledTableHeader>
      {foods.map((food) => (
        <tr>
          <td>{food.food.name}</td>
          <td>{food.food.amount}</td>
          <td>~{moment(food.food.expiration).format("yyyy.mm.DD")}</td>
        </tr>
      ))}
    </StyledTable>
  );
};

export default FoodList;
