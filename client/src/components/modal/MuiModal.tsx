import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import useConfirm from "../../utils/useConfirm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

export default function MuiModal() {
  const { onConfirm, onCancel, confirmState, unshowModal } = useConfirm();

  return (
    <div>
      <Modal
        open={confirmState}
        onClose={unshowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: "20px" }}
          >
            Are you sure?
          </Typography>
          <div>
            <Button
              variant="contained"
              style={{ marginRight: "20px" }}
              onClick={onConfirm}
            >
              Yes
            </Button>
            <Button variant="contained" onClick={onCancel}>
              No
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
