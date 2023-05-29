import React from 'react';
import styled from 'styled-components';

export const ButtonThemeProperties = ['Button', 'ButtonWrapper'] as const;

interface ButtonWrapperProps {
  disabled?: boolean;
  height?: number;
  width?: number;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${(props) => props.theme.controls.ButtonWrapper}
`;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  height?: number;
  width?: number;
}

const ButtonElement = styled.button`
  ${(props) => props.theme.controls.Button}
`;

const Button = ({ width, height, ...rest }: ButtonProps) => (
  <ButtonWrapper style={{ width: `${width}px`, height: `${height}px` }}>
    <ButtonElement {...rest} />
  </ButtonWrapper>
);

export default Button;
