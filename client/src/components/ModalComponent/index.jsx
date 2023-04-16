import React from "react";

import { Box, Modal } from "@mui/material";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { Button } from "@mui/material";

import { BoxStyle, TypograpyTitleStyle, TypograpyTextStyle } from "./Styles";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function ModalComponent({
  title = "",
  text = "",
  button1_text = "",
  button2_text = "",
  isButton1Visible = 1,
  isButton2Visible = 1,
  onClickButton1 = () => {},
  onClickButton2 = () => {},
  open = false,
  setOpen = () => {},
  loading,
  children,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={() => handleOpen()}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={BoxStyle}>
          {/* <CloseIcon fontSize='medium' sx = {{position: "absolute", top: '9px', left: '94%', color:'#D5D5D5'}}></CloseIcon> */}
          <Typography
            sx={TypograpyTitleStyle}
            id="modal-modal-title"
            variant="h1"
            component="h1"
          >
            {title}
          </Typography>
          <Divider sx={{ width: "100%", border: "0.8px solid #C4C4C4" }} />
          <div style={{ width: "100%", padding: "10px" }}>
            {!!text && (
              <Typography id="modal-modal-description" sx={TypograpyTextStyle}>
                {text}
              </Typography>
            )}
            {children}
          </div>
          <Divider sx={{ width: "100%", border: "0.8px solid #C4C4C4" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              alignItems: "center",
              gap: 1,
            }}
          >
            {isButton1Visible === 1 ? (
              <Button
                size="large"
                sx={{
                  width: "45%",
                  textTransform: "capitalize",
                  borderRadius: 3,
                  fontWeight: 600,
                }}
                variant="outlined"
                onClick={onClickButton1}
                disabled={loading}
              >
                {button1_text}
              </Button>
            ) : null}
            {isButton2Visible === 1 ? (
              <Button
                size="large"
                sx={{
                  width: "45%",
                  textTransform: "capitalize",
                  borderRadius: 3,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
                variant="contained"
                onClick={onClickButton2}
                disabled={loading}
              >
                {button2_text}
              </Button>
            ) : null}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
