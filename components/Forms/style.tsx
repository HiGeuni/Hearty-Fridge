import styled from "@emotion/styled";

export const ModalContainer = styled.div(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  height: "850px",
  backgroundColor: "white",
  padding: "50px",
  borderRadius: "10px",
}));

export const ModalTitle = styled.div(({ theme }) => ({
  fontSize: "36px",
  fontWeight: "bold",
  color: theme.custom.secondary.main,
}));

export const ModalInfo = styled.div(({ theme }) => ({
  fontSize: "16px",
  color: theme.custom.secondary.main70,
}));

export const ModalContent = styled.div(({ theme }) => ({
  width: "710px",
  height: "600px",
  border: "solid 1px black",
  margin: "35px 45px 0px 45px",
  overflowY: "scroll",
}));
