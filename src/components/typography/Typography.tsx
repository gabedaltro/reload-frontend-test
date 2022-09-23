import React, { HTMLAttributes } from 'react';
import { TypographyStyled } from './styles';

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: number;
  bold?: boolean;
  align?: 'center' | 'left' | 'right';
  color?: string;
  gutterBottom?: boolean;
  palette?: 'primary' | 'secondary' | 'error' | 'success';
  isTitle?: boolean;
  noWrap?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  size,
  bold,
  align,
  color,
  children,
  gutterBottom = false,
  isTitle = false,
  noWrap = false,
  ...rest
}) => {
  return (
    <TypographyStyled
      {...rest}
      isTitle={isTitle}
      gutterBottom={gutterBottom}
      color={color}
      bold={bold}
      size={size}
      align={align}
      noWrap={noWrap}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
