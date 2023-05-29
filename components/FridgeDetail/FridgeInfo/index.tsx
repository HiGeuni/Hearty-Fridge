import { IFridgeDetail } from "types";
import Button from "./Button";
import { BtnContainer, InfoContainer, InfoTitle, Location } from "./style";
import { useState } from "react";
import { DoneAllTwoTone } from "@mui/icons-material";
import DonationModal from "@components/Forms/Donation";
import ReservationModal from "@components/Forms/Reservation";

type ButtonType = "donation" | "reservation" | null;

const FridgeInfo = ({ data }: { data: IFridgeDetail }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ButtonType>(null);
  const handleOpen = ({ type }: { type: ButtonType }) => {
    setType(type);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <InfoContainer>
      <InfoTitle>{data.fridgeInfo.fridgeName}</InfoTitle>
      <Location>{data.fridgeInfo.fridgeAddress}</Location>
      <BtnContainer>
        <Button
          onClick={() => handleOpen({ type: "donation" })}
          isResv={false}
        />
        <Button
          onClick={() => handleOpen({ type: "reservation" })}
          isResv={true}
        />
      </BtnContainer>
      {type === "donation" ? (
        <DonationModal open={open} handleClose={handleClose} />
      ) : (
        <ReservationModal
          data={data.foodList}
          open={open}
          handleClose={handleClose}
        />
      )}
    </InfoContainer>
  );
};

export default FridgeInfo;
