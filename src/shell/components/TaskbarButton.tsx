import styled from 'styled-components';

type TaskbarButtonProps = {
  active: boolean;
};
const TaskbarButton = styled.button<TaskbarButtonProps>`
  filter: ${(props) => !props.active && 'brightness(80%)'};
  font-weight: ${(props) => props.active && 'bold'};
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
`;
TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
