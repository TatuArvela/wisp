import styled from 'styled-components';

export const WellThemeProperties = ['Well'] as const;

export const Well = styled.div`
  ${(props) => props.theme.controls.Well}
`;

export default Well;
