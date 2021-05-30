import React from "react";
import styled from "styled-components";
// styles Footer
export const FooterStyle = styled.header`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 1vw;
  color: grey;
`;
// styles Footer

const Footer = () => {
  return (
    <FooterStyle>
      <small>Developed by Ruben Aguayo</small>
    </FooterStyle>
  );
};
export default Footer;
