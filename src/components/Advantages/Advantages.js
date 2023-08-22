import React, { useState } from "react";
import "../Advantages/Advantages.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Advantages = () => {
  const [text, setText] = useState(false);

  return (
    <Container className="area-of-content-advantages" id="advantages">
      <Row className="first-block-services">
        <span className="our-services-text">Наши преимущества</span>
        <h1 className="sub-title-text-advantages">
          <span className="blue-text-span">Taklog</span> - больше чем просто
          логистика
        </h1>
        <p className="client-support-text">
          Неуклонный рост современной экономики, а также ее перманентная
          глобализация, являются основными факторами повышения эффективности
          доставки грузов, которая в свою очередь является одним из наиболее
          приоритетныx направлений в сокращении издержек организаций торговли и
          сферы услуг.
          <span id="desk-text-support">
            Поиск наиболее эффективныx вариантов доставки грузов на
            одном либо нескольких видаx транспорта, является нашей основной целью
            на пути выполнения требований и ожиданий клиентов. Деятельность нашей
            компании, прежде всего, базируется на принципах индивидуального
            обслуживания, исходя из требований и условий каждого, отдельно взятого
            клиента. Мы прилагаем все свои усилия для развития комплексной и
            надежной системы экспедирования грузов, основными приоритетами которой
            являются клиентоориентированность, конкурентоспособность, гибкая
            ценовая политика и безопасность.
          </span>
          
          { text && (
          <span id="mobx-text-support">
            Поиск наиболее эффективныx вариантов доставки грузов на
            одном либо нескольких видаx транспорта, является нашей основной целью
            на пути выполнения требований и ожиданий клиентов. Деятельность нашей
            компании, прежде всего, базируется на принципах индивидуального
            обслуживания, исходя из требований и условий каждого, отдельно взятого
            клиента. Мы прилагаем все свои усилия для развития комплексной и
            надежной системы экспедирования грузов, основными приоритетами которой
            являются клиентоориентированность, конкурентоспособность, гибкая
            ценовая политика и безопасность.
          </span>

          )}
        </p>
        <button id="hide-more-less-button"
          className="show-less-more-text-none"
          onClick={() => setText((prev) => !prev)}
        >
          {text ? "Меньше >" : "Больше >"}
        </button>
      </Row>

      {/* 3 cards section */}
      <Row className="mt-5" id="three-cards-block">
        <Col md={4}>
          <Card className="block-card-of-advantages">
            <Card.Body className="body-part-of-cards-advantages">
              <Card.Title className="head-text-of-card-advantages">
                Профессионализм <br /> и компетентность
              </Card.Title>
              <Card.Text className="sub-text-of-card-advantages">
                Мы постоянно развиваемся, предлагаем полный спектр услуг в
                логистике, а также международные перевозки грузов по всему миру.
                Многолетний, профессиональный опыт и сотрудничество с
                партнёрскими сетями и агентами обеспечивают доставку door to
                door. Мы можем все!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="block-card-of-advantages">
            <Card.Body className="body-part-of-cards-advantages">
              <Card.Title className="head-text-of-card-advantages">
                Высококачественный сервис
              </Card.Title>
              <Card.Text className="sub-text-of-card-advantages">
                Мы поставляем Вам не просто высококачественный, но и разные
                индивидуальные решения, отвечающие вашим требованиям и
                пожеланиям. Мы располагаем всеми ресурсами для удовлетворения
                потребностей клиентов.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="block-card-of-advantages">
            <Card.Body className="body-part-of-cards-advantages">
              <Card.Title className="head-text-of-card-advantages">
                Перевозка <br /> негабаритных грузов <br /> и сложные проекты
              </Card.Title>
              <Card.Text className="sub-text-of-card-advantages">
                Одно из наших преимуществ, это перевозка нестандартных грузов.
                Наши клиенты охотно пользуются данной услугой. Наш многолетний
                опыт работы, партнерская сеть, а также знания, это все то
                помогает нам осуществлять самые сложные грузоперевозки по всему
                миру
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Advantages;
