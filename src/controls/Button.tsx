import React from 'react';
import styled from 'styled-components';

interface ButtonWrapperProps {
  width?: number;
  height?: number;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${(props) => props.theme.controls.ButtonWrapper}
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  width?: number;
  height?: number;
}

const ButtonElement = styled.button`
  ${(props) => props.theme.controls.Button}
`;

const Button = ({ width, height, ...rest }: Props) => (
  <ButtonWrapper width={width} height={height}>
    <ButtonElement {...rest} />
  </ButtonWrapper>
);

export default Button;
