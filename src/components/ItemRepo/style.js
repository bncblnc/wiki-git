import { styled } from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  position: relative;

  img {
    width: 80px;
    float: left;
    margin-right: 10px;
  }

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  a,
  button {
    font-size: 20px;
    color: #fafafa;
    transition: all 0.2s;

    &:hover {
      color: #fafafa60;
    }
  }

  button {
    border: none;
    background: transparent;
    color: #fafafa;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 15px;
    position: absolute;
    top: 10px;
    right: 0;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
