import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "11px" }}>
                CallCell Contact Center Ltda.
              </h1>
              <p className="font12 Bold whiteColor" style={{ marginLeft: "11px" }}>
                Profesionales de confianza
              </p>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">UltraDesk Development</span> All Right Reserved
            </StyleP>
            <div className="menu navigation-menu "></div>
            <ul>
              <li>   
                <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                  inicio
                </Link>
              </li>
              <li>
                <Link className="whiteColor animate pointer font13" to="projects" smooth={true} offset={-80}>
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link className="whiteColor animate pointer font13" to="services" smooth={true} offset={-80}>
                Servicios
                </Link>
                </li>
            </ul>
            
            <ul>
            <li>   
                <Link className="whiteColor animate pointer font13" to="pricing" smooth={true} offset={-80}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="whiteColor animate pointer font13" to="contact" smooth={true} offset={-80}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="whiteColor animate pointer font13" to="projects" smooth={true} offset={-80}>
                Projects
                </Link>
                </li>
            </ul>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;