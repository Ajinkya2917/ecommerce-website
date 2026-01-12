import { Box, Modal } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  // const { auth } = useSelector((store) => store);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="large"
      >
        <Box className="rounded-md" sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;
