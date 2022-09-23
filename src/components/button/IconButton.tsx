import React, { ButtonHTMLAttributes } from "react";
import { StyledIconButton } from "./styles";

const IconButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledIconButton type="button" {...rest}>
      {children}
    </StyledIconButton>
  );
};
export default IconButton;
