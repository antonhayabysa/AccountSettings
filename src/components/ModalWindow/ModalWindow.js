import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalWindow = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#F1F5F8BF",
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "40px",
          gap: "32px",
          width: "752px",
          // height: "435px",
          background: "#FFFFFF",
          borderRadius: "16px",
        },
      }}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};

export default ModalWindow;
