import styled from 'styled-components';

export const StatusBarSectionThemeProperties = ['StatusBarSection'] as const;

const StatusBarSection = styled.div`
  ${(props) => props.theme.controls.StatusBarSection}
`;

export default StatusBarSection;
