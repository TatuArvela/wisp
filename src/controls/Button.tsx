import React from 'react';
import styled from 'styled-components';

type ButtonWrapperProps = {
  width: number;
  height: number;
};

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  ${(props) => props.theme.controls.ButtonWrapper}
`;

type Props = any & ButtonWrapperProps;

const ButtonElement = styled.button`
  ${(props) => props.theme.controls.Button}
`;

const Button: React.FC<Props> = ({ width, height, ...rest }) => (
  <ButtonWrapper width={width} height={height}>
    <ButtonElement {...rest} />
  </ButtonWrapper>
);

export default Button;
