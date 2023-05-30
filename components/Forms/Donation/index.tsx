import DefaultModal from '..';
import {
  ButtonContainerDonation,
  ModalContent,
  ModalTitle,
  StyledButtons,
} from '../style';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

function DonationModal({ open, handleClose }: IProps) {
  return (
    <DefaultModal open={open} handleClose={handleClose}>
      <ModalTitle> Donation </ModalTitle>
      <ModalContent>{/* form */}</ModalContent>
      <ButtonContainerDonation>
        <StyledButtons isActive={false}>Cancel</StyledButtons>
        <StyledButtons isActive>Next</StyledButtons>
      </ButtonContainerDonation>
    </DefaultModal>
  );
}

export default DonationModal;
