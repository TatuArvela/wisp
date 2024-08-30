import styled from 'styled-components';

export const MessageBoxTextThemeProperties = ['MessageBoxText'] as const;

export const MessageBoxText = styled.div`
  ${(props) => props.theme.controls.MessageBoxText}
`;

export default MessageBoxText;
