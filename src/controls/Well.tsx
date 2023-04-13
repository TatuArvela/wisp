import styled from 'styled-components';

export const WellThemeProperties = ['Well'] as const;

const Well = styled.div`
  ${(props) => props.theme.controls.Well}
`;

export default Well;
