import styled from 'styled-components';

export const MessageBoxContentThemeProperties = ['MessageBoxContent'] as const;

export const MessageBoxContent = styled.div`
  ${(props) => props.theme.controls.MessageBoxContent}
`;

export default MessageBoxContent;
