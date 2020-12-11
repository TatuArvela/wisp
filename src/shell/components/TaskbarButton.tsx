import styled, { css } from 'styled-components';

type TaskbarButtonProps = {
  active: boolean;
};
const activeStyle = css`
  font-weight: bold;
  border-color: lightgray;
  background: none;
  box-shadow: inset 1px 1px 0 gray;
`;
const TaskbarButton = styled.button<TaskbarButtonProps>`
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 1px 1px 0 lightgray;
  ${(props) => props.active && activeStyle};
`;
TaskbarButton.defaultProps = {
  type: 'button',
};

export default TaskbarButton;
