import React from 'react';
import styled from 'styled-components';

export const ButtonThemeProperties = ['Button', 'ButtonWrapper'] as const;

interface ButtonWrapperProps {
  width?: number;
  height?: number;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${(props) => props.theme.controls.ButtonWrapper}
`;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  width?: number;
  height?: number;
}

const ButtonElement = styled.button`
  ${(props) => props.theme.controls.Button}
`;

const Button = ({ width, height, ...rest }: ButtonProps) => (
  <ButtonWrapper width={width} height={height}>
    <ButtonElement {...rest} />
  </ButtonWrapper>
);

export default Button;
