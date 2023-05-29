import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../../icons/types';
import { getIconFileForSize } from '../../icons/utils';

export type TaskbarButtonProps = {
  active: boolean;
  icon?: Icon;
  title?: string;
  onClick(): void;
};

const TaskbarButtonElement = styled.button<TaskbarButtonProps>`
  ${(props) => props.theme.elements.TaskbarButton}
`;

const TaskbarButtonTitle = styled.div`
  ${(props) => props.theme.elements.TaskbarButtonTitle}
`;

const TaskbarButtonIconElement = styled.img`
  ${(props) => props.theme.elements.TaskbarButtonIcon}
`;

const TaskbarButtonIcon = ({ icon }: { icon: Icon }) => {
  if (!icon) {
    return null;
  }

  const iconFile = getIconFileForSize(icon);
  return <TaskbarButtonIconElement src={iconFile} alt="Window icon" />;
};

const TaskbarButton = ({
  active,
  icon,
  title,
  onClick,
}: TaskbarButtonProps) => {
  return (
    <TaskbarButtonElement type="button" active={active} onClick={onClick}>
      <TaskbarButtonIcon icon={icon} />
      <TaskbarButtonTitle>{title}</TaskbarButtonTitle>
    </TaskbarButtonElement>
  );
};

export default TaskbarButton;
