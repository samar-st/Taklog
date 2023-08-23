import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Partners/Partners.css';
import Logo1 from '../../images/Item ⏵ Link ⏵ UNSERE-PARTNER-1.jpg.svg';
import Logo2 from '../../images/Item ⏵ menu-partner-pytam.png.svg';
import Logo3 from '../../images/Item ⏵ menu-partner-unt.png.svg';
import Logo4 from '../../images/Item ⏵ RTIB1.jpg.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const Partners = () => {
  return (
    <Container className="content-area-partners" id="partners">
      <Row className="gap-4">
        <span className="our-partners-head-text">Наши партнеры</span>
        <h1 className="entering-sub-text">
          <span className="blue-taklog-text">Taklog</span> успешно сотрудничает <br /> c{" "}
          <span className="blue-taklog-text">Европейскими</span> компаниями
        </h1>
      </Row>
      {/* logos from companies */}
      <Row className="block-area-of-logos">
        <img src={Logo1} alt="Logotip img of company" />
        <img src={Logo2} alt="Logotip img of company" />
        <img src={Logo4} alt="Logotip img of company" />
        <img src={Logo3} alt="Logotip img of company" />
      </Row>
      <Row className="block-area-of-logos-mobile-version">
      <img src={Logo1} alt="Logotip img of company" />
        <img src={Logo2} alt="Logotip img of company" />
        <img src={Logo4} alt="Logotip img of company" />
        <img src={Logo3} alt="Logotip img of company" />
      </Row>
    </Container>
  );
};

export default Partners;
