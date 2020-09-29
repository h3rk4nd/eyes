import styled from "styled-components";

export const Eye = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 15px;
  background: #fff;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #333;
    border-radius: 50%;
  }
`;
