import styled from 'styled-components';

export const WindowElementContentThemeProperties = [
  'WindowElementContent',
] as const;

const WindowElementContent = styled.div`
  ${(props) => props.theme.window.WindowElementContent}
`;

export default WindowElementContent;
