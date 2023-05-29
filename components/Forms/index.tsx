import { Box, Button, Modal, Typography } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ModalContainer, ModalContent, ModalInfo, ModalTitle } from "./style";

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const DefaultModal = ({ open, handleClose, children }: IProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          {/* <ModalTitle>{type}</ModalTitle>
          {type === "Reservation" && (
            <ModalInfo>* You can reserve up to two food per person.</ModalInfo>
          )}
          <ModalContent></ModalContent> */}
          {children}
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default DefaultModal;
