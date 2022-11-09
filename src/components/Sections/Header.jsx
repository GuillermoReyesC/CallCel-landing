import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
/* import HeaderImage from "../../assets/img/header-img.png"; */
import CallCelImg from "../../assets/img/add/img2.jpg";

import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";



export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font40">¿Podemos ayudarte? <br/>Explora nuestros servicios </h1>
          <HeaderP className="font13 semiBold">
          mira los servicios que ofrecemos enfocados en la gestion de clientes. <a href="to=services"><strong><i>Leer más...</i></strong></a>."
          </HeaderP>
          <BtnWrapper >
            <FullButton title="Empecemos"/>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={CallCelImg} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8 ">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font14 whiteColor">
                <em>aqui deberia ir el  slogan que queremos, las imagenes son aleatoreas hasta  que hayan de un equipo integral.</em>
              </p>
              <p className="font12 orangeColor textRight" style={{marginTop: '4px'}}>Ralph Waldo Emerson</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 0px;

  }
  @media (max-width: 660px) {
    flex-direction: column;
    padding-top: 0px;

    
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
    
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
/* const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`; */
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 120%;
    justify-content: center;
    display: flex;
    justify-content: flex-start;
  }
  
`;
const Img = styled.img`
  width:95%;
  @media (max-width: 560px) {
    display: none;
  }
  
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    display: none;
  
  }
  @media (max-width: 560px) {
    bottom: -50px;
    display: none;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


