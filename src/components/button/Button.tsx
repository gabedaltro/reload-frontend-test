import Typography from "components/typography/Typography";
import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette?: "primary" | "secondary" | "error";
  variant?: "contained" | "text" | "link";
  size?: "small" | "default";
}

const Button: React.FC<ButtonProps> = ({
  palette = "primary",
  variant = "contained",
  size = "default",
  children,
  ...rest
}) => {
  return (
    <ButtonStyled palette={palette} variant={variant} size={size} {...rest}>
      <Typography style={{ display: "flex", gap: 5, alignItems: "center" }}>
        {children}
      </Typography>
    </ButtonStyled>
  );
};
export default Button;
