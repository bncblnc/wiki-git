import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  background: #fafafa;
  border: 2px solid transparent;
  border-radius: 20px;

  width: 80%;
  height: 62px;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 20px;

  &:hover {
    background: #fafafa60;
    border: 2px solid #fafafa;
    color: #fafafa;
  }
`;
