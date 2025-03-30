import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
}

const StyledButton = styled(Button)<CustomButtonProps>(
  ({ bgColor = "#1976d2", textColor = "#fff", hoverBgColor = "#1565c0" }) => ({
    backgroundColor: bgColor,
    color: textColor,
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: hoverBgColor,
    },
  })
);

const CustomButton = ({
  bgColor,
  textColor,
  hoverBgColor,
  ...props
}: CustomButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      hoverBgColor={hoverBgColor}
      {...props}
    />
  );
};

export default CustomButton;
