import React, { useState } from "react";
import "../Portfolio/Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";
import DeliveryImg from "../../images/GERMANY-TO-TURKEY_001-1200x600 3.svg";
import ImgSwiper from '../../images/Turkey-to-Germany_004-1200x600.svg';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// swipe components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  return (
    <Container className="area-of-content-portfolio" id="portfolio">
      <Row className="gap-3">
        <span className="our-partners-head-text">Наше портфолио</span>
        <h1 className="entering-sub-text">
          Примеры перевозок компанией <br />
          <span className="blue-taklog-text">Taklog</span> по
          <span className="blue-taklog-text">всему миру</span>
        </h1>
      </Row>
      {/* section for photos logistic transports */}
      <Row className="mt-5 mb-5">
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={DeliveryImg}
            alt="From Germany to Turkey export images"
          />
          <div className="middle-effect">
            <div className="text-name-full">Турция-Германия</div>
            <Button
              className="moreee-info"
              variant="primary"
              onClick={() => setShow(true)}
            >
              Подробнее
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w border-none"
              aria-labelledby="example-custom-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img className="image-in-swiper" src={ImgSwiper} alt="Swiper img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="image-in-swiper" src={ImgSwiper} alt="Swiper img" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="image-in-swiper" src={ImgSwiper} alt="Swiper img" />
                  </SwiperSlide>
                </Swiper>
                <span className="napravlenie-text">Направление</span> <br/>
                <span className="from-side-to-side-text">Турция - Германия</span>
              </Modal.Body>
             
            </Modal>
          </div>
        </Col>
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={DeliveryImg}
            alt="From Germany to Turkey export images"
          />
          <div className="middle-effect">
            <div className="text-name-full">Турция-Германия</div>
            <Button
              className="moreee-info"
              variant="primary"
              onClick={() => setShow(true)}
            >
              Подробнее
            </Button>
          </div>
        </Col>
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={DeliveryImg}
            alt="From Germany to Turkey export images"
          />
          <div className="middle-effect">
            <div className="text-name-full">Турция-Германия</div>
            <Button
              className="moreee-info"
              variant="primary"
              onClick={() => setShow(true)}
            >
              Подробнее
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
