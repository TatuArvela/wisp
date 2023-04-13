import styled from 'styled-components';

export const ControlWrapperThemeProperties = ['ControlWrapper'] as const;

export interface ControlWrapperProps {
  inlineLabel?: boolean;
}

// internal
const ControlWrapper = styled.div<ControlWrapperProps>`
  ${(props) => props.theme.controls.ControlWrapper}
`;

export default ControlWrapper;
