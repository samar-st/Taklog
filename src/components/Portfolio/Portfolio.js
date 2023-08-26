import React, { useState } from "react";
import "../Portfolio/Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";
import DeliveryImg from "../../images/GERMANY-TO-TURKEY_001-1200x600 3.svg";
import ImgSwiper from "../../images/Turkey-to-Germany_004-1200x600.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShowImg1 from "../../images/GERMANY-TO-TURKEY_001-1200x600 1.svg";
import ModalImg1 from "../../images/Turkey-to-Germany_002-1200x600.jpg";
import ModalImg2 from "../../images/Turkey-to-Germany_003-1200x600.jpg";
import ModalImg3 from "../../images/Turkey-to-Germany_004-1200x600.jpg";
import ModalCase1 from "../../images/Shipments-to-Usbekistan_001-1-1200x675.jpg";
import ModalCase2 from "../../images/Shipments-to-Usbekistan_003-1200x675.jpg";
import ModalCase3 from "../../images/Shipments-to-Usbekistan_004-1200x675.jpg";
import ModalLast1 from "../../images/GERMANY-TO-TURKEY_001-1200x600.jpg";
import ModalLast2 from "../../images/GERMANY-TO-TURKEY_002-1200x600.jpg";
import ModalLast3 from "../../images/GERMANY-TO-TURKEY_003-1200x600.jpg";
// swipe components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <Container className="area-of-content-portfolio" id="portfolio">
      <Row className="gap-3">
        <span className="our-partners-head-text">Наше портфолио</span>
        <h1 className="entering-sub-text">
          Примеры перевозок грузов компанией
          <span className="blue-taklog-text"> Taklog</span> по
          <span className="blue-taklog-text"> всему миру</span>
        </h1>
      </Row>
      {/* section for photos logistic transports */}
      <Row className="mt-5 mb-5">
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={ModalImg1}
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
              dialogClassName="modal border-none"
              aria-labelledby="example-custom-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={true}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="image-in-swiper"
                      src={ModalImg1}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper"
                      src={ModalImg2}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper"
                      src={ModalImg3}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <span className="napravlenie-text">Направление</span> <br />
                  <span className="from-side-to-side-text">
                    Турция - Германия
                  </span>
                </Swiper>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={ModalCase2}
            alt="From Germany to Turkey export images"
          />
          <div className="middle-effect">
            <div className="text-name-full-2">Германия - Узбекистан</div>
            <Button
              className="moreee-info"
              variant="primary"
              onClick={() => setShow2(true)}
            >
              Подробнее
            </Button>

            <Modal
              show={show2}
              onHide={() => setShow2(false)}
              dialogClassName="modal border-none"
              aria-labelledby="example-custom-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={true}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalCase1}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalCase2}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalCase3}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <span className="napravlenie-text">Направление</span> <br />
                  <span className="from-side-to-side-text">
                    Германия - Узбекистан
                  </span>
                </Swiper>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
        <Col md={4} className="block-of-delivery-images">
          <img
            className="delivery-image-portfolio"
            src={ModalLast1}
            alt="From Germany to Turkey export images"
          />
          <div className="middle-effect">
            <div className="text-name-full">Германия-Турция</div>
            <Button
              className="moreee-info"
              variant="primary"
              onClick={() => setShow3(true)}
            >
              Подробнее
            </Button>

            <Modal
              show={show3}
              onHide={() => setShow3(false)}
              dialogClassName="modal border-none"
              aria-labelledby="example-custom-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={true}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalLast1}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalLast2}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="image-in-swiper-2"
                      src={ModalLast3}
                      alt="Swiper img"
                    />
                  </SwiperSlide>
                  <span className="napravlenie-text">Направление</span> <br />
                  <span className="from-side-to-side-text">
                    Германия - Турция
                  </span>
                </Swiper>
              </Modal.Body>
            </Modal>
          </div>
        </Col>
      </Row>
      <a
        className="see-all-cases"
        href="https://instagram.com/taklog.uz?igshid=NTc4MTIwNjQ2YQ=="
      >
        Посмотреть все кейсы >{" "}
      </a>
    </Container>
  );
};

export default Portfolio;
