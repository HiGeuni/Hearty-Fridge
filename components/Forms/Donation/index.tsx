import DefaultModal from "..";
import { ModalContent, ModalTitle } from "../style";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const DonationModal = ({ open, handleClose }: IProps) => {
  return (
    <DefaultModal open={open} handleClose={handleClose}>
      <ModalTitle> Donation </ModalTitle>
      <ModalContent></ModalContent>
    </DefaultModal>
  );
};

export default DonationModal;
