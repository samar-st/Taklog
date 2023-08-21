import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Our-services/Services.css";
import TrackShadow from '../../images/track-shadow.svg';
import TrainImg from '../../images/gruzovye-zheleznodorozhnye-perevozki 1.svg';
import AirwaysImg from '../../images/Flying-Aeroplane-PNG-Free-Image 1.svg';

const Services = () => {
  return (
    <Container className="block-of-services-content" id="services">
      {/* entering section for services page */}
      <Row className="first-block-services">
        <span className="our-services-text">Наши услуги</span>
        <h1 className="sub-title-text-services">
          <span className="blue-text-span">Оказываем</span> полную{" "}
          <span className="blue-text-span">поддержку</span> в доставке
          вашего груза
        </h1>
        <p className="client-support-text">
          В 2004 году благодаря господину Такилю мы получили тогдашний филиал
          транспортов TBT. Цель состояла в том, чтобы получить мощную основу в
          восточном и юго-восточном регионах. Для этого в качестве ВОРОТ в
          восточном направлении был создан Склад в Дрездене, откуда велась
          основная деятельность в сторону Восточной Европы.
        </p>
      </Row>

      {/* 3 cards with images of trains and airplane */}
      <Row className="services-container-images-cards">
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center" id="track-img-white-col">
        <img className="image-of-transports" src={TrackShadow} alt="Track image with bottom shadow" />
          <Card className="item-card-service">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">Автомобильная перевозка</Card.Title>
              <Card.Text className="content-text-auto">
                Один из самых удобных и экономичных видов доставки
                грузов-автомобильные грузоперевозки. Доставка автомобильным
                транспортом лидирует среди других видов транспортировки
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center" id="track-img-white-col">
        <img className="image-of-transports" src={TrainImg} alt="image of train" />
          <Card className="item-card-service2">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">Железно-дорожная перевозка</Card.Title>
              <Card.Text className="content-text-auto">
                Taklog выполняет полный комплекс услуг по железнодорожному виду
                транспорта, предлагая индивидуальный сервис и информируя обо
                всех процессах в ходе перевозки.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center" id="track-img-white-col">
        <img className="image-of-transports" id="aeroplane" src={AirwaysImg} alt="image of aeroplane" />
          <Card className="item-card-service3">
            <Card.Body className="body-part-of-texts">
              <Card.Title className="title-text-auto">Авиа-перевозка</Card.Title>
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
