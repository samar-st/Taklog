import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Logisticimg from "../../images/1645505365_14-kartinkin-net-p-logistika-kartinki-14 1.svg";
import "../About/About.css";

const About = () => {
  const [details, setDetails] = useState(false);

  return (
    <Container className="block-of-this-about-page" id="about">
      <div className="super-block-content">
        <div className="common-about-container">
          <Row className="w-50" id="second-content-about">
            <span className="o-company-text">О компании</span>
            <h1 className="sub-text-heading">
              Доставим ваш <br /> товар в{" "}
              <span className="blue-text-span">целости</span> <br /> и{" "}
              <span className="blue-text-span">сохранности</span>
            </h1>
            <p className="about-us-text">
              В 2004 году благодаря господину Такилю мы получили тогдашний
              филиал транспортов TBT. Цель состояла в том, <br/> чтобы получить мощную
              основу в восточном и юго-восточном регионах. Для этого в качестве
              ВОРОТ в восточном направлении был создан Склад в Дрездене, откуда
              велась основная деятельность в сторону Восточной Европы.
            </p>
            
            <div className="resp-hide-text">
          {details && (
            <div className="hidden-div-block">
              <p className="hidden-us-text">
                В 2004 году благодаря господину Такилю мы получили тогдашний
                филиал транспортов TBT. Цель состояла в том, чтобы получить
                мощную основу в восточном и юго-восточном регионах. Для этого в
                качестве ВОРОТ в восточном направлении был создан Склад в
                Дрездене, откуда велась основная деятельность в сторону
                Восточной Европы.
              </p>
              <p className="hidden-us-text">
                В 2004 году благодаря господину Такилю мы получили тогдашний
                филиал транспортов TBT. Цель состояла в том, чтобы получить
                мощную основу в восточном и юго-восточном регионах. Для этого в
                качестве ВОРОТ в восточном направлении был создан Склад в
                Дрездене, откуда велась основная деятельность в сторону
                Восточной Европы.
              </p>
            
            </div>
          )}
            </div>
            <button
              className="show-less-more-text-none"
              onClick={() => setDetails((prev) => !prev)}>
              {details ? "Меньше >" : "Больше >"}
            </button>
          </Row>
          <Row>
            <img className="logistic-img" src={Logisticimg} alt="img" />
          </Row>
        </div>
        <div className="desktop-resp-text">
        
          {details && (
            <div className="hidden-div-block">
              <p className="hidden-us-text">
                В 2004 году благодаря господину Такилю мы получили тогдашний
                филиал транспортов TBT. Цель состояла в том, чтобы получить
                мощную основу в восточном и юго-восточном регионах. Для этого в
                качестве ВОРОТ в восточном направлении был создан Склад в
                Дрездене, откуда велась основная деятельность в сторону
                Восточной Европы.
              </p>
              <p className="hidden-us-text">
                В 2004 году благодаря господину Такилю мы получили тогдашний
                филиал транспортов TBT. Цель состояла в том, чтобы получить
                мощную основу в восточном и юго-восточном регионах. Для этого в
                качестве ВОРОТ в восточном направлении был создан Склад в
                Дрездене, откуда велась основная деятельность в сторону
                Восточной Европы.
              </p>
            
            </div>
          )}
             {/* show more btn */}
             <button
              className="show-less-more-text"
              onClick={() => setDetails((prev) => !prev)}>
              {details ? "Меньше >" : "Больше >"}
            </button>

            {/* more text */}
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </Container>
  );
};

export default About;
