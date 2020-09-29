import styled from "styled-components";

export const Face = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffcd00;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    background: #b57700;
  }
`;
