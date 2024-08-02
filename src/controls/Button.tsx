import React from 'react';
import styled from 'styled-components';

export const ButtonThemeProperties = [
  'ButtonElement',
  'ButtonWrapper',
] as const;

export interface ButtonWrapperProps {
  disabled?: boolean;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${(props) => props.theme.controls.ButtonWrapper}
`;

export interface ButtonElementProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
}

const ButtonElement = styled.button`
  ${(props) => props.theme.controls.ButtonElement}
`;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  height?: number;
  width?: number;
}

export const Button = ({ width, height, disabled, ...rest }: ButtonProps) => (
  <ButtonWrapper
    disabled={disabled}
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    <ButtonElement disabled={disabled} {...rest} />
  </ButtonWrapper>
);

export default Button;
