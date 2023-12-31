import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import "../Main/Main.css";
import TrackImg from '../../images/track-2.png';
import Aos from "aos";
import 'aos/dist/aos.css';

const Main = () => {

  useEffect( () =>  { 
     Aos.init({duration:1300})
  })

  return (
    <Container className="fully-main-container" id="mainPage">
      <div className="left-part-of-container" data-aos = "fade-right">
        <Row className="text-content-mini">
            <h1 className="head-text-main">
              Надежно <span className="delivery-text">перевезем</span> <br /> ваш{" "}
              <span className="cargo-text">груз</span> в нужную <br /> вам точку{" "}
            </h1>
            <p className="more-text-main">
              Более 30 лет компания Taklog является надежным <br/> партнером в
              области логистики и экспедирования грузов.
            </p>
            <p className="more-text-main-mobx">
              Более 30 лет компания Taklog является надежным партнером в
              области логистики <br/>и экспедирования грузов.
            </p>
        </Row>
        <div className="statistics-section">
          <div>
              <h2 className="count-of-exp">30</h2>
              <span className="text-of-exp">лет <br/> опыта</span>
          </div>
          <div>
            <h2 className="count-of-exp">1000+</h2>
              <span className="text-of-exp">завершенные <br/> перевозки</span>
          </div>
          <div>
            <h2 className="count-of-exp">800+</h2>
              <span className="text-of-exp">довольных <br/> клиентов</span>
          </div>
        </div>
      </div>
      <div className="right-part-of-container" data-aos = "fade-left">
        <img src={TrackImg} alt="image of track white" />
      </div>
    </Container>
  );
};

export default Main;
