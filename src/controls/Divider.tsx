import styled from 'styled-components';

export const DividerThemeProperties = ['Divider'] as const;

export interface DividerProps {
  vertical?: boolean;
}

const Divider = styled.div<DividerProps>`
  ${(props) => props.theme.controls.Divider}
`;

export default Divider;
