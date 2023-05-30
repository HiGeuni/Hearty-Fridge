import DefaultModal from '..';
import { ButtonContainer, ButtonContainerDonation, ModalContent, ModalTitle, StyledButtons } from '../style';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const DonationModal = ({ open, handleClose }: IProps) => {
  return (
    <DefaultModal open={open} handleClose={handleClose}>
      <ModalTitle> Donation </ModalTitle>
      <ModalContent>
        {/* form */}
      </ModalContent>
      <ButtonContainerDonation>
        <StyledButtons isActive={false}>Cancel</StyledButtons>
        <StyledButtons isActive={true}>Next</StyledButtons>
      </ButtonContainerDonation>
    </DefaultModal>
  );
};

export default DonationModal;