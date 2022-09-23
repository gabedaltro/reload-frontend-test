import styled, { css } from "styled-components";

type TypographyProps = {
  size?: number;
  bold?: boolean;
  align?: "center" | "left" | "right";
  color?: string;
  gutterBottom?: boolean;
  palette?: "primary" | "secondary" | "error" | "success";
  isTitle: boolean;
  noWrap: boolean;
};

export const TypographyStyled = styled.p<TypographyProps>`
  font-weight: 400;
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}

    ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

    ${(props) =>
    props.palette &&
    css`
      color: ${props.theme[props.palette]};
    `}

    ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: 12px;
    `}

    ${(props) =>
    props.isTitle &&
    css`
      font-family: "Roboto";
      font-size: 24px;
      color: ${(props) => props.theme.primary};
    `}

    ${(props) =>
    props.noWrap &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
