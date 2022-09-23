import styled, { css } from "styled-components";

interface ButtonProps {
  palette: "primary" | "secondary" | "error";
  variant: "contained" | "text" | "link";
  size: "small" | "default";
}

export const ButtonStyled = styled.button<ButtonProps>`
  background: ${(props) => props.theme[props.palette]};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  border-radius: 6px;
  color: #fff;

  :hover:not(:disabled) {
    background: ${(props) => props.theme[props.palette + "Dark"]};
  }

  :active:not(:disabled) {
    filter: brightness(85%);
  }

  ${(props) =>
    props.variant === "text" &&
    css`
      background: transparent;
      color: ${props.theme.primary};
      :hover:not(:disabled) {
        background: rgba(0, 0, 0, 0.05);
      }
      :active:not(:disabled) {
        background: rgba(0, 0, 0, 0.07);
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 13px;
      padding: 8px 15px;
      border-radius: 4px;
    `}

    ${(props) =>
    props.variant === "link" &&
    css`
      padding: 0;
      background: transparent;
      color: ${props.theme[props.palette]};
      :hover:not(:disabled) {
        background: transparent;
      }
      :active:not(:disabled) {
        background: transparent;
      }
    `}

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledIconButton = styled.button`
  background: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.05);
  }

  :active:not(:disabled) {
    background: rgba(0, 0, 0, 0.1);
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
