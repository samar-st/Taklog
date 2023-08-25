import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Offices/Offices.css";

const Offices = () => {
  return (
    <Container className="offices-block-area" id="offices">
      <Row className="content-area-of-offices">
        <span className="our-offices-text">Наши офисы</span>
        <h1 className="head-text-of-offices">
          <span>Taklog</span> предоставлен <br /> по <span>всему миру</span>
        </h1>
        <p className="sub-text-offices">
          TAKLOG имеет свои офисы во многих странах. Штаб-квартира нашей
          компании находится в Хоф / Верхняя Франкония. Наши офисы в таких
          странах как Узбекистан, Германия, Турция. Наши локации по всему миру
          можно посмотреть здесь:
        </p>
      </Row>
      {/* google maps */}
      <Row className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.532961208112!2d69.28371547609558!3d41.297268001580164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad4612c315%3A0x7ecd0d2533ddee75!2sTAKLOG%20International%20Transport!5e0!3m2!1sru!2s!4v1692929148164!5m2!1sru!2s"
         
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Row>
    </Container>
  );
};

export default Offices;
