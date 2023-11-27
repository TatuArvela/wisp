import React from 'react';
import styled from 'styled-components';

import type { Icon } from '../../icons';
import { getIconFileForSize } from '../../icons/utils';
import { useThemeManager } from '../../themeManager/hooks';

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

const TaskbarButtonIcon = ({ icon }: { icon: string | Icon }) => {
  const { theme } = useThemeManager();

  const resolvedIcon = typeof icon === 'string' ? theme.icons[icon] : icon;
  if (!resolvedIcon) {
    return null;
  }

  const iconFile = getIconFileForSize(resolvedIcon);
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
      {icon !== undefined && <TaskbarButtonIcon icon={icon} />}
      <TaskbarButtonTitle>{title}</TaskbarButtonTitle>
    </TaskbarButtonElement>
  );
};

export default TaskbarButton;
