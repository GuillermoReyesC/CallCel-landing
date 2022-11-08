// src/component/Gallery.js
import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CallCelImg from "../../assets/img/teamfakedif.jpg";
import CallCelImg2 from "../../assets/img/workstationdif2.jpg";
import CallCelImg3 from "../../assets/img/headset1.jpg"


const textOnImage = {
    color: 'white',
    position: 'absolute',
    top: '68%',
    left: '20%', 
    textAlign:'left',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textShadow: '3px 4px 6px rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexDirection: 'row',
    fontSize: '4.5vw',

    
}
const textOnImageMid = {
    color: 'white',
    position: 'absolute',
    top: '60%',
    left: '50%', 
    textAlign:'center',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textShadow: '3px 4px 6px rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexDirection: 'row',
    fontSize: '4.5vw',

    
}

const textOnImageEnd = {
    color: 'white',
    position: 'absolute',
    top: '58%',
    left: '80%', 
    textAlign:'right',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    textShadow: '3px 4px 6px rgba(0,0,0,0.7)',
    display: 'right',
    justifyContent: 'spaceBetween',
    flexDirection: 'row',
    fontSize: '4.5vw',

    
}

const Wrapper = styled.section`
  width: 100%;
`;
class Gallery extends React.Component {
    render() {

        
        return (
          <Wrapper id="galery">
              <div>
                <h2>My Photo Gallery</h2>
                <Carousel  showThumbs={false} autoPlay interval="5000" transitionTime="4000" infiniteLoop>
                    <div>
                        <img src={CallCelImg} alt="callCenter"/>
                        <p className="extraBold font50" style={textOnImage} > CallCel  <br/> Contact center <br/> te da la <br/> bienvenida</p>
                        
                    </div>
                    <div>
                        <img src={CallCelImg2} alt="" />
                        <p className="extraBold font50" style={textOnImageMid} > Una nueva   <br/> forma de gestion <br/>para tus <br/> clientes</p>
                        
                    </div>
                    <div>
                        <img src={CallCelImg3} alt="" />
                        <p className="extraBold font50" style={textOnImageEnd} > Desde  <br/> la comodidad <br/> de tu <br/> casa</p>
                        
                    </div>
                </Carousel>
            </div>
          </Wrapper>
        )
    };
}
export default Gallery

