import styled from 'styled-components';

export const DesktopThemeProperties = ['Desktop'] as const;

export const Desktop = styled.div`
  ${(props) => props.theme.elements.Desktop}
`;

export default Desktop;
