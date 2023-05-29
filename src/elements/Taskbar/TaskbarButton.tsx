import React from 'react';
import styled from 'styled-components';

import { WindowIcon } from '../../windowManager/types';

export type TaskbarButtonProps = {
  active: boolean;
  icon?: WindowIcon;
  title?: string;
  onClick(): void;
};

const StyledTaskbarButton = styled.button<TaskbarButtonProps>`
  ${(props) => props.theme.elements.TaskbarButton}
`;

const Title = styled.div`
  ${(props) => props.theme.elements.TaskbarButtonTitle}
`;

const StyledIcon = styled.img`
  ${(props) => props.theme.elements.TaskbarButtonIcon}
`;

const Icon = ({ icon }: { icon: WindowIcon }) => {
  if (!icon) {
    return null;
  }

  // TODO: get most suitable icon size from entries
  const iconFile = Object.entries(icon)[0][1];
  return <StyledIcon src={iconFile} alt="Window icon" />;
};

const TaskbarButton = ({
  active,
  icon,
  title,
  onClick,
}: TaskbarButtonProps) => {
  return (
    <StyledTaskbarButton type="button" active={active} onClick={onClick}>
      <Icon icon={icon} />
      <Title>{title}</Title>
    </StyledTaskbarButton>
  );
};

export default TaskbarButton;
