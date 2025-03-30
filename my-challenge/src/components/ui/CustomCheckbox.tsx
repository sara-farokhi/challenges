import { Checkbox, CheckboxProps } from "@mui/material";

interface CustomCheckboxProps extends CheckboxProps {
  checkedColor?: string;
  uncheckedColor?: string;
}

const CustomCheckbox = ({
  checkedColor = "#1976d2",
  uncheckedColor = "#e0e0e0",
  ...props
}: CustomCheckboxProps) => {
  return (
    <Checkbox
      sx={{
        color: uncheckedColor,
        "&.Mui-checked": {
          color: checkedColor,
        },
      }}
      {...props}
    />
  );
};

export default CustomCheckbox;
