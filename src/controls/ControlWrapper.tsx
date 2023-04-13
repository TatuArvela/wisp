import styled from 'styled-components';

export interface ControlWrapperProps {
  inlineLabel?: boolean;
}

// internal
const ControlWrapper = styled.div<ControlWrapperProps>`
  ${(props) => props.theme.controls.ControlWrapper}
`;

export default ControlWrapper;
