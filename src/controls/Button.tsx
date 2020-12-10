import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  background: white;
  font-weight: bold;
  box-shadow: 1px 1px 0 0 gray;
  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`;
export default Button;
