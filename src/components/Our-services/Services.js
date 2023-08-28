import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Our-services/Services.css";
import TrackShadow from "../../images/track-shadow.svg";
import TrainImg from "../../images/gruzovye-zheleznodorozhnye-perevozki 1.svg";
import AirwaysImg from "../../images/Flying-Aeroplane-PNG-Free-Image 1.svg";
import Aos from "aos";

const Services = () => {

useEffect( () => { 
  Aos.init({
    duration:3000})
} )

  return (
    <Container className="block-of-services-content" id="services">
      {/* entering section for services page */}
      <Row className="first-block-services">
        <span className="our-services-text" data-aos-once="false" data-aos="fade-right ">Наши услуги</span>
        <h1 className="sub-title-text-services" data-aos-once="false" data-aos="fade-right">
          <span className="blue-text-span">Оказываем</span> полную{" "}
          <span className="blue-text-span">поддержку</span> в доставке вашего
          груза
        </h1>
        <p className="client-support-text" data-aos="fade-left">
          Компания TAKLOG оказывает полную поддержку нашим клиентам, от отправки
          до таможенного оформления и заполнения сопроводительной документации
          вашего груза — TAKLOG предлагает полный пакет услуг. Мы покрываем все
          возможные маршруты на ближайщий Восток. Мы предлагаем нашим клиентам
          следующие виды перевозки товаров:
        </p>
      </Row>

      {/* 3 cards with images of trains and airplane */}
      <Row className="services-container-images-cards">
        <Col data-aos="zoom-out-up"
          md={4}
          className="d-flex flex-column align-items-center justify-content-center"
          id="track-img-white-col"
        >
          <img
            className="image-of-transports"
            src={TrackShadow}
            alt="Track image with bottom shadow"
          />
          <Card className="item-card-service">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">
                Автомобильная перевозка
              </Card.Title>
              <Card.Text className="content-text-auto">
                Один из самых удобных и экономичных видов доставки
                грузов-автомобильные грузоперевозки. Доставка автомобильным
                транспортом лидирует среди других видов транспортировки
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col data-aos="zoom-out-up"
          md={4}
          className="d-flex flex-column align-items-center justify-content-center"
          id="track-img-white-col"
        >
          <img
            className="image-of-transports"
            id="train"
            src={TrainImg}
            alt="image of train"
          />
          <Card className="item-card-service2">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">
                Железно-дорожная перевозка
              </Card.Title>
              <Card.Text className="content-text-auto">
                Taklog выполняет полный комплекс услуг по железнодорожному виду
                транспорта, предлагая индивидуальный сервис и информируя обо
                всех процессах в ходе перевозки.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col data-aos="zoom-out-up"
          md={4}
          className="d-flex flex-column align-items-center justify-content-center"
          id="track-img-white-col"
        >
          <img
            className="image-of-transports"
            id="aeroplane"
            src={AirwaysImg}
            alt="image of aeroplane"
          />
          <Card className="item-card-service3">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">
                Авиа-перевозка
              </Card.Title>
              <Card.Text className="content-text-auto">
                Специалисты нашей компании разработуют наиболее оптимальный
                маршрут доставки. Мы оказываем содействие в оформлении
                сопроводительной документации и в выборе сопутствующих услуг.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
