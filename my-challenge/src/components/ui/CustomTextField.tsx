import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  bgColor?: string;
  borderColor?: string;
  variant?: "outlined" | "filled" | "standard";
}

const StyledTextField = styled(TextField)<CustomTextFieldProps>(
  ({ bgColor = "#f9f9f9", borderColor = "#1976d2" }) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: bgColor,
      borderRadius: "8px",
      "& fieldset": { borderColor },
      "&:hover fieldset": { borderColor: "#1565c0" },
      "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
    },
    "& .MuiFilledInput-root": {
      backgroundColor: bgColor,
    },
    "& .MuiInputBase-root": {
      backgroundColor: bgColor,
    },
    "& .MuiInputLabel-root": { color: borderColor },
    "& .MuiInputBase-input": { color: "#333", fontSize: "16px" },
    "& .MuiFormHelperText-root": { fontSize: "14px", color: "red" },
  })
);

const CustomTextField = ({
  bgColor,
  borderColor,
  variant = "outlined",
  ...props
}: CustomTextFieldProps) => {
  return (
    <StyledTextField
      bgColor={bgColor}
      borderColor={borderColor}
      variant={variant}
      {...props}
    />
  );
};

export default CustomTextField;
