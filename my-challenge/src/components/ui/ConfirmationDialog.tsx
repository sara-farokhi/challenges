import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CustomButton from "./CustomButton";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  dialogTitle: string;
  dialogContent: string;
}

const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  dialogTitle,
  dialogContent,
}: ConfirmationDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ direction: "rtl" }}> {dialogTitle} </DialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      <DialogActions>
        <CustomButton
          onClick={onClose}
          textColor="#333"
          bgColor="#f5f5f5"
          hoverBgColor="#e0e0e0"
        >
          لغو
        </CustomButton>
        <CustomButton
          onClick={onConfirm}
          color="primary"
          textColor="#fff"
          bgColor="#ff9800"
          hoverBgColor="#e65100"
        >
          حذف
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
