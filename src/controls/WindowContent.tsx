import styled from 'styled-components';

export const WindowContentThemeProperties = ['WindowContent'] as const;

const WindowContent = styled.div`
  ${(props) => props.theme.controls.WindowContent}
`;

export default WindowContent;
