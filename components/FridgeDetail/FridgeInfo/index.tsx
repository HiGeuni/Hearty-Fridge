import { IFridgeDetail } from 'types';
import { useState } from 'react';
import DonationModal from '@components/Forms/Donation';
import ReservationModal from '@components/Forms/Reservation';
import { BtnContainer, InfoContainer, InfoTitle, Location } from './style';
import Button from './Button';

type ButtonType = 'donation' | 'reservation' | null;

function FridgeInfo({ data }: { data: IFridgeDetail }) {
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
          onClick={() => handleOpen({ type: 'donation' })}
          isReservation={false}
        />
        <Button
          onClick={() => handleOpen({ type: 'reservation' })}
          isReservation
        />
      </BtnContainer>
      {type === 'donation' ? (
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
}

export default FridgeInfo;
