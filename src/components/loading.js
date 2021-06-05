import React from "react";
import styled from "styled-components";
// styles Loading
export const LoadingStyle = styled.div`
  margin-top: 6vh;
  color: red;
  text-decoration: none;
  height: 10vh;
  border-radius: 8px;
  margin-bottom: 1.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    height: 25vh;
    animation: loadingAnimation 5s infinite;
  }
  @keyframes loadingAnimation {
    100% {
      transform: rotate(360deg);
    }
  }
`;
// styles Loading
const Loading = () => {
  return (
    <LoadingStyle>
      <h2>Cargando...</h2>
    </LoadingStyle>
  );
};
export default Loading;
